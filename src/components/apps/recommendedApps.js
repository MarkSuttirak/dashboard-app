import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { Icons } from "src/components/ui/icons"
import { Link } from "react-router-dom"
import { Button } from "src/components/ui/button"
import { CheckCircle2, Crown } from "lucide-react"
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { useEffect } from 'react'

export default function RecommendedApps(){
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
    // <section className="grid grid-cols-3 gap-6">
    //   {otherapps.map((app, index) => (
    //     <Card key={app.id} className='app-card border-0'>
    //       <CardHeader className='flex flex-row gap-x-6'>
    //         <div className="w-fit">
    //           {app.icon}
    //         </div>
    //         <div className="m-[0!important]">
    //           <CardTitle>{app.title}</CardTitle>
    //           <CardDescription className='mt-[6px]'>{app.desc}</CardDescription>
    //         </div>
    //       </CardHeader>
    //       <CardFooter className='flex items-center justify-between'>
    //         <div className="text-sm">
    //           {app.status === 'installed' ? <span className="text-[#2CB216] inline-flex items-center gap-x-2"><CheckCircle2 className="h-4 w-4 text-[#2CB216]"/>Installed</span> : app.status === 'pro' ? <span className="text-[#71717A] inline-flex items-center gap-x-2"><Crown className="h-4 w-4 text-[#71717A]"/>Pro plan</span> : <span className="text-[#71717A]">Free plan available</span>}
    //         </div>
    //         <Link to={`/integration/appstore/${app.id}`} className="see-more">
    //           <Button variant='outline'>See more</Button>
    //         </Link>
    //       </CardFooter>
    //     </Card>
    //   ))}
    // </section>
    // Dynamic data

    <section className="grid grid-cols-3 gap-6">
      {appslists?.map((app, index) => {
        const isInstalled = installedApps.data?.some(installedApp => installedApp.title === app.title);
        const requiredPro = false
        return (
          <Card key={index} className='app-card border-0'>
            <CardHeader className='flex flex-row gap-x-6'>
              <div>
                {app.image ? <img src={site.backend_url()+app.image} className="w-[52px] h-[52px] min-w-[52px] min-h-[52px]"/> : <Icons.erpApp />}
              </div>
              <div className="m-[0!important]">
                <CardTitle>{app.title}</CardTitle>
                <CardDescription className='mt-[6px]'>{app.description}</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className='flex items-center justify-between'>
              <div className="text-sm">
                {isInstalled ? <span className="text-[#2CB216] inline-flex items-center gap-x-2"><CheckCircle2 className="h-4 w-4 text-[#2CB216]"/>Installed</span> : requiredPro ? <span className="text-[#71717A] inline-flex items-center gap-x-2"><Crown className="h-4 w-4 text-[#71717A]"/>Pro plan</span> : <span className="text-[#71717A]">Free plan available</span>} {/* Render "Installed" if the app is found in installedApps.data */}
              </div>
              <Link to={`/integration/appstore/${app.name}`} className="see-more">
                {/* Conditionally render Button based on `isInstalled` */}
                {isInstalled ? (
                  <Button variant='outline' disabled>Installed</Button>
                ): (
                  <Button variant='outline'>See more</Button>
                )}
              </Link>
            </CardFooter>
          </Card>
        )
      })}
    </section>
  )
}