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
import { useTranslation } from "react-i18next";

export default function Subscription(){
  const { t } = useTranslation()
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

  // const planUsageData = [
  //   {
  //     type:'Database',
  //     total:usagePlan?.total_database_usage || 0,
  //     max:usagePlan?.max_database_usage || 200,
  //     measure:'MB'
  //   },
  //   {
  //     type:'Storage',
  //     total:usagePlan?.total_storage_usage || 0,
  //     max:usagePlan?.max_storage_usage || 100,
  //     measure:'MB'
  //   },
  // ]

  const planUsageData = [
    {
      type:t('usages.orders'),
      total:25,
      max:50,
      measure:t('usages.orders')
    },
    {
      type:t('usages.customers'),
      total:174,
      max:1000,
      measure:t('usages.customers')
    },
    {
      type:t('usages.posts'),
      total:174,
      max:1000,
      measure:t('usages.posts')
    },
    {
      type:t('usages.products'),
      total:15,
      max:5000,
      measure:t('usages.products')
    },
  ]

  return (
    <>
      <h2 className="secondary-heading">{t('settings.overview.desc')}</h2>
      <section className="mt-10">
        <div className="flex items-center justify-between">
          {plan ? (
            <div>
              <h1 className="text-[39px] font-semibold text-[#151515] capitalize">{plan?.name === 'pro' ? 'Pro' : 'Free'}</h1>
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
              {t('settings.overview.manage_team')}
            </Button>
            ) : (
              <Button variant='secondary' className='btn-with-icon leading-5 rounded-r-none' onClick={() => window.location.href = `/payment/plan/pro`}>
                <Zap viewBox='0 0 24 24' width='16' height='16'/>
                {t('upgrade_to_pro')}
              </Button>
            )}
            <Popover>
              <PopoverTrigger>
                <Button variant='secondary' className='btn-with-icon leading-5 rounded-l-none pl-0'>
                  <DrawLine color='#E4E4E7' height="80%" width='1px'/>
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='p-0 w-fit'>
                <Command>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem className='flex gap-x-2' onSelect={() => navigate('/dashboard/teams/team-members')}>
                        <Users viewBox="0 0 24 24" width='16' height='16'/>
                        {t('settings.overview.manage_team')}
                      </CommandItem>
                      <CommandItem className='flex gap-x-2' onSelect={() => navigate('/integration/manage-apps')}>
                        <Layers viewBox="0 0 24 24" width='16' height='16'/>
                        {t('settings.overview.manage_app')}
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
              <p className="flex items-center gap-x-1 text-sm"><CheckCircledIcon className="h-3 w-3"/> {t('settings.overview.current_plan')}</p>
              <p className="flex items-center gap-x-1 text-sm"><MagicWandIcon className="h-3 w-3"/>{plan?.name === 'pro' ? t('settings.overview.now_in_pro') : t('settings.overview.up_to_pro')}</p>
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
            <h1 className="text-3xl font-semibold font-inter">฿ {plan?.price_usd}</h1>
            <div className="flex items-center gap-x-[6px]">
              <p className="text-base leading-7 text-secondary">
                {plan?.name === 'pro' ? t('settings.overview.renewal') + '2 December 2023' : t('settings.overview.free_forever')}
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
              {t('settings.overview.pay_now')}
            </Button>
          ) : (
            <Skeleton className='h-9 w-[200px]'/>
          )}
        </div>
      </section>

      <Separator className='my-6'/>

      {plan ? (
        <section>
          <h1 className="secondary-heading">{t('plan_usage.title')}</h1>
          <p className="main-desc">{t('plan_usage.updated_on')} {plan?.modified}</p>

          <div className="text-desc flex gap-x-4 items-center my-6">
            <p className="flex items-center gap-x-1 text-sm">
              <Users viewBox="0 0 24 24" width='16' height='16' /> 
              {localStorage.lang === "th" ? (
                <>{t('plan_usage.admin_user_prefix')} {numOfAdmin} {t('plan_usage.admin_user_suffix')}</>
              ) : (
                <>{numOfAdmin} {numOfAdmin === 1 ? t('plan_usage.admin_user') : t('plan_usage.admin_users')}</>
              )}
            </p>
            <p className="flex items-center gap-x-1 text-sm">
              <LayoutGrid viewBox="0 0 24 24" width='16' height='16'/> 
              {localStorage.lang === "th" ? (
                <>{t('plan_usage.installed_app_prefix')} {numOfAdmin} {t('plan_usage.installed_app_suffix')}</>
              ) : (
                <>{installedApps?.data?.length || 0} {installedApps?.data?.length === 1 ? t('plan_usage.installed_app') : t('plan_usage.installed_apps')}</>
              )}
              
            </p>
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