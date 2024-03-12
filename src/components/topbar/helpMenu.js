import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { BadgeInfo, BookCopy, ChevronDown, ClipboardList, Info, MessageCircle, Zap, User, Keyboard, Layout, LogOut, Search, BadgeHelp } from 'lucide-react'
import { useState } from 'react'
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import { useUser } from '../../hooks/useUser'
import { useTranslation } from "react-i18next";

export function HelpMenuList(){
  const { t } = useTranslation()
  const helpMenus = [
    {
      separator:true,
      menus: [
        {
          title:t('topbar.menus.documentation'),
          link:"https://zaviago-platform-doc.vercel.app/",
          icon:<BookCopy viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>,
        }
      ]
    },
    {
      separator:true,
      menus: [
        {
          title:t('topbar.menus.report_issue'),
          link:"https://page.line.me/zaviago",
          icon:<ClipboardList viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>,
        }
      ]
    },
    {
      separator:false,
      menus: [
        {
          title:t('topbar.menus.view_website'),
          link:"https://www.zaviago.com/",
          icon:<Layout viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
        },
        {
          title:t('topbar.menus.support'),
          link:"https://page.line.me/zaviago",
          icon:<BadgeHelp viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
        }
      ]
    },
  ]

  return (
    <>
      {helpMenus.map(menu => (
        <>
          <CommandGroup className="mx-3 md:mx-0">
            {menu.menus.map(m => (
              <CommandItem className="py-[10px] md:py-1" onSelect={() => window.location.href = m.link}>
                {m.icon}
                {m.title}
              </CommandItem>
            ))}
          </CommandGroup>
          {menu.separator && <CommandSeparator />}
        </>
      ))}
    </>
  )
}

export function HelpMenu(){
  const { t } = useTranslation()
  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: false
  });

  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className='text-[13px] flex justify-between items-center gap-x-2 relative'>
        {t('topbar.help')}
        <ChevronDown viewBox='0 0 24 24' width='14' height='14' strokeWidth='1'/>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-[243px] absolute -right-10'>
        <Command>
          <CommandList>
            <HelpMenuList />
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}