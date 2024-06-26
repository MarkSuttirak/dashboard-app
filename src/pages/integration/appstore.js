import { ButtonAppStoreImage01, ButtonAppStoreImage02, ButtonAppStoreImage03, ButtonAppStoreImage04, ButtonAppStoreImage05, ButtonAppStoreImage06 } from "src/components/buttonImage"
import { useState, useEffect } from "react";
import appstoreBg from 'src/img/appstore-detail-bg.png'
import frappePreview from 'src/img/frappe-preview.png'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { Separator } from "src/components/ui/separator"
import { Button } from "src/components/ui/button"
import { Link } from "react-router-dom"
import { Icons } from "src/components/ui/icons"
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import AppIcon from "src/components/appIcon";
import { CheckCircle2, Crown, Sparkles } from "lucide-react";
import cybersale from 'src/img/cybersale.png'
import zaviagoDashApp from 'src/img/zaviago-dash-app.png'
import { appsList } from "src/components/sidebar/servicePrivileges";
import PostInfo from "src/components/postInfo";
import guideBlog from "src/img/guideblog.png"
import discoverSolutions from "src/img/discover_solutions.png"
import RecommendedApps from "../../components/apps/recommendedApps";
import AppStoreIcons from "src/components/apps/appStoreIcons";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

export default function AppStore(){
  const { t } = useTranslation()
  const [isMenuCardHover, setIsMenuCardHover] = useState(false)
  const [menuCardIndex, setMenuCardIndex] = useState(0)

  const handleCardHover = (index) => {
    setIsMenuCardHover(true)
    setMenuCardIndex(index)
  }

  const handleCardHoverLeave = () => {
    setIsMenuCardHover(false)
  }

  const { user, auth, logout } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const benchApps = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), {enabled: false});
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), {enabled: false});  

  const appslists = benchApps.data || [];

  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !benchApps.data) {
      benchApps.refetch();
      installedApps.refetch();
    }
  }, [user, sites,benchApps,installedApps]);

  const appstoreMenus = [
    {
      title:'Social Media',
      image:<ButtonAppStoreImage01 shadow={false}/>,
      background:"#E4F4FE",
      color:"#5099FF",
    },
    {
      title:'Manage',
      image:<ButtonAppStoreImage02 shadow={false}/>,
      background:"#DDFDF3",
      color:"#0DA7BA"
    },
    {
      title:'Marketing',
      image:<ButtonAppStoreImage03 shadow={false}/>,
      background:"#F6F3FF",
      color:"#EB67FF"
    },
    {
      title:'Sell Online',
      image:<ButtonAppStoreImage04 shadow={false}/>,
      background:"#E5F5FF",
      color:"#419CFF"
    },
    {
      title:'Media & Content',
      image:<ButtonAppStoreImage05 shadow={false}/>,
      background:"#FFF9E9",
      color:"#FABF20"
    },
    {
      title:'Communication',
      image:<ButtonAppStoreImage06 shadow={false}/>,
      background:"#DEFFEA",
      color:"#19D85C"
    },
  ]

  return (
    <div className="page-container">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="main-heading tracking-[-0.6px]">App Store</h1>
          <p className="secondary-desc">{t('app_store_desc')}</p>
        </div>
        <div className="flex items-center gap-x-2 bg-[#FEC1D2] px-4 py-2 rounded-full text-sm font-semibold text-darkergray">
          <Sparkles className="h-4 w-4" fill='#18181B'/>
          {t('free_trial_all_apps')}
        </div>
      </div>

      <div className="flex h-full gap-x-4 mt-6">
        <img src={cybersale} />
        <div style={{background:`url(${zaviagoDashApp})`,backgroundSize:"cover"}} className="h-auto p-10 w-full max-w-[340px] flex flex-col justify-evenly items-center text-center rounded-xl">
          <h1 className="text-5xl font-bold text-[#08003F] cooper-black tracking-[-0.96px] leading-[56px]">Zaviago Dashboard</h1>
          <h3 className="font-medium">Upgrade package to Pro to enjoy unrestricted access to <br/><br/>everything for you and your friends</h3>
          <Link to='/dashboard/compare-plan'>
            <Button className='btn-with-icon'>
              <LightningBoltIcon />
              Compare plans & features
            </Button>
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-between mt-6">
        {appstoreMenus.map((n, index) => (
          <div className="menu-card-app-store" key={index} style={{backgroundColor:n.background,color:n.color,boxShadow:isMenuCardHover && menuCardIndex === index ? `0 0 3px ${n.color}` : null}} onMouseEnter={() => handleCardHover(index)} onMouseLeave={handleCardHoverLeave}>
            {n.image}
            <span className="absolute bottom-4">{n.title}</span>
          </div>
        ))}
      </div> */}

      {/* <section style={{background:`url(${appstoreBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="mt-6 p-6 rounded-xl flex justify-between">
        <section className="flex flex-col justify-between w-1/3">
          <div className='mt-4'>
            <h1 className="main-heading">Create project deploy your <br/>new project in one-click</h1>
            <p className="main-desc font-medium mt-4">Say hello to the world and let readers know <br/>what your blog is all about</p>
          </div>
          <Button variant='outline' className='btn-with-icon bg-white w-fit'>
            <PlusCircledIcon />
            See more
          </Button>
        </section>
        <aside className="flex gap-x-6 w-2/3">
          <div className="bg-white rounded-lg w-full">
            <img src={frappePreview} className="inline-block pt-[34px] pl-[34px]"/>

            <article className="p-6">
              <Icons.erpApp />
              <h2 className="text-sm font-semibold tracking-[-0.35px] my-[11px]">Create project</h2>
              <p className="text-secondary text-sm">Deploy your new project in one-click.</p>
            </article>
          </div>
        </aside>
      </section> */}

      {/* <Separator className="my-10"/> */}
      <section className="mt-[52px]">
        <h2 className="secondary-heading">{t('recommended_apps')}</h2>
        <div className="flex gap-x-6 mt-6">
          <section className="grid grid-cols-6 gap-6">
            <AppStoreIcons />
          </section>
        </div>
      </section>

      <section className="mt-[128px]">
        <h2 className="secondary-heading">{t('top_rated_apps')}</h2>
        <div className="flex gap-x-6 mt-6">
          <RecommendedApps />
        </div>
      </section>

      <section className="mt-[100px]">
        <h2 className="secondary-heading">{t('featured_highlights')}</h2>
        <div className="grid grid-cols-2 mt-6 gap-[15px]">
          <PostInfo title={t('highlight_one_title')} desc={t('highlight_one_desc')} buttonText={t('more_details')} image={guideBlog} />
          <PostInfo title={t('highlight_two_title')} desc={t('highlight_two_desc')} buttonText={t('more_details')} image={discoverSolutions} />
        </div>
      </section>
    </div>
  )
}