import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import { User, Keyboard, Layout, LogOut } from 'lucide-react'
import { useUser } from '../../hooks/useUser'
import LogoutModal from "./logoutModal";
import { useNavigate } from "react-router-dom";

export default function AvatarMenu(){
  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: false
  });

  const navigate = useNavigate()

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className='w-8 h-8 text-sm'>
          <AvatarImage src="" />
          <AvatarFallback>{user?.first_name[0]}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-[243px]'>
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={() => navigate('/dashboard/settings/account')}>
                <User viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                Account settings
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem className='p-0'>
                <LogoutModal>
                  <LogOut viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                  Logout
                </LogoutModal>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}