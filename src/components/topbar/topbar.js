import React, {useState} from 'react'
import DrawLine from '../drawLine'
import UpgradeProModal from './upgradeProModal'
import { SearchBar } from './searchBar'
import HelpMenu from './helpMenu'
import AvatarMenu from './avatarMenu'
import Breadcrumbs from '../breadcrumbs'
import { useEffect } from 'react'
import NotificationsTopbar from './notifications'

export default function Topbar({isSidebarOpen, hasNoLeftSidebar}){
  return (
    <div className={`topbar${isSidebarOpen ? ' active' : ' inactive'}${hasNoLeftSidebar ? 'no-sidebar' : ''}`}>
      <Breadcrumbs />
      <section className='flex items-center'>
        <UpgradeProModal />

        <div className='pr-3 flex gap-x-5 items-center'>
          <SearchBar />
          <NotificationsTopbar />
        </div>

        <DrawLine color='#E4E4E7' width='1px' height="32px"/>

        <div className='pl-7 pr-4 flex gap-x-5 items-center'>
          <HelpMenu />
        </div>

        <AvatarMenu />
      </section>
    </div>
  )
}