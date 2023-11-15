import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import { User, Keyboard, Layout, LogOut } from 'lucide-react'
import { useUser } from '../../hooks/useUser'

export default function AvatarMenu(){
  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const logoutnow = () => {
    logout();
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className='w-7 h-7 text-sm'>
          <AvatarImage src="" />
          <AvatarFallback>{user?.first_name[0]}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-[243px]'>
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <User viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                Account settings
              </CommandItem>
              <CommandItem>
                <Keyboard viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                Keyboard shortcuts
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem onClick={() => window.location.href = `http://${sites?.site_list[0].name}`}>
                <Layout viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                View website
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup onClick={() => logoutnow()}>
              <CommandItem>
                <LogOut viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                Logout
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}