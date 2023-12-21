import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { Button } from "src/components/ui/button"
import { BadgeCheck, Key, PlusCircle } from "lucide-react"
import { useState } from 'react'
import installAppBg from 'src/img/install-app-bg.png'
import { Icons } from "src/components/ui/icons"
import { Progress } from "src/components/ui/progress"


import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom"



export default function SetupAppModal({appToInstall, appImage, appPlan}){
  const [open, setOpen] = useState(false)
  const [installStep, setInstallStep] = useState(0)
  const [installingAppPercent, setInstallingAppPercent] = useState(0);
  const { user, auth, logout } = useUser();
  
  const sites = useQuery('sites', () => site.list(), {enabled: false});

  const { data: installed_apps_main, refetch: refresh_installed_apps_main } = useQuery('installed_apps_main', () => site.installed_apps(sites.data.site_list[0].name), {enabled: false});  


  const installingApp = () => {
    const intervalId = setInterval(async () => {
      const res = await refresh_installed_apps_main();
      const isInstalled = res?.data.some(installedApp => installedApp.title === appToInstall);

      setInstallingAppPercent(prevPercent => {
        const newPercent = prevPercent + 5;
        return newPercent;
      });

      if (isInstalled) {
        setInstallStep(2);
        clearInterval(intervalId);
      }
    }, 5000);
  };

  const { data: siteOverviewQuery , refetch: refreshsiteOverviewQuery} = useQuery(
    ['apptoinstall'],
    () => site.install_app(sites.data.site_list[0].name, appToInstall, appPlan.name),
    {
      enabled: false,
      onSuccess: (data) => {
        console.log('Installation successful:', data);
        installingApp();
        //setInstallStep(2)
      },
    }
  );



  const installThisApp = () => {
    refreshsiteOverviewQuery();
    setOpen(true);
    setInstallStep(1)
   // installingApp()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} onClose={() => null} onInteractOutside={(e) => { e.preventDefault(); }}>
      <DialogTrigger>
        <Button className='btn-with-icon'>
          <PlusCircle className="h-4 w-4"/>
          Add to site
        </Button>
      </DialogTrigger>
      {installStep === 1 ? (
        <DialogContent className='overflow-hidden max-w-[500px] w-[500px] justify-center px-20' onInteractOutside={(e) => { e.preventDefault(); }}>
          <DialogHeader>
            <DialogTitle className='text-center'>Installing {appToInstall}</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-x-[10px] my-4 w-full">
            <Progress value={installingAppPercent}/>
            <span className="text-xs text-[#71717A]">{installingAppPercent}%</span>
          </div>
          <DialogDescription className='text-center'>Installing app... Please do not close this page until the installation is done.</DialogDescription>
        </DialogContent>
      ) : installStep === 2 ? (
        <DialogContent className='p-0 overflow-hidden max-w-[400px] w-[400px]' onInteractOutside={(e) => { e.preventDefault(); }}>
          <DialogHeader>
            <section className='p-12 flex flex-row justify-around' style={{background:`url(${installAppBg})`,backgroundSize:"cover"}}>
              <div className="w-[72px] h-[72px] bg-white shadow-lg rounded-lg flex items-center justify-center">
                {appImage}
              </div>
            </section>

            <section className="p-6">
              <DialogTitle>{appToInstall} has been successfully installed</DialogTitle>
              <DialogDescription className='mt-3'>You can start the application by clicking 'Open'</DialogDescription>
            </section>
          </DialogHeader>
          <DialogFooter className='p-6 pt-0'>
            <Button className='btn-with-icon w-full'>
              <BadgeCheck className="w-4 h-4"/>
              Open
            </Button>
          </DialogFooter>
        </DialogContent>
      ) : (
        <DialogContent className='p-0 overflow-hidden max-w-[400px] w-[400px]' onInteractOutside={(e) => { e.preventDefault(); }}>
          <DialogHeader>
            <section className='p-12 flex flex-row justify-around' style={{background:`url(${installAppBg})`,backgroundSize:"cover"}}>
              <div className="w-[72px] h-[72px] bg-white shadow-lg rounded-lg flex items-center justify-center">
                <Icons.zaviagoApp className='w-[52px] h-[52px]'/>
              </div>
              <div className="w-[72px] h-[72px] bg-white shadow-lg rounded-lg flex items-center justify-center">
                {appImage}
              </div>
            </section>

            <section className="p-6">
              <DialogTitle>Install {appToInstall} to your workspace</DialogTitle>
              <DialogDescription className='mt-3'>The app will be able to read the email address you use to log in to Zaviago</DialogDescription>
              <Button className='btn-with-icon text-[#006AFF] mt-6' variant='secondary'>
                <Key className="h-4 w-4 text-[#006AFF]"/>
                Privacy Policy and Terms of Service
              </Button>
            </section>
          </DialogHeader>
          <DialogFooter className='p-6 pt-0'>
            <div className="flex justify-between w-full">
              <DialogClose>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button onClick={installThisApp}>Install apps</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  )
}