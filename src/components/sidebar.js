import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/sidebar-dropdown.css";
import { switchContext } from '../App'
import { useUser } from "../hooks/useUser";
import SidebarShortcut from "./sidebarShortcut";
import { Home, ListMinus, PlusCircle, Settings, Search, Bell, Users, Zap, UserCircle, LayoutGrid, Layout } from "lucide-react";
import { Button } from "./ui/button";
import { LightningBoltIcon, BellIcon } from "@radix-ui/react-icons";
import { SidebarApp01, SidebarApp02, SidebarApp03, SidebarApp04, SidebarApp05, SidebarApp06, SidebarApp07, SidebarApp08, SidebarApp09, SidebarApp10 } from "./sidebarApps";

const apps = [<SidebarApp01 />, <SidebarApp02 />, <SidebarApp03 />, <SidebarApp04 />, <SidebarApp05 />, <SidebarApp06 />, <SidebarApp07 />, <SidebarApp08 />, <SidebarApp09 />, <SidebarApp10 />]

export default function Sidebar({ loadingLogo, isSidebarOpen, setIsSidebarOpen }){
  const [active, setActive] = useState('');
  const location = useLocation();
  const { user } = useUser();

  const handleMenuClick = (menu) => {
    setActive(menu);
  }

  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', icon: <LayoutGrid viewBox='0 0 24 24' width='16' color='#18181B' strokeWidth='1.25'/>, href: '/dashboard/app', current: active === '/dashboard/app' ? true : false, id: 'dashboard' },
    { name: 'Notifications', icon: <BellIcon color='#18181B' />, href: '/integration', current: active === '/integration' || active === '/integration/connected' ? true : false, id: 'integration' },
    { name: 'Search', icon: <Search viewBox='0 0 24 24' width='16' color='#18181B' />, href: '/gifts-privileges', current: active === "/gifts-privileges" || active === "/gifts-privileges/premium" || active === "/gifts-privileges/free" ? true : false, active: active, id: 'gift' },
    { name: 'Settings', icon: <Settings viewBox='0 0 24 24' width='16' color='#18181B' />, href: '/dashboard/settings/account', current: active == "/dashboard/settings/account" || active == "/dashboard/settings/billing-plans" || active == "/dashboard/settings/notifications" ? true : false, active: active, id: 'settings' },
  ]

  const yourSites = [
    { name: 'Integration', icon: <LightningBoltIcon color='#18181B' />, id: 'integration' },
    { name: 'App Store', icon: <UserCircle viewBox='0 0 24 24' width='16' color='#18181B' />, id: 'app-store' },
    { name: 'Teams', icon: <LayoutGrid viewBox='0 0 24 24' width='16' color='#18181B' />, href: '/dashboard/teams/team-members', current: active === "/dashboard/teams/team-members" || active === "/dashboard/teams/teams" ? true : false, active: active, id: 'teams' },
  ]

  const workspaceApp = [
    { name: 'Commerce', icon: <Layout viewBox='0 0 24 24' width='16' color='#18181B' />, id: 'commerce' },
    { name: 'Blog & Website', icon: <LayoutGrid viewBox='0 0 24 24' width='16' color='#18181B' />, id: 'blog-website' },
    { name: 'CRM', icon: <LayoutGrid viewBox='0 0 24 24' width='16' color='#18181B' />, id: 'crm' },
    { name: 'HR & HRM', icon: <LayoutGrid viewBox='0 0 24 24' width='16' color='#18181B' />, id: 'hr-hrm' },
  ]

  useEffect(() => {
    setActive(location.pathname);
  })

  const IconSidebar = () => {
    return (
      <nav className="nav-left-side">
        <div className="nav-btns" id="home-btn" onClick={() => setIsSidebarOpen(true)}>
          <Home color='#18181B' viewBox='0 0 24 24' width='16' height='16'/>
        </div>
        {apps.map((a) => (
          <div className="nav-btns add-ons">
            {a}
          </div>
        ))}
        <div className="nav-btns">
          <PlusCircle color='#18181B' viewBox='0 0 24 24' width='16' height='16'/>
        </div>
      </nav>
    )
  }

  return (
    <>
      <IconSidebar />
      <div className={`flex flex-1 flex-col border-r border-gray-200 bg-white ${isSidebarOpen ? 'active' : 'inactive'}`} id="sidebar">
        <div className="flex flex-1 flex-col pt-[14px]">
          <div className="flex flex-shrink-0 items-center px-3">
            <div className="flex gap-x-2 items-center w-full">
              <SidebarShortcut />
              <Button className='h-10 min-w-10 p-[10px]' variant='secondary' onClick={() => setIsSidebarOpen(false)}>
                <ListMinus color='#18181B' viewBox='0 0 24 24' width='16'/>
              </Button>
            </div>
          </div>

          <nav className="flex bg-white px-3 pt-2 flex-col" aria-label="Sidebar">
            <section className="flex flex-col -gap-y-[-2px]">
              {navigation.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full text-[13px] flex justify-start gap-x-2 ${item.href === active ? 'bg-accent' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section>

            <section className="flex flex-col -gap-y-[-2px]">
              <h3 className="text-[#797979] text-sm font-semibold px-4 leading-7 mt-6 mb-2 tracking-[-0.35px]">Your sites</h3>
              {yourSites.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full text-[13px] flex justify-start gap-x-2 ${item.href === active ? 'bg-accent' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section>

            <section className="flex flex-col -gap-y-[-2px]">
              <h3 className="text-[#797979] text-sm font-semibold px-4 leading-7 mt-6 mb-2 tracking-[-0.35px]">WorkSpace App</h3>
              {workspaceApp.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full text-[13px] flex justify-start gap-x-2 ${item.href === active ? 'bg-accent' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section>
          </nav>
        </div>
      </div>
    </>
  )
}