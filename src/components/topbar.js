import React, {useState} from 'react'
import { Button } from './ui/button'
import { BadgeInfo, BookCopy, ChevronDown, ClipboardList, Info, MessageCircle, Zap, User, Keyboard, Layout, LogOut, Search, BadgeHelp } from 'lucide-react'
import { BellIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import VerticalLine from './verticalLine'
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useUser } from '../hooks/useUser'
import { useMutation, useQuery } from "react-query";
import { site } from "../client/api";
import { useLocation } from 'react-router-dom'

export default function Topbar({isSidebarOpen}){
  const { user, auth, logout } = useUser();
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState('Zaviago WorkSpace')

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  return (
    <div className={`topbar ${isSidebarOpen ? 'active' : 'inactive'}`}>
      <h2 className='subheading font-medium'>{currentPage}</h2>

      <section className='flex items-center'>
        <Button variant='ghost' className='text-[#006AFF] hover:text-[#006AFF] hover:bg-transparent gap-x-2 text-xs flex items-center font-normal'>
          <LightningBoltIcon color='#006AFF'/>
          Upgrade to Pro
        </Button>
{/* <VerticalLine color='#E4E4E7' size={1} height="32px"/> */}
        <div className='pr-6 flex gap-x-5 items-center'>
          <Dialog>
            <DialogTrigger className='bg-zinc-100 rounded-md px-2 py-[6px] text-[13px] h-7 flex items-center w-[300px] text-zinc-500 tracking-[0.02em] gap-x-[9px] leading-5'>
              <Search viewBox='0 0 24 24' width='14' height='14' className='ml-1'/>
              Search or type a command (Ctrl + G)
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

        <VerticalLine color='#E4E4E7' size={1} height="24px"/>

        <div className='px-3 flex gap-x-5 items-center'>
          <Popover>
            <PopoverTrigger className='text-[13px] w-[45px] flex justify-between items-center'>
              Help
              <ChevronDown viewBox='0 0 24 24' width='14' height='14' strokeWidth='1'/>
            </PopoverTrigger>
            <PopoverContent className='p-0 w-[243px]'>
              <Command>
                <CommandList>
                  <CommandGroup>
                    <CommandItem>
                      <BookCopy viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                      Documentation
                    </CommandItem>
                    <CommandItem>
                      <MessageCircle viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                      User forum
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem>
                      <ClipboardList viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                      Report an Issue
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem>
                      <Info viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                      About
                    </CommandItem>
                    <CommandItem>
                      <BadgeHelp viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                      Support
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

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
                <CommandGroup>
                  <CommandItem>
                    <LogOut viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                    Logout
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </section>
    </div>
  )
}