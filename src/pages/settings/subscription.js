import { CheckCircledIcon, ChevronDownIcon, MagicWandIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "src/components/ui/command"
import { AlertCircle, Layers, LayoutGrid, Users, Wallet, Zap } from "lucide-react"
import { Separator } from "../../components/ui/separator";
import { Button, buttonVariants } from "../../components/ui/button"
import { useState, useEffect, useContext } from 'react'
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import { useNavigate } from "react-router-dom";
import DrawLine from "src/components/drawLine";
import { Progress } from "src/components/ui/progress";
import Loading from "src/components/ui/loading";
import { Skeleton } from "src/components/ui/skeleton";

export default function Subscription(){
  const [numOfAdmin, setNumOfAdmin] = useState(3)

  const { user, auth, logout } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.onboarding.site_created === false) {
      navigate('/dashboard/instance-configuration');
    }
  }, [auth?.onboarding.site_created]);

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
    enabled: !!sites?.site_list.length
  });

  const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.loginAsAdmin(name, reason), {
    onSuccess: (res) => {
      const { sid, site } = res.data.message;
      if (sid && site) {
        window.open(`https://${site}/app/home?sid=${sid}`, '_blank');
      }
    }
  });
  const plan = siteOverview?.plan?.current_plan;
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), {enabled: false});  

  const usagePlan = siteOverview?.plan

  const planUsageData = [
    {
      type:'Database',
      total:usagePlan?.total_database_usage || 0,
      max:usagePlan?.max_database_usage || 200,
      measure:'MB'
    },
    {
      type:'Storage',
      total:usagePlan?.total_storage_usage || 0,
      max:usagePlan?.max_storage_usage || 100,
      measure:'MB'
    },
  ]

  return (
    <>
      <h2 className="secondary-heading">Subscription for your team</h2>
      <section className="mt-10">
        <div className="flex items-center justify-between">
          {plan ? (
            <div>
              <h1 className="text-[39px] font-semibold text-[#151515] capitalize">{plan?.name}</h1>
              <p className="secondary-heading">{sites?.site_list[0].name}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-y-2 mt-4">
              <Skeleton className='h-9 w-[100px]'/>
              <Skeleton className='h-4 w-[300px]'/>
            </div>
          )}

          {plan ? (
            <div className="flex">
            {plan?.name === 'pro' ? (
             <Button variant='secondary' className='btn-with-icon leading-5 rounded-r-none' onClick={() => window.location.href = `/dashboard/settings/plan-upgrade`}>
              <Zap viewBox='0 0 24 24' width='16' height='16'/>
              Manage Team
            </Button>
            ) : (
              <Button variant='secondary' className='btn-with-icon leading-5 rounded-r-none' onClick={() => window.location.href = `/payment/plan/pro`}>
                <Zap viewBox='0 0 24 24' width='16' height='16'/>
                Upgrade to Pro
              </Button>
            )}
            <Popover>
              <PopoverTrigger>
                <Button variant='secondary' className='btn-with-icon leading-5 rounded-l-none pl-0'>
                  <DrawLine color='#E4E4E7' height="80%" width='1px'/>
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='p-0 w-[160px]'>
                <Command>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem className='flex gap-x-2' onSelect={() => navigate('/dashboard/teams/team-members')}>
                        <Users viewBox="0 0 24 24" width='16' height='16'/>
                        Manage Team
                      </CommandItem>
                      <CommandItem className='flex gap-x-2' onSelect={() => navigate('/integration/manage-apps')}>
                        <Layers viewBox="0 0 24 24" width='16' height='16'/>
                        Manage App
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          ) : (
            <Skeleton className='h-9 w-[200px]'/>
          )}
        </div>

        <div className="text-desc flex gap-x-4 items-center mt-10">
          {plan ? (
            <>
              <p className="flex items-center gap-x-1 text-sm"><CheckCircledIcon className="h-3 w-3"/> Current plan</p>
              <p className="flex items-center gap-x-1 text-sm"><MagicWandIcon className="h-3 w-3"/>{plan?.name === 'Pro' ? 'Now you pay in 750/m' : 'Up to pro in 750/m'}</p>
            </>
          ) : (
            <Skeleton className='h-3 w-full'/>
          )}
        </div>
      </section>

      <Separator className='my-6'/>

      <section>
        <div className="flex justify-between">
          {plan ? (
            <div>
            <h1 className="text-3xl font-semibold inter">฿ {plan?.price_usd}</h1>
            <div className="flex items-center gap-x-[6px]">
              <p className="text-base leading-7 text-[#71717A]">
                {plan?.name === 'pro' ? 'Your plan will renew on 2 December 2023.' : 'Free forever'}
              </p>
              <AlertCircle className="h-4 w-4"/>
            </div>
          </div>
          ) : (
            <div className="flex flex-col gap-y-2">
              <Skeleton className='h-9 w-[100px]'/>
              <Skeleton className='h-4 w-[300px]'/>
            </div>
          )}
          {plan ? (
            <Button className='btn-with-icon' disabled={plan?.name === 'pro' ? false : true}>
              <Wallet viewBox="0 0 24 24" width='16' height='16'/>
              Pay now
            </Button>
          ) : (
            <Skeleton className='h-9 w-[200px]'/>
          )}
        </div>
      </section>

      <Separator className='my-6'/>

      {plan ? (
        <section>
          <h1 className="secondary-heading">Plan usage</h1>
          <p className="main-desc">Updated on {plan?.modified}</p>

          <div className="text-desc flex gap-x-4 items-center my-6">
            <p className="flex items-center gap-x-1 text-sm"><Users viewBox="0 0 24 24" width='16' height='16' /> {numOfAdmin} {numOfAdmin === 1 ? 'admin user' : 'admin users'}</p>
            <p className="flex items-center gap-x-1 text-sm"><LayoutGrid viewBox="0 0 24 24" width='16' height='16'/> {installedApps?.data?.length || 0} {installedApps?.data?.length === 1 ? 'installed app' : 'installed apps'}</p>
          </div>

          <div className="flex flex-col gap-y-4">
            {planUsageData.map(p => (
              <div className="flex items-center gap-x-4">
                <h2 className="subheading font-medium w-1/4">{p.type}</h2>
                <div className="w-full flex gap-x-[11px] items-center">
                  <Progress value={(p.total / p.max) * 100}/>
                  <span className="text-xs inline-block w-[40px]">({(p.total / p.max) * 100}%)</span>
                </div>
                <p className="main-desc w-1/4 text-right">{p.total} / {p.max} {p.measure}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="flex flex-col gap-y-4">
          <Skeleton className='h-4 w-full'/>
          <Skeleton className='h-4 w-full'/>
          <Skeleton className='h-4 w-full'/>
        </div>
      )}
    </>
  )
}