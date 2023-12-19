import { useParams } from "react-router"
import { Button } from "src/components/ui/button"
import { LightningBoltIcon, OpenInNewWindowIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { BadgeCheck, CheckCircle2, ChevronLeft, ChevronRight, Globe, Key, MessageSquare, Smile } from "lucide-react"
import { useState,useEffect } from "react"
import { Icons } from "src/components/ui/icons"
import { Progress } from "src/components/ui/progress"
import ImageDialog from "src/components/imageDialog"
import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom"
import RecommendedApps from "../../components/apps/recommendedApps"
import Loading from "src/components/ui/loading"
import SetupAppModal from "src/components/modals/setupAppModal"
import UpgradeAppModal from "src/components/modals/upgradeAppModal"

export default function SingleApp(){
  const { id } = useParams()
  const [addAppStatus, setAddAppStatus] = useState('')

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
  }, [user, sites,benchApps, installedApps]);

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
          const developerInfo = [
            {type:app.website, icon:<Globe viewBox="0 0 24 24" width='16' height='16'/>, buttonText:'Visit our Website'},
            {type:app.custom_app_demo, icon:<Smile viewBox="0 0 24 24" width='16' height='16'/>, buttonText:'Check App Demo'},
            {type:app.support, icon:<MessageSquare viewBox="0 0 24 24" width='16' height='16'/>, buttonText:'Contact our support'},
            {type:app.privacy_policy, icon:<Key viewBox="0 0 24 24" width='16' height='16'/>, buttonText:'Privacy policy'}
          ]
          const highlightInfo = [
            {title:'Launched',desc:app.custom_launch_date},
            {title:'Categories', desc:app.categories[0]?.category},
            {title:'Integrates with', desc:app.custom_integrates}
          ]
        return (
          <>
            <section className="flex justify-between items-center">
              <div className="flex items-start gap-x-5">
                <div className="app-detail-icon">
                  {item.image ? <img src={site.backend_url()+item.image} width={72}/> : <Icons.erpApp />}
                </div>
                <div>
                  <h1 className="main-heading">{item.title}</h1>
                  <p className="text-sm font-medium text-[#09090B]">By Zaviago</p>
                  <p className="text-sm mt-1">{item.status}</p>
                </div>
              </div>
              {/* {!isInstalled ? (
                <Button className='btn-with-icon' disabled>
                  <OpenInNewWindowIcon />Installed
                </Button>
              ) : app.subscription_type === 'Paid' ? (
                <Button className='btn-with-icon'>
                  <OpenInNewWindowIcon />Purchase
                </Button>
              ) : app.subscription_type === 'Free' ? (
                <SetupAppModal appToInstall={item.name} appImage={<img src={site.backend_url()+item.image} width='52' height='52'/>}/>
              ) : (
                <UpgradeAppModal />
              )} */}
              <UpgradeAppModal />
            </section>

            <section className="flex gap-x-6 mt-[55px]">
              <ImageDialog images={app?.screenshots} site={site.backend_url()}/>
            </section>

            <section className="flex gap-x-9 mt-[64px]">
              <aside className="border rounded-md p-6 w-1/3">
                <div className="mb-3">
                  <h1 className='font-bold text-[#181818] text-base mb-3'>Highlights</h1>
                </div>

                <div className="flex flex-col gap-y-3">
                  <h1 className='font-bold text-[#181818] text-base'>Information</h1>
                  {highlightInfo.map(info => (
                    <div>
                      <h2 className='subheading font-medium'>{info.title}</h2>
                      <p className="main-desc mt-1">{info.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-[72px]">
                  <p className="main-desc">App developed by</p>
                  <h2 className='font-bold text-[#09090B]'>{item.team}</h2>

                  <div className="mt-3">
                    {developerInfo.map(info => (
                      <>{info.type && (
                        <Link to={info.type}>
                          <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                            {info.icon}
                            {info.buttonText}
                          </Button>
                        </Link>
                      )}</>
                    ))}
                  </div>
                </div>
              </aside>
              <article className="w-2/3">
                <div className="text-[#71717A]" dangerouslySetInnerHTML={{__html:app.long_description}}/>
              </article>
            </section>

            <section className="flex flex-col mt-20">
              <div>
                <h1 className="text-xl font-semibold tracking-[-0.5px] text-[#09090B]">Pricing</h1>
                <p className="main-desc">All charges are billed in Baht. Recurring and usage-based charges are billed every 30 days.</p>
              </div>
              <div className="flex gap-x-6 mt-6">
                {plans?.map((plan, index) => (
                  <aside className="border rounded-md p-6">
                    <h2 className='font-medium text-[#71717A] text-sm mb-3'>{plan.plan}</h2>
                    <h1 className='font-bold text-[#181818] text-base mb-3 inter'>{plan.price_usd == 0 ? 'Free' : `฿ ${plan.price_usd} / mo`}</h1>

                    {plan.is_free === 1 ? (
                      <div className="flex flex-col">
                        <div className='flex items-center gap-x-2 text-sm py-[6px]'>
                          <CheckCircle2 className="h-4 w-4"/>
                          Included with all plans
                        </div>
                        <div className='flex items-center gap-x-2 text-sm py-[6px]'>
                          <CheckCircle2 className="h-4 w-4"/>
                          Best for selling at pop-ups, markets and fairs
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <div className='flex items-center gap-x-2 text-sm py-[6px]'>
                          <CheckCircle2 className="h-4 w-4"/>
                          Included with all pro plans
                        </div>
                        <div className='flex items-center gap-x-2 text-sm py-[6px]'>
                          <CheckCircle2 className="h-4 w-4"/>
                          Unlimited SMS
                        </div>
                      </div>
                    )}
                  </aside>
                ))}
              </div>
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
      {appList ? (
        <>
          <CardData data={appList}/>

          <section className="mt-[52px]">
            <h2 className="secondary-heading">Recommended for You</h2>
            <RecommendedApps />
          </section>
        </>
      ) : <Loading />}
    </div>
  )
}