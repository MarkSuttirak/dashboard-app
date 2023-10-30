import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/sidebar-dropdown.css";
import { switchContext } from '../App'
import Digice from "./icon-menus/Digice";
import IconMock from "./icon-menus/IconMock";
import { useUser } from "../hooks/useUser";
import SidebarShortcut from "./sidebarShortcut";
import { Home, ListMinus, PlusCircle, Settings, Search, Bell, Users, Zap, UserCircle, LayoutGrid, Layout } from "lucide-react";
import { Button } from "./ui/button";

// import TeamModal from "../components/switchTeamModal";

const Sidebar = ({ loadingLogo, isSidebarOpen, setIsSidebarOpen }) => {
  const [active, setActive] = useState('');
  const location = useLocation();
  const { user } = useUser();

  const handleMenuClick = (menu) => {
    setActive(menu);
  }

  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', icon: <LayoutGrid viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/dashboard/app', current: active === '/dashboard/app' ? true : false, id: 'dashboard' },
    { name: 'Notifications', icon: <Bell viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/integration', current: active === '/integration' || active === '/integration/connected' ? true : false, id: 'integration' },
    { name: 'Search', icon: <Search viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/gifts-privileges', current: active === "/gifts-privileges" || active === "/gifts-privileges/premium" || active === "/gifts-privileges/free" ? true : false, active: active, id: 'gift' },
    { name: 'Settings', icon: <Settings viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/dashboard/settings/account', current: active === "/dashboard/settings/account" || active === "/dashboard/settings/appearance" || active === "/dashboard/settings/account" ? true : false, active: active, id: 'settings' },
  ]

  const yourSites = [
    { name: 'Integration', icon: <Zap viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'integration' },
    { name: 'App Store', icon: <UserCircle viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'app-store' },
    { name: 'Teams', icon: <LayoutGrid viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'teams' },
  ]

  const workspaceApp = [
    { name: 'Commerce', icon: <Layout viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'commerce' },
    { name: 'Blog & Website', icon: <LayoutGrid viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'blog-website' },
    { name: 'CRM', icon: <LayoutGrid viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'crm' },
    { name: 'HR & HRM', icon: <LayoutGrid viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'hr-hrm' },
  ]

  useEffect(() => {
    setActive(location.pathname);
  })

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [query, setQuery] = useState('')

  const IconSidebar = () => {
    return (
      <nav className="nav-left-side">
        <div className="nav-btns" id="home-btn" onClick={() => setIsSidebarOpen(true)}>
          <Home color='#18181B' viewBox='0 0 24 24' width='18' height='18'/>
        </div>
        <div className="nav-btns add-ons" style={{ background: "#F2F2FD" }}>
          <IconMock />
        </div>
        <div className="nav-btns add-ons" style={{ background: "#FFEAE1" }}>
          <Digice />
        </div>
        <div className="nav-btns">
          <PlusCircle color='#18181B' viewBox='0 0 24 24' width='18' height='18'/>
        </div>
      </nav>
    )
  }

  return (
    <>
      <IconSidebar />
      <div className={`flex flex-1 flex-col border-r border-gray-200 bg-white ${isSidebarOpen ? 'active' : 'inactive'}`} id="sidebar">
        <div className="flex flex-1 flex-col pt-[10px]">
          <div className="flex flex-shrink-0 items-center px-3">
            {!loadingLogo ? (
              // <button onClick={() => navigate(-1)} className="flex text-[13px] font-semibold items-center">
              //   <ArrowLeft viewBox='0 0 30 24' />
              //   Back
              // </button>
              <div className="flex gap-x-2 items-center w-full">
                <SidebarShortcut />
                <Button className='h-10 w-10 p-[10px]' variant='secondary' onClick={() => setIsSidebarOpen(false)}>
                  <ListMinus color='#18181B' viewBox='0 0 24 24'/>
                </Button>
              </div>
            ) : (
              <div className="animate-pulse">
                <div className="bg-[#F3F3F3] w-[54px] aspect-square rounded-lg"></div>
              </div>
            )}
          </div>

          <nav className="flex bg-white px-4 pt-2 flex-col gap-y-4" aria-label="Sidebar">
            <section className="flex flex-col gap-y-1">
              {navigation.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full flex justify-start gap-x-2 ${item.href === active ? 'bg-accent' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section>

            <section className="flex flex-col gap-y-1">
              <h3 className="text-[#797979] text-sm font-semibold p-4">Your sites</h3>
              {yourSites.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full flex justify-start gap-x-2 ${item.href === active ? 'bg-accent' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section>

            <section className="flex flex-col gap-y-1">
              <h3 className="text-[#797979] text-sm font-semibold p-4">WorkSpace App</h3>
              {workspaceApp.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full flex justify-start gap-x-2 ${item.href === active ? 'bg-accent' : ''}`}>
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

export default Sidebar;