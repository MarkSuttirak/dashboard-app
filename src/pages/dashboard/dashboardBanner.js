import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "src/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "src/components/ui/button"
import { ChevronDownIcon, DotsHorizontalIcon, MagicWandIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons";
import { Users, Zap, ChevronRight, Shuffle } from "lucide-react";
import { MemberContext } from "src/components/provider/memberProvider";

export default function DashboardBanner({sitename}){
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [numOfAdmin, setNumOfAdmin] = useState(3)
  const [numOfCustomers, setNumOfCustomers] = useState(38)
  const [date, setDate] = useState('April 2023')
  const memberStatus = useContext(MemberContext)

  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 lg:flex gap-6 md:gap-x-[15px]">
        <Card className='w-full lg:w-[60%] shadow-none'>
          <CardHeader className='pb-2 flex flex-col lg:flex-row lg:items-center justify-between'>
            <div>
              <CardTitle className='subheading font-medium'>Your WorkSpace</CardTitle>
              <CardDescription className="domain-heading">{sitename}</CardDescription>
            </div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="p-[10px] m-[0!important]"
                >
                  <DotsHorizontalIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 z-[105] relative left-[24px]">
                <Command>
                  <CommandList className='max-h-none'>
                    <CommandGroup>
                      <CommandItem onSelect={() => navigate('/dashboard/teams/teams')}>
                        <Users viewBox="0 0 24 24" width='16' height='16' className="mr-2"/>
                        Rename Site
                      </CommandItem>
                      <CommandItem>
                        <Shuffle viewBox="0 0 24 24" width='16' height='16' className="mr-2"/>
                        Change Domain
                        <CommandShortcut>
                          <ChevronRight viewBox="0 0 24 24" width='16' height='16' color='#09090B'/>
                        </CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Current App">
                      <CommandItem>
                        <div className="w-5 h-5 rounded-full bg-[#5BB3FF] mr-2" />
                        Blog / Pages
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent>
            <Button variant='link' className="text-desc p-0">Connect Domain</Button>
            <div className="text-desc flex gap-x-4 items-center mt-5 flex-row">
              <p className="flex items-center gap-x-1 text-sm"><Users viewBox='0 0 24 24' width='12' height='12' /> {numOfAdmin} {numOfAdmin == 1 ? 'admin' : 'admins'} in team</p>
              <p className="flex items-center gap-x-1 text-sm"><StarIcon width='12' height='12'/> {numOfCustomers >= 1000000 ? `${(numOfCustomers / 1000000).toFixed(1)}m` : numOfCustomers >= 1000 ? `${(numOfCustomers / 1000).toFixed(1)}k` : numOfCustomers} {numOfCustomers == 1 ? "customer" : "customers"}</p>
              <p className="flex text-sm">Updated {date}</p>
            </div>
          </CardContent>
        </Card>

        <Card className='w-full lg:w-[40%] flex flex-col justify-between shadow-none'>
          <CardHeader className='pb-2 flex flex-col xl:flex-row xl:items-start justify-between'>
            {memberStatus.status === 'pro' ? (
              <>
                <div>
                  <CardTitle className='domain-heading'>Pro plan</CardTitle>
                  <CardDescription>You are on Pro plan</CardDescription>
                </div>
                <Link to='/dashboard/compare-plan'>
                  <Button variant='secondary' className='btn-with-icon leading-5'>
                    <Zap viewBox="0 0 24 24" width='16' height='16'/>
                    View overview
                  </Button>
                </Link>
              </>
            ) : memberStatus.status === 'pending' ? (
              <>
                <div>
                  <CardTitle className='domain-heading'>ฟรี</CardTitle>
                  <CardDescription>Waiting for confirmation</CardDescription>
                </div>
                <Link to='/dashboard/settings/billing-plans'>
                  <Button variant='secondary' className='btn-with-icon leading-5'>
                    <Zap viewBox="0 0 24 24" width='16' height='16'/>
                    Manage Plan
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <div>
                  <CardTitle className='domain-heading'>ทดลองใช้ฟรี 14 วัน</CardTitle>
                  <CardDescription>You are on free trial plan</CardDescription>
                </div>
                <Link to='/dashboard/settings/billing-plans'>
                  <Button variant='blue' className='btn-with-icon leading-5'>
                    <Zap viewBox="0 0 24 24" width='16' height='16'/>
                    Manage Plan
                  </Button>
                </Link>
              </>
            )}
          </CardHeader>
          <CardContent className='text-desc flex items-center gap-x-1'>
            <MagicWandIcon />
            <span className="text-sm">{memberStatus.status === 'pro' ? 'Start to select Apps' : 'Starting at 750/m'}</span>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}