import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { ChevronRight, PlusCircle, Shuffle, UserPlus, Users, Check, ChevronsUpDown, ChevronsLeft } from "lucide-react"
import ZaviagoIcon from "../icon-menus/ZaviagoIcon";
import { useNavigate } from "react-router-dom"
import { Icons } from "../ui/icons"

export default function SidebarShortcut(){
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <Icons.zaviagoApp onClick={() => navigate('/')} className='cursor-pointer w-9 h-9'/>
        <PopoverTrigger>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-fit hover:bg-white p-0 pr-6"
          >
            <span className="flex gap-x-2 items-center">
              <div className="flex flex-col text-left">
                <h2 className="cal-sans text-[18px] leading-[20px]">Cosmos.</h2>
                <p className="text-[13px] font-medium tracking-[-3%] leading-[20px]">intergoods.zaviago.com</p>
              </div>
            </span>
            <ChevronsUpDown className="ml-2 shrink-0 opacity-50" viewBox="0 0 24 24" width='12' height='12' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 z-[105] relative left-[-16px]">
          <Command>
            <CommandInput placeholder="Search app..." />
            <CommandList className='max-h-none'>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandItem onSelect={() => navigate('/dashboard/teams/teams')}>
                  <Users viewBox="0 0 24 24" width='16' height='16' className="mr-2"/>
                  Team
                </CommandItem>
                <CommandItem>
                  <Shuffle viewBox="0 0 24 24" width='16' height='16' className="mr-2"/>
                  Change Team
                  <CommandShortcut>
                    <ChevronRight viewBox="0 0 24 24" width='16' height='16' color='#09090B'/>
                  </CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => navigate('/dashboard/teams/team-members')}>
                  <UserPlus viewBox="0 0 24 24" width='16' height='16' className="mr-2"/>
                  Invite Teammates
                  <CommandShortcut>⌘+T</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Current App">
                <CommandItem>
                  <div className="w-5 h-5 rounded-full bg-[#5BB3FF] mr-2" />
                  Blog / Pages
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="App">
                <CommandItem>
                  <div className="w-5 h-5 rounded-full bg-[#5BB3FF] mr-2" />
                  Loyalty System
                </CommandItem>
                <CommandItem>
                  <div className="w-5 h-5 rounded-full bg-[#79FF97] mr-2" />
                  Data Studio
                </CommandItem>
                <CommandItem>
                  <div className="w-5 h-5 rounded-full bg-[#F4C344] mr-2" />
                  B2B CRM
                </CommandItem>
                <CommandItem>
                  <div className="w-5 h-5 rounded-full bg-[#FF9797] mr-2" />
                  Commerce
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup>
                <CommandItem onSelect={() => navigate('/integration/appstore')}>
                  <PlusCircle viewBox="0 0 24 24" width='16' height='16' className="mr-2"/>
                  See more apps
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}