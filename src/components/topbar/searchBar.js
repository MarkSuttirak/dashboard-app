import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Search } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

export default function SearchBar(){
  const navigate = useNavigate()

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const [open, setOpen] = useState(false)

  const settingsMenus = [
    {
      link:'/dashboard/settings/account',
      title:'Account'
    },
    {
      link:'/dashboard/settings/billing-plans',
      title:'Billing & Plans'
    },
    {
      link:'/dashboard/settings/notifications',
      title:'Notifications'
    },
  ]

  const integrationsMenus = [
    {
      link:'/integration/manage-apps',
      title:'Manage Apps'
    },
    {
      link:'/integration/upgrade-apps',
      title:'Upgrade Apps'
    },
    {
      link:'/integration/apps-quota',
      title:'Apps Quota'
    },
  ]

  window.onkeydown = (e) => {
    if (e.ctrlKey && e.key === 'g'){
      e.preventDefault()
      setOpen(true)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='outline-none bg-zinc-100 rounded-md px-2 py-[6px] text-[13px] h-7 flex items-center w-[300px] text-zinc-500 tracking-[0.02em] gap-x-[9px] leading-5'>
        <Search viewBox='0 0 24 24' width='14' height='14' className='ml-1'/>
        Search or type a command (Ctrl + G)
      </DialogTrigger>
      <DialogContent className='p-0'>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Integrations">
              {integrationsMenus.map(item => (
                <CommandItem key={item.title} onSelect={() => navigate(item.link)}>{item.title}</CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              {settingsMenus.map(item => (
                <CommandItem key={item.title} onSelect={() => navigate(item.link)}>{item.title}</CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}