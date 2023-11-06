import React, {useState} from 'react'
import { Button } from './ui/button'
import { BadgeInfo, BookCopy, ChevronDown, ClipboardList, Info, MessageCircle, User, Keyboard, Layout, LogOut } from 'lucide-react'
import { BellIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import VerticalLine from './verticalLine'
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command"
import Logo from "../img/logo-zaviago.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useUser } from '../hooks/useUser'
import { useMutation, useQuery } from "react-query";
import { site } from "../client/api";
import { useLocation, useNavigate } from 'react-router-dom'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu"

export default function Topbar({isSidebarOpen}){
  const { user, auth, logout } = useUser();
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState('Zaviago WorkSpace')

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  return (
    <div className={`topbar ${isSidebarOpen ? 'active' : 'inactive'}`}>
      <h2 className='subheading font-semibold'>{currentPage}</h2>

      <section className='flex items-center'>
        <Button variant='ghost' className='text-[#006AFF] hover:text-[#006AFF] gap-x-2 text-xs flex items-center'>
          <LightningBoltIcon color='#006AFF'/>
          Upgrade to Pro
        </Button>

        <VerticalLine color='#E4E4E7' size={1} height="32px"/>

        <div className='px-3 flex gap-x-5 items-center'>
          <Dialog>
            <DialogTrigger className='bg-zinc-100 rounded-md px-4 py-2 text-xs h-10 flex justify-between items-center w-[292px] text-zinc-500'>
              <div className='flex gap-x-2 items-center'>
                <img src={Logo} className='w-5 h-5'/>
                Search or type a command
              </div>
              (CTRL +G)
            </DialogTrigger>
            <DialogContent className='p-0'>
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                    <CommandItem>Settings</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </DialogContent>
          </Dialog>
          <BellIcon color='#7D7D7D' width='21' height='21'/>
        </div>

        <VerticalLine color='#E4E4E7' size={1} height="32px"/>

        <div className='pl-3 flex gap-x-5 items-center'>
          <DropdownMenu>
            <DropdownMenuTrigger className='text-xs w-[77px] flex justify-center gap-x-[2px] items-center outline-none'>
              Help
              <ChevronDown viewBox='0 0 24 24' width='16' height='16'/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[243px]'>
              <DropdownMenuItem>
                <BookCopy viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                Documentation
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageCircle viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                User forum
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ClipboardList viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                Report an Issue
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Info viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                About
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BadgeInfo viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                Support
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className='outline-none'>
            <Avatar className='w-9 h-9'>
              <AvatarImage src="" />
              <AvatarFallback>{user?.first_name[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[243px]'>
            <DropdownMenuItem onSelect={() => navigate('/dashboard/settings/account')}>
              <User viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
              Account settings
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => window.location.href = `http://${sites?.site_list[0].name}`}>
              <Layout viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
              View website
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
              Logout
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  )
}