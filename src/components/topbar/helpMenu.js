import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { BadgeInfo, BookCopy, ChevronDown, ClipboardList, Info, MessageCircle, Zap, User, Keyboard, Layout, LogOut, Search, BadgeHelp } from 'lucide-react'
import { useState } from 'react'
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import { useUser } from '../../hooks/useUser'
import { useNavigate } from "react-router-dom";

export default function HelpMenu(){
  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: false
  });

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className='text-[13px] w-[45px] flex justify-between items-center'>
        Help
        <ChevronDown viewBox='0 0 24 24' width='14' height='14' strokeWidth='1'/>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-[243px]'>
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={() => window.location.href = "https://zaviago-platform-doc.vercel.app/"}>
                <BookCopy viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
                Documentation
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem>
                <ClipboardList viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
                Report an Issue
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem onSelect={() => window.location.href = `http://${sites?.site_list[0].name}`}>
                <Layout viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
                View Website
              </CommandItem>
              <CommandItem onSelect={() => window.location.href = 'https://page.line.me/zaviago'}>
                <BadgeHelp viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
                Support
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}