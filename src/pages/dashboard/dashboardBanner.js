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

export default function DashboardBanner({sitename}){
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
    <section className="mt-6">
      <div className="grid grid-cols-1 lg:flex gap-6 md:gap-x-[15px]">
        <Card className='w-full lg:w-full shadow-none'>
          <CardHeader className='pb-2 flex flex-col justify-between'>
            <div>
              <CardTitle className='subheading font-medium'>Your WorkSpace</CardTitle>
              {sitename ? (
                <CardDescription className="domain-heading">{sitename}</CardDescription>
              ) : (
                <Skeleton className='h-5 mt-2 w-1/2'/>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <Button variant='link' className="text-xs text-[#71717A] leading-4 p-0 h-4 font-normal">Connect Domain</Button>
          </CardContent>
        </Card>

        <Card className='w-full lg:min-w-[400px] lg:w-[400px] flex flex-col justify-between shadow-none'>
          <CardHeader className='pb-2 flex flex-col xl:flex-row xl:items-start justify-between'>
            {plan?.name === 'pro' ? (
              <>
                <div className="mr-4">
                  <CardTitle className='domain-heading'>Pro Plan</CardTitle>
                  <CardDescription>You are on Agency PremiumCare+package</CardDescription>
                </div>
                <Link to='/dashboard/compare-plan' className="m-[0!important]">
                  
                </Link>
              </>
            ) : plan?.name === 'free' ? (
              <>
                <div className="mr-4">
                  <CardTitle className='domain-heading'>ฟรี ตลอดชีพ</CardTitle>
                  <CardDescription>You are in free but can be used for all basic uses.</CardDescription>
                </div>
                <Link to='/dashboard/settings/billing-plans' className="xl:m-[0!important] w-fit">
                  <Button className='btn-with-icon leading-5'>
                    <Zap viewBox="0 0 24 24" width='16' height='16'/>
                    Upgrade
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex flex-col gap-y-2 w-full">
                <Skeleton className='h-5'/>
                <Skeleton className='h-5'/>
                <Skeleton className='h-5'/>
              </div>
            )}
          </CardHeader>
          {pendingpayments ? (
            <CardContent className='text-desc flex items-center justify-start mt-6'>
              {Number.isInteger(pendingpayments) && pendingpayments > 0 ? <Badge>Waiting for confirmation</Badge> : null}       
            </CardContent>
          ): null}
        </Card>
      </div>
    </section>
  )
}