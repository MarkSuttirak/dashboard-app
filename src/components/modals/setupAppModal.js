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
import { useTranslation } from "react-i18next"

export default function SetupAppModal({appToInstall, appImage, appPlan}){
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [installStep, setInstallStep] = useState(0)
  const [installingAppPercent, setInstallingAppPercent] = useState(0);
  const { user, auth, logout } = useUser();
  
  const sites = useQuery('sites', () => site.list(), {enabled: false});

  const { data: installed_apps_main, refetch: refresh_installed_apps_main } = useQuery('installed_apps_main', () => site.get_agent_jobs(sites.data.site_list[0].name), {enabled: false});  

  const installingApp = () => {
    const intervalId = setInterval(async () => {
      const res = await refresh_installed_apps_main();
      const isInstalled = res?.data.some(installedApp => installedApp.status === 'Pending');

      console.log(isInstalled);

      setInstallingAppPercent(prevPercent => {
        const newPercent = prevPercent + 5;
        return newPercent;
      });
      if (!isInstalled) {
        setInstallStep(2);
        clearInterval(intervalId);
      }
    }, 5000);
  };

  const { data: siteOverviewQuery, refetch: refreshsiteOverviewQuery } = useQuery(
    ['apptoinstall'],
    () => site.install_app(
      sites.data.site_list[0].name,
      appToInstall,
      appPlan ? appPlan.name : undefined  // Pass appPlan.name if appPlan has a value, else pass undefined
    ),
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
          {t('add_to_site')}
        </Button>
      </DialogTrigger>
      {installStep === 1 ? (
        <DialogContent className='overflow-hidden max-w-[500px] w-[500px] justify-center px-20' onInteractOutside={(e) => { e.preventDefault(); }}>
          <DialogHeader>
            <DialogTitle className='text-center'>{t('install_app_modal.installing')} {appToInstall}</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-x-[10px] my-4 w-full">
            <Progress value={installingAppPercent}/>
            <span className="text-xs text-secondary">{installingAppPercent}%</span>
          </div>
          <DialogDescription className='text-center'>{t('install_app_modal.installing_warning')}</DialogDescription>
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
              <DialogTitle>{appToInstall} {t('install_app_modal.installed_successfully')}</DialogTitle>
              <DialogDescription className='mt-3'>{t('install_app_modal.installed_successfully_desc')}</DialogDescription>
            </section>
          </DialogHeader>
          <DialogFooter className='p-6 pt-0'>
            <Button className='btn-with-icon w-full' onClick={window.location.reload()}>
              <BadgeCheck className="w-4 h-4"/>
              {t('install_app_modal.open')}
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
              <DialogTitle>{t('install_app_modal.install')} {appToInstall} {t('install_app_modal.to_your_workspace')}</DialogTitle>
              <DialogDescription className='mt-3'>{t('install_app_modal.install_desc')}</DialogDescription>
              <Button className='btn-with-icon text-[#006AFF] mt-6' variant='secondary'>
                <Key className="h-4 w-4 text-[#006AFF]"/>
                {t('install_app_modal.privacy_policy')}
              </Button>
            </section>
          </DialogHeader>
          <DialogFooter className='p-6 pt-0'>
            <div className="flex justify-between w-full">
              <DialogClose>
                <Button variant='outline'>{t('cancel')}</Button>
              </DialogClose>
              <Button onClick={installThisApp}>{t('install_app_modal.install_app')}</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  )
}