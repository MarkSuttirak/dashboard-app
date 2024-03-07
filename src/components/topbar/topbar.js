import React, {useState} from 'react'
import DrawLine from '../drawLine'
import UpgradeProModal from './upgradeProModal'
import { SearchBar } from './searchBar'
import { HelpMenu } from './helpMenu'
import AvatarMenu from './avatarMenu'
import Breadcrumbs from '../breadcrumbs'
import { useEffect } from 'react'
import NotificationsTopbar from './notifications'
import { Icons } from '../ui/icons'
import { ChevronRight } from 'lucide-react'

export default function Topbar({isSidebarOpen, setIsSidebarOpen}){
  return (
    <div className={`topbar`}>
      <Breadcrumbs />
      <button className="flex md:hidden items-center gap-x-2" onClick={setIsSidebarOpen}>
        <Icons.zaviagoApp className='w-9 h-9'/>
        <h2 className='cal-sans text-[17px] font-semibold'>Workspace</h2>
        <ChevronRight class='w-4 h-4'/>
      </button>

      <section className='hidden md:flex items-center'>
        <UpgradeProModal />

        <div className='pr-3 flex gap-x-[30px] items-center'>
          <SearchBar />
          <NotificationsTopbar />
        </div>

        <div className='flex gap-x-4 items-center'>
          <DrawLine color='#E4E4E7' width='1px' height="24px"/>
          <HelpMenu />
          <AvatarMenu />
        </div>
      </section>

      <section className='flex md:hidden items-center gap-x-5'>
        <NotificationsTopbar />
        <AvatarMenu />
      </section>
    </div>
  )
}