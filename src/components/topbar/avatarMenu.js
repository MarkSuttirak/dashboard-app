import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import { User, Keyboard, Layout, LogOut, Globe } from 'lucide-react'
import { useUser } from '../../hooks/useUser'
import LogoutModal from "./logoutModal";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AvatarMenu(){
  const { t, i18n } = useTranslation()
  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: false
  });

  const handleChangeLang = () => {
    if (localStorage.lang !== null){
      if (localStorage.lang === 'th'){
        i18n.changeLanguage('en')
        localStorage.setItem('lang', 'en')
      } else {
        i18n.changeLanguage('th')
        localStorage.setItem('lang', 'th')
      }
    }
  }

  const navigate = useNavigate()

  return (
    <Popover>
      <PopoverTrigger className="relative">
        <Avatar className='w-8 h-8 text-sm'>
          <AvatarImage src="" />
          <AvatarFallback>{user?.first_name[0]}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-[243px] absolute -right-4'>
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={handleChangeLang}>
                <Globe viewBox='0 0 24 24' className="h-4 w-4 mr-2"/>
                {t('language')}
                <CommandShortcut className='font-normal flex gap-x-2'>
                  <span className={`${localStorage.lang !== null && localStorage.lang === 'th' ? 'bg-darkergray px-[5px] text-primary-foreground rounded-sm' : 'text-secondary'}`}>TH</span>
                  <span className={`${localStorage.lang !== null && localStorage.lang === 'en' ? 'bg-darkergray px-[5px] text-primary-foreground rounded-sm' : 'text-secondary'}`}>EN</span>
                </CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => navigate('/dashboard/settings/account')}>
                <User viewBox='0 0 24 24' className="h-4 w-4 mr-2"/>
                {t('topbar.menus.my_account')}
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem className='p-0'>
                <LogoutModal>
                  <LogOut viewBox='0 0 24 24' className="h-4 w-4 mr-2"/>
                  {t('topbar.menus.logout')}
                </LogoutModal>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}