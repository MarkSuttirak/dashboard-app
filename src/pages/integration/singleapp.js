import { useParams } from "react-router"
import { Button } from "src/components/ui/button"
import { LightningBoltIcon, OpenInNewWindowIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { BadgeCheck, ChevronLeft, ChevronRight, Globe, Key, MessageSquare, Smile } from "lucide-react"
import { Separator } from "src/components/ui/separator"
import connectMarketingBg from "src/img/socialapp-bg.png"
import installAppBg from "src/img/install-app-bg.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { useState,useEffect } from "react"
import { Icons } from "src/components/ui/icons"
import { appStatus } from "../../components/apps/appList"
import { Progress } from "src/components/ui/progress"
import ImageDialog from "src/components/imageDialog"
import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom"

export default function SingleApp(){
  const { id } = useParams()
  const [addAppStatus, setAddAppStatus] = useState('')
  const [installingAppPercent, setInstallingAppPercent] = useState(50);
  const [currentImage, setCurrentImage] = useState(0)



  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });
  
  const benchApps = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), {enabled: false});
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), {enabled: false});  
  const appList = benchApps.data || [];
  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !benchApps.data) {
      benchApps.refetch();
      installedApps.refetch();
    }
  }, [user, sites,benchApps,installedApps]);

  const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
    enabled: !!sites?.site_list.length
  });
  const webplan = siteOverview?.plan?.current_plan;






  const installApp = () => {
    setAddAppStatus('installing')
    setTimeout(() => {
      setAddAppStatus('installed')
    }, 2000)
  }


  const CardData = ({data}) => {
    return (
      <>
        {data.filter(item => item.name === id).map((item, index) => {
          const isInstalled = installedApps.data?.some(installedApp => installedApp.title === item.title);
          const app = item.addional_info;
          const plans = item.plans;

        return (
          <>
                <section className="flex justify-between">
                  <div className="flex items-start gap-x-5">
                    <div className="app-detail-icon">
                      {item.image ? <img src={site.backend_url()+item.image} width={50}/> : <Icons.erpApp />}
                    </div>
                    <div>
                      <h1 className="main-heading">{item.title}</h1>
                      <p className="text-sm font-medium text-[#09090B]">By Zaviago</p>
                      <p className="text-sm mt-1">{item.status}</p>
                    </div>
                  </div>
                </section>

                {isInstalled ? (
                  <Button className='btn-with-icon'>
                    <OpenInNewWindowIcon />Upgrade
                  </Button>
                ) : (
                  <Link to="/payment">
                      <Button className='btn-with-icon'>
                          <LightningBoltIcon />Install
                      </Button>
                  </Link>
                )
                }

              <section className="flex gap-x-6 mt-[55px]">
                <ImageDialog currentImage={currentImage} length={app.screenshots.length} image={site.backend_url()+app.screenshots[0]?.image} setCurrentImage={setCurrentImage} mainImage={true} onOpen={() => setCurrentImage(index)}/>
                <div className="flex flex-col gap-y-6">
                    {app?.screenshots.map((image, index) => (
                      <ImageDialog currentImage={currentImage} length={app.screenshots.length} image={site.backend_url()+image?.image} setCurrentImage={setCurrentImage} mainImage={false} onOpen={() => setCurrentImage(index)}/>
                    )).slice(1, 4)}
                </div>
              </section>

              <section className="flex gap-x-9 mt-20">
              {plans?.map((plan, index) => (
                  <aside className="border rounded-md p-6 w-1/3">
                    <div className="mb-3">
                      <h1 className='font-bold text-[#181818] text-base mb-3'>{plan.price_usd}/mo</h1>
                    </div>
                    <div className="mb-3">
                      <h1 className='font-bold text-[#181818] text-base mb-3'>{plan.plan}</h1>
                    </div>

                    <div className="mb-3">
                        <Link to={`/payment/${item.title}/${plan.name}`}>
                          <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                            <Smile viewBox="0 0 24 24" width='16' height='16'/>
                            Check To Subscribe
                          </Button>
                        </Link>
                    </div>
                    
                  </aside>
              ))}       
              </section>


              <section className="flex gap-x-9 mt-20">
                <aside className="border rounded-md p-6 w-1/3">
                  <div className="mb-3">
                    <h1 className='font-bold text-[#181818] text-base mb-3'>Highlights</h1>
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <h1 className='font-bold text-[#181818] text-base'>Information</h1>
                    <div>
                      <h2 className='subheading font-medium'>Launched</h2>
                      <p className="main-desc mt-1">{app.custom_launch_date}</p>
                    </div>
                    <div>
                      <h2 className='subheading font-medium'>Categories</h2>
                      <p className="main-desc mt-1">{app.categories[0]?.category}</p>
                    </div>
                    <div>
                      <h2 className='subheading font-medium'>Integrates with</h2>
                      <p className="main-desc mt-1">{app.custom_integrates}</p>
                    </div>
                  </div>

                  <div className="mt-[72px]">
                    <p className="main-desc">App developed by</p>
                    <h2 className='font-bold text-[#09090B]'>{item.team}</h2>

                    <div className="mt-3">



                    {app.website &&
                      <Link to={app.website}>
                        <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                          <Globe viewBox="0 0 24 24" width='16' height='16'/>
                          Visit our Website
                        </Button>
                      </Link>
                    }

                    {app.custom_app_demo &&
                      <Link to={app.custom_app_demo}>
                        <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                          <Smile viewBox="0 0 24 24" width='16' height='16'/>
                          Check App Demo
                        </Button>
                      </Link>
                    }

                    {app.support &&
                      <Link to={app.support}>
                        <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                          <MessageSquare viewBox="0 0 24 24" width='16' height='16'/>
                          Contact our support
                        </Button>
                      </Link>
                    }

                    {app.privacy_policy &&
                      <Link to={app.privacy_policy}>
                        <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                        <Key viewBox="0 0 24 24" width='16' height='16'/>
                        Privacy policy
                      </Button>
                      </Link>
                    }
                    </div>
                  </div>
                </aside>
                <article className="w-2/3">
                  {app.long_description}
                </article>
              </section>












          </>
        );


          console.log(item.app_img);
        })}
      </>
    )
  }

  return (
    <div className="dashboard-container">
      <CardData data={appList}/>

      <Separator className='my-10'/>

      <section style={{background:`url(${connectMarketingBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="rounded-xl p-6 flex gap-x-8">
        <div className="flex flex-col justify-between">
          <article className="mt-4">
            <h1 className="secondary-heading mb-4">Connect Marketing place</h1>
            <p className="text-[13px] font-medium text-[#71717A] mt-4 mb-6">Say hello to the world and let readers know what your blog is all about.</p>
          </article>

          <Button className='btn-with-icon w-fit bg-white' variant='outline'>
            <PlusCircledIcon />
            See more Apps
          </Button>
        </div>

        <div className="flex gap-x-6">
          {appList.map((app, index) => (
            <Card key={index} className='shadow-none flex flex-col justify-between'>
              <CardHeader className='flex flex-col gap-x-6'>
                <div className="w-[52px]">
                  {app.icon}
                </div>
                <div className="mt-[12px!important]">
                  <CardTitle>{app.title}</CardTitle>
                  <CardDescription className='mt-[6px]'>{app.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          )).slice(0, 3)}
        </div>
      </section>
    </div>
  )
}