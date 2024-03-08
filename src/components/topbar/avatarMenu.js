import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import { User, Keyboard, Layout, LogOut, Globe, MoreHorizontal } from 'lucide-react'
import { useUser } from '../../hooks/useUser'
import LogoutModal from "./logoutModal";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HelpMenuList } from "./helpMenu";
import { useState } from 'react'

export default function AvatarMenu(){
  const { t, i18n } = useTranslation()
  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: false
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const MenuList = () => {
    return (
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

          <div className="md:hidden">
            <HelpMenuList />
            <CommandSeparator />
          </div>

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
    )
  }

  return (
    <>
      <div className={`h-screen w-screen bg-gray-500/50 z-[99] left-0 top-0 fixed ${isMobileMenuOpen ? 'opacity-1 visible' : 'opacity-0 invisible'} transition duration-300`} onClick={() => setIsMobileMenuOpen(false)}/>
      <Popover>
        <PopoverTrigger className="relative hidden md:block">
          <Avatar className='w-8 h-8 text-sm'>
            <AvatarImage src="" />
            <AvatarFallback>{user?.first_name[0]}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className='p-0 w-[243px] absolute -right-4'>
          <MenuList />
        </PopoverContent>
      </Popover>

      <div className="md:hidden">
        <button className='w-8 h-8 text-sm bg-[#F5F6F8] rounded-full flex items-center justify-center' onClick={() => setIsMobileMenuOpen(true)}>
          <MoreHorizontal class="h-5 w-5 text-[#7D7D7D]"/>
        </button>
        <div className={`fixed left-0 w-full z-[1111] ${isMobileMenuOpen ? 'bottom-0' : '-bottom-full'} transition-all duration-300`}>
          <div className="px-3 py-4 bg-white rounded-t-lg">
            <MenuList />
          </div>
        </div>
      </div>
    </>
  )
}