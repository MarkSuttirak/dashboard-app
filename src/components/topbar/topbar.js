import React, {useState} from 'react'
import { BellIcon, LightningBoltIcon, EyeNoneIcon } from '@radix-ui/react-icons'
import VerticalLine from '../drawLine'
import { useLocation } from 'react-router-dom'
import UpgradeProModal from './upgradeProModal'
import SearchBar from './searchBar'
import HelpMenu from './helpMenu'
import AvatarMenu from './avatarMenu'

export default function Topbar({isSidebarOpen, hasNoLeftSidebar}){
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState('Zaviago WorkSpace')

  return (
    <div className={`topbar${isSidebarOpen ? ' active' : ' inactive'}${hasNoLeftSidebar ? 'no-sidebar' : ''}`}>
      <h2 className='subheading font-medium'>{currentPage}</h2>
      <section className='flex items-center'>
        <UpgradeProModal />

        <div className='pr-6 flex gap-x-5 items-center'>
          <SearchBar />
          <BellIcon color='#7D7D7D' width='21' height='21'/>
        </div>

        <VerticalLine color='#E4E4E7' size={1} height="24px"/>

        <div className='px-3 flex gap-x-5 items-center'>
          <HelpMenu />
        </div>

        <AvatarMenu />
      </section>
    </div>
  )
}