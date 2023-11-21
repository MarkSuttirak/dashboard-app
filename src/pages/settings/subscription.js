import { CheckCircledIcon, ChevronDownIcon, MagicWandIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "src/components/ui/command"
import { Layers, LayoutGrid, Users, Zap } from "lucide-react"
import { Separator } from "../../components/ui/separator";
import { Button, buttonVariants } from "../../components/ui/button"
import { useState, useEffect } from 'react'
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import { useNavigate } from "react-router-dom";
import DrawLine from "src/components/drawLine";
import { Progress } from "src/components/ui/progress";

export default function Subscription(){
  const planUsageData = [
    {
      type:'Blog page',
      progress:50,
      totalText:'5 / 10 pages'
    },
    {
      type:'Database',
      progress:50,
      totalText:'174 / 500 MB'
    },
    {
      type:'Post',
      progress:50,
      totalText:'5 / 10 posts'
    },
    {
      type:'Storage',
      progress:50,
      totalText:'2 MB / 1 GB'
    }
  ]

  const [numOfAdmin, setNumOfAdmin] = useState(3)
  const [numOfCustomers, setNumOfCustomers] = useState(2544)
  const [numOfApps, setNumOfApps] = useState(4)

  const [isPro, setIsPro] = useState(false)

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

  return (
    <>
      <h2 className="secondary-heading">Subscription for your team</h2>
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[39px] font-semibold text-[#151515]">{isPro ? 'Pro plan' : 'Free trial'}</h1>
            <p className="secondary-heading">{sites?.site_list[0].name}</p>
          </div>

          <div className="flex">
            {isPro ? (
             <Button variant='secondary' className='btn-with-icon leading-5 rounded-r-none' onClick={() => window.location.href = `/dashboard/settings/plan-upgrade`}>
              <Zap viewBox='0 0 24 24' width='16' height='16'/>
              Manage Team
            </Button>
            ) : (
              <Button variant='secondary' className='btn-with-icon leading-5 rounded-r-none' onClick={() => window.location.href = `/dashboard/settings/plan-upgrade`}>
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
        </div>

        <div className="text-desc flex gap-x-4 items-center mt-10">
          <p className="flex items-center gap-x-1 text-sm"><CheckCircledIcon /> Current plan</p>
          <p className="flex items-center gap-x-1 text-sm"><MagicWandIcon /> Up to pro in 750/m</p>
        </div>
      </section>

      <Separator className='my-6'/>

      <section>
        <h1 className="secondary-heading">Billing detail</h1>
        <p className="main-desc">Billing cycle (Annual 14 July 2023)</p>

        <div className="text-desc flex items-center justify-between mt-10">
          <p className="secondary-desc">Plan : {isPro ? 'Pro' : 'Free trial'}</p>
          <p className="settings-heading font-normal">{isPro ? '฿ 750' : 'Free'}</p>
        </div>
      </section>

      <Separator className='my-6'/>

      <section>
        <h1 className="secondary-heading">Plan usage</h1>
        <p className="main-desc">Updated on 20-10-23</p>

        <div className="text-desc flex gap-x-4 items-center my-6">
          <p className="flex items-center gap-x-1 text-sm"><Users viewBox="0 0 24 24" width='16' height='16' /> {numOfAdmin} {numOfAdmin === 1 ? 'admin user' : 'admin users'}</p>
          <p className="flex items-center gap-x-1 text-sm"><LayoutGrid viewBox="0 0 24 24" width='16' height='16'/> {numOfApps} {numOfApps === 1 ? 'installed app' : 'installed apps'}</p>
        </div>

        <div className="flex flex-col gap-y-4">
          {planUsageData.map(p => (
            <div className="flex items-center gap-x-4">
              <h2 className="subheading font-medium w-1/4">{p.type}</h2>
              <Progress value={p.progress}/>
              <p className="main-desc w-1/4 text-right">{p.totalText}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}