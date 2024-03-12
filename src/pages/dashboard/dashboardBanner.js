import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "src/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "src/components/ui/button"
import { ChevronDownIcon, DotsHorizontalIcon, MagicWandIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons";
import { Users, Zap, ChevronRight, Shuffle } from "lucide-react";
import { Badge } from "src/components/ui/badge";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { Skeleton } from "src/components/ui/skeleton";
import { useTranslation } from "react-i18next";
import DrawLine from "src/components/drawLine";

export default function DashboardBanner({sitename}){
  const {t,i18n} = useTranslation();
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [numOfAdmin, setNumOfAdmin] = useState(3)
  const [numOfCustomers, setNumOfCustomers] = useState(38)
  const [date, setDate] = useState('April 2023')
  const { user, auth, logout } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
    enabled: !!sites?.site_list.length
  });
  const plan = siteOverview?.plan?.current_plan;
  const pendingpayments = siteOverview?.info.pending_payments;
  const teamnames = auth?.teams

  return (
    <section className="md:mt-6 px-5 lg:px-0">
      <div className="grid grid-cols-1 lg:flex gap-6 md:gap-x-[15px]">
        <div className="flex bg-[#F7F7F8] p-6 rounded-xl gap-x-6 w-full">
          <div className="flex flex-col justify-between h-full gap-y-[6px]">
            {plan?.name === 'pro' ? (
              <h2 className='text-primary text-[13px]'>Pro Plan</h2>
            ) : plan?.name === 'free' ? (
              <h2 className='text-primary text-[13px]'>ฟรีตลอดชีพ</h2>
            ) : (
              <div className="flex flex-col gap-y-2 w-full">
                <Skeleton className='h-5'/>
              </div>
            )}
            <Link to='/coming-soon' target='_blank' className="text-[#474747] text-[13px] font-bold leading-4">
              {t('compare_plan')}
            </Link>
          </div>
          <DrawLine color='#E5E6E8' width='1px' height="100%"/>
          <div className="flex flex-col justify-between h-full gap-y-[6px]">
            {sitename ? (
              <>
                <h2 className="text-[#8F8F8F] text-[11px] leading-5">{sitename}</h2>
                <Link className="text-[#474747] text-[13px] font-bold leading-4">{t('manage_domain')}</Link>
              </>
            ) : (
              <Skeleton className='h-5 mt-2 w-1/2'/>
            )}
          </div>
        </div>

        {/* <Card className='w-full lg:min-w-[400px] lg:w-[400px] flex flex-col justify-between shadow-none'>
          <CardHeader className='pb-2 flex flex-col xl:flex-row xl:items-start justify-between'>

          </CardHeader>
          {pendingpayments ? (
            <CardContent className='text-desc flex items-center justify-start mt-6'>
              {Number.isInteger(pendingpayments) && pendingpayments > 0 ? <Badge>Waiting for confirmation</Badge> : null}       
            </CardContent>
          ): null}
        </Card> */}
      </div>
    </section>
  )
}