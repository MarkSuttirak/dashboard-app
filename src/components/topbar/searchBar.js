import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Search } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useTranslation } from "react-i18next"

const settingsMenus = [
  {
    link:'/dashboard/settings/account',
    title:'Account'
  },
  {
    link:'/dashboard/settings/billing-plans',
    title:'Billing & Plans'
  }
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

export function SearchItem(){
  const navigate = useNavigate()
  return (
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
  )
}

export function SearchBar(){
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  window.onkeydown = (e) => {
    if (e.ctrlKey && e.key === 'g'){
      e.preventDefault()
      setOpen(true)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='outline-none md:bg-zinc-100 rounded-full px-2 md:pl-2 md:pr-4 py-[6px] text-[13px] h-7 flex items-center w-fit md:w-[155px] text-zinc-500 tracking-[0.02em] gap-x-[3px] leading-5'>
        <Search className="h-5 w-5 stroke-[1.5]"/>
        <div className="hidden md:flex justify-between items-center w-full text-xs">
          <p>{t('topbar.search')}</p>
          <p>(CTRL +G)</p>
        </div>
      </DialogTrigger>
      <DialogContent className='p-0 translate-y-0 top-0 md:-translate-y-[50%] md:top-[50%]'>
        <SearchItem />
      </DialogContent>
    </Dialog>
  )
}