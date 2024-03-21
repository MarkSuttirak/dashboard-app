import React, { useState } from 'react'
import DrawLine from '../drawLine'
import UpgradeProModal from './upgradeProModal'
import { SearchBar } from './searchBar'
import { HelpMenu } from './helpMenu'
import AvatarMenu from './avatarMenu'
import Breadcrumbs from '../breadcrumbs'
import NotificationsTopbar from './notifications'
import { Icons } from '../ui/icons'
import { ChevronRight } from 'lucide-react'

export default function Topbar({isSidebarOpen, setIsSidebarOpen}){
  return (
    <div className={`topbar`}>
      <div className='hidden lg:block'>
        <Breadcrumbs />
      </div>

      <button className="flex lg:hidden items-center gap-x-2" onClick={setIsSidebarOpen}>
        <Icons.zaviagoApp className='w-9 h-9 z-9'/>

        <h2 className='cal-sans text-[17px] leading-[21px] font-semibold'>Workspace</h2>
        <ChevronRight class='w-6 h-6'/>
      </button>

      <section className='flex items-center gap-x-2 md:gap-x-4'>

        {/* Make the upgrade pro button absolute on mobile because I want to hide this button on mobile and show it on the dashboard page, 
        but the Zaviago icon is disappeared when I use 'hidden' class */}
        <div className='absolute md:static -top-[1000%]'>
          <UpgradeProModal />
        </div>

        <SearchBar />

        <div className='hidden md:flex gap-x-4 items-center'>
          <DrawLine color='#E4E4E7' width='1px' height="24px"/>
          <HelpMenu />
        </div>

        <AvatarMenu />
      </section>
    </div>
  )
}