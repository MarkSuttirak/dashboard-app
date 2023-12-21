import AppIcon from "src/components/appIcon";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { Icons } from "src/components/ui/icons"
import Loading from "../ui/loading";
import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

export default function AppStoreIcons(){
  const { user, auth, logout } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: false
  });

  const benchApps = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), {enabled: false});
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), {enabled: false});  

  const appslists = benchApps.data || [];

  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !benchApps.data) {
      benchApps.refetch();
      installedApps.refetch();
    }
  }, [user, sites,benchApps, installedApps]);

  const otherapps = [
    {
      icon:<Icons.crmApp width='52' height='52'/>,
      title:'CRM',
      desc:'Cutting-edge tools for streamlined business relationships',
      id:'crm',
      status:'installed'
    },
    {
      icon:<Icons.lineCRMApp width='52' height='52'/>,
      title:'LINEOA CRM',
      desc:'Unlock your business to the next level with Line OA CRM',
      id:'line-crm',
      status:'pro'
    },
    {
      icon:<Icons.inbioApp width='52' height='52'/>,
      title:'MarketConnect',
      desc:'Efficiently manage orders regardless of the number of sales channels',
      id:'marketconnect',
      status:'pro'
    },
    {
      icon:<Icons.erpApp width='52' height='52'/>,
      title:'OnlineStore',
      desc:'Transforming Your Online Shopping Seamless Style, Ultimate Ease',
      id:'online-store',
      status:'pro'
    },
    {
      icon:<Icons.posApp width='52' height='52'/>,
      title:'POS in.store',
      desc:'Manage your store seamlessly and smoothly!',
      id:'pos-instore',
      status:'pro'
    },
    {
      icon:<Icons.reducoedApp width='52' height='52'/>,
      title:'REDUCED%',
      desc:'Boost sales with exclusive discount, coupons and deals!',
      id:'reduced',
      status:'free'
    },
    {
      icon:<Icons.rewardfulApp width='52' height='52'/>,
      title:'Rewardful',
      desc:'Set your Loyalty Program and campaigns',
      id:'rewardful',
      status:'free'
    },
    {
      icon:<Icons.untitleApp width='52' height='52'/>,
      title:'Untitled',
      desc:'Exclusive tools to help you build sites and scale your business',
      id:'untitled',
      status:'installed'
    },
    {
      icon:<Icons.blogAndPagesApp width='52' height='52'/>,
      title:'Weblogs',
      desc:'Create Blogs and Pages with our unique style',
      id:'weblogs',
      status:'free'
    },
  ]

  return (
    <>
      {appslists?.length > 0 ? (
        <>{appslists?.map(app => 
          // <AppIcon icon={app.icon} title={app.title} desc={app.desc} link={`/integration/appstore/${app.title}`}/>
          <AppIcon icon={app.image ? <img src={site.backend_url()+app.image} className="w-[72px] h-[72px] min-w-[72px] min-h-[72px]"/> : <Icons.erpApp className='w-[72px] h-[72px]'/>} title={app.title} desc={app.description} link={`/integration/appstore/${app.name}`}/>
        ).slice(0, 6)}</>
      ) : <>
        <div className="flex flex-col gap-y-2">
          <Skeleton className='h-[141px] w-[141px]'/>
          <Skeleton className='h-3 w-full'/>
          <Skeleton className='h-3 w-full'/>
        </div>
      </>}
    </>
  )
}