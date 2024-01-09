import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { BadgeInfo, BookCopy, ChevronDown, ClipboardList, Info, MessageCircle, Zap, User, Keyboard, Layout, LogOut, Search, BadgeHelp } from 'lucide-react'
import { useState } from 'react'
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import { useUser } from '../../hooks/useUser'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HelpMenu(){
  const { t } = useTranslation()
  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: false
  });

  const navigate = useNavigate()

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
            <CommandGroup>
              <CommandItem onSelect={() => window.location.href = "https://zaviago-platform-doc.vercel.app/"}>
                <BookCopy viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
                {t('topbar.menus.documentation')}
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem>
                <ClipboardList viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
                {t('topbar.menus.report_issue')}
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem onSelect={() => window.location.href = `http://${sites?.site_list[0].name}`}>
                <Layout viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
                {t('topbar.menus.view_website')}
              </CommandItem>
              <CommandItem onSelect={() => window.location.href = 'https://page.line.me/zaviago'}>
                <BadgeHelp viewBox='0 0 24 24' className='mr-2 h-4 w-4 stroke-[1.5]'/>
                {t('topbar.menus.support')}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}