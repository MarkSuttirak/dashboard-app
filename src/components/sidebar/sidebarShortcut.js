import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { ChevronRight, PlusCircle, Shuffle, UserPlus, Users, Check, ChevronsUpDown, ChevronsLeft } from "lucide-react"
import ZaviagoIcon from "../icon-menus/ZaviagoIcon";
import { useNavigate } from "react-router-dom"
import { Icons } from "../ui/icons"
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import Loading from "../ui/loading"

export default function SidebarShortcut(){
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const { user, auth, logout } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const benchApps = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), {enabled: false});
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), {enabled: false});  
  const appslists = benchApps.data || [];

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <div className="min-w-9 min-h-9">
          <Icons.zaviagoApp onClick={() => navigate('/')} className='cursor-pointer w-9 h-9'/>
        </div>
        <PopoverTrigger className="w-full">
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-fit hover:bg-white p-0 pl-2 pr-4"
          >
            <span className="flex gap-x-2 items-center">
              <div className="flex flex-col text-left">
                <h2 className="cal-sans text-[18px] leading-5 tracking-[0.18px] font-semibold">Zaviago.com</h2>
                <p className="text-[13px] font-medium tracking-[-0.39px] leading-[20px] text-[#5A5A5A]">{sites?.site_list[0].name.length >= 20 ? sites?.site_list[0].name.slice(0,20) + '...' : sites?.site_list[0].name}</p>
              </div>
            </span>
            <ChevronsUpDown className="mr-2 shrink-0 opacity-50" viewBox="0 0 24 24" width='16' height='16' />
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
              <CommandGroup heading="Current Apps">
                {installedApps?.data?.length > 1 ? (
                  <>
                  {installedApps?.data.map(app => (
                    <CommandItem key={app}>
                      <div className="w-5 h-5 rounded-full bg-[#5BB3FF] mr-2" />
                      {app.title}
                    </CommandItem>
                  )).slice(0, 1)}
                  </>
                ) : <h1 className="px-[6px] text-sm">There are no apps here...</h1>}
              </CommandGroup>
              <CommandGroup heading="Apps">
                {installedApps?.data?.length > 1 ? (
                  <>
                  {installedApps?.data.map(app => (
                    <CommandItem key={app}>
                      <div className="w-5 h-5 rounded-full bg-[#5BB3FF] mr-2" />
                      {app.title}
                    </CommandItem>
                  ))}
                  </>
                ) : <h1 className="px-[6px] text-sm">There are no apps here...</h1>}
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