import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { ChevronRight, PlusCircle, Shuffle, UserPlus, Users, Check, ChevronsUpDown } from "lucide-react"
import ZaviagoIcon from "../icon-menus/ZaviagoIcon";
import { useNavigate } from "react-router-dom"

export default function SidebarShortcut(){
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-10"
          >
            <span className="flex gap-x-2 items-center leading-[1px]">
              <ZaviagoIcon />
              Zaviago
            </span>
            <ChevronsUpDown className="ml-2 shrink-0 opacity-50" viewBox="0 0 24 24" width='12' height='12' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 z-[105] relative left-[24px]">
          <Command>
            <CommandInput placeholder="Search app..." />
            <CommandList className='max-h-none'>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandItem>
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
                <CommandItem>
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