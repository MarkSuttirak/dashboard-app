import React, {useState} from 'react'
import { Button } from './ui/button'
import { Bell, ChevronDown, Zap } from 'lucide-react'
import VerticalLine from './verticalLine'
import { Input } from './ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command"
import Logo from "../img/logo-zaviago.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useUser } from '../hooks/useUser'

export default function Topbar({isSidebarOpen}){
  const { user, auth, logout } = useUser();
  const [currentPage, setCurrentPage] = useState('Zaviago WorkSpace')
  return (
    <div className={`topbar ${isSidebarOpen ? 'active' : 'inactive'}`}>
      <h2 className='subheading font-medium'>{currentPage}</h2>

      <section className='flex items-center'>
        <Button variant='ghost' className='text-[#006AFF] hover:text-[#006AFF] gap-x-2 text-xs flex items-center'>
          <Zap color='#006AFF' viewBox='0 0 24 24' width='16' height='16'/>
          Upgrade to pro
        </Button>

        <VerticalLine color='#E4E4E7' size={1} height="32px"/>

        <div className='px-3 flex gap-x-5 items-center'>
          <Dialog>
            <DialogTrigger className='bg-zinc-100 rounded-md px-4 py-2 text-xs h-9 flex justify-between items-center w-[292px] text-zinc-500'>
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
          <Bell color='#7D7D7D'/>
        </div>

        <VerticalLine color='#E4E4E7' size={1} height="32px"/>

        <div className='px-3 flex gap-x-5 items-center'>
          <Popover>
            <PopoverTrigger className='text-xs w-[45px] flex justify-between items-center'>
              Help
              <ChevronDown viewBox='0 0 24 24' width='16' height='16'/>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>

        <div>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>{user?.first_name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </div>
  )
}