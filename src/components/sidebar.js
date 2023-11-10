import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/sidebar-dropdown.css";
import { switchContext } from '../App'
import Digice from "./icon-menus/Digice";
import IconMock from "./icon-menus/IconMock";
import { useUser } from "../hooks/useUser";
import SidebarShortcut from "./sidebarShortcut";
import { Home, ListMinus, PlusCircle, Settings, Search, Bell, Users, Zap, UserCircle, LayoutGrid, Layout, ClipboardList, Package, ChevronDown, Group, Baseline, Clipboard, CheckCircle, CheckCircle2, UserSquare, Mailbox, Milestone, PackagePlus, ClipboardPaste } from "lucide-react";
import { Button } from "./ui/button";
import { BellIcon, CheckCircledIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { SidebarApp01, SidebarApp02, SidebarApp03, SidebarApp04, SidebarApp05, SidebarApp06, SidebarApp07, SidebarApp08, SidebarApp09, SidebarApp10 } from "./sidebarApps";

const apps = [<SidebarApp01 />, <SidebarApp02 />, <SidebarApp03 />, <SidebarApp04 />, <SidebarApp05 />, <SidebarApp06 />, <SidebarApp07 />, <SidebarApp08 />, <SidebarApp09 />, <SidebarApp10 />]

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
    { name: 'Dashboard', icon: <LayoutGrid viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5' color='#18181B' />, href: '/dashboard/app', current: active === '/dashboard/app' ? true : false, id: 'dashboard' },
    { name: 'Notifications', icon: <BellIcon viewBox='0 0 15 15' strokeWidth='1.5' color='#18181B' />, href: '/dashboard/notification', current: active === '/integration' || active === '/integration/connected' ? true : false, id: 'integration' },
    { name: 'Search', icon: <Search viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5' color='#18181B' />, href: '/gifts-privileges', current: active === "/gifts-privileges" || active === "/gifts-privileges/premium" || active === "/gifts-privileges/free" ? true : false, active: active, id: 'gift' },
    { name: 'Settings', icon: <Settings viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5' color='#18181B' />, href: '/dashboard/settings/account', current: active == "/dashboard/settings/account" || active == "/dashboard/settings/billing-plans" || active == "/dashboard/settings/notifications" ? true : false, active: active, id: 'settings' },
  ]

  const settingsMenus = [
    { name: 'Inventory', icon: <LightningBoltIcon />, submenus: [
      { title:'Items',icon:<Package viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/> },
      { title:'Item Group', icon:<Group viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>},
      { title:'Brand', icon:<Baseline viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>}
    ]},
    { name: 'Orders', icon: <ClipboardList viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>, submenus: [
      { title:'Sales Invoice', icon:<Clipboard viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>},
      { title:'Payment Entry', icon:<CheckCircle2 viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>}
    ]},
    { name: 'Customers', icon: <UserCircle viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>, submenus: [
      { title:'Customer', icon: <UserSquare viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>},
      { title:'Customers Group', icon: <Users viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>},
      { title:'Contact', icon: <Mailbox viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>},
      { title:'Address', icon: <Milestone viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>}
    ]},
    { name: 'Stock', icon: <LayoutGrid viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>, submenus: [
      { title:'Stock Entry', icon: <PackagePlus viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>},
      { title:'Delivery Note', icon: <ClipboardPaste viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5'/>}
    ]},
  ]

  const yourSites = [
    { name: 'Integration', icon: <Zap viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'integration' },
    { name: 'App Store', icon: <UserCircle viewBox='0 0 30 24' width='24' color='#18181B' />, id: 'app-store' },
    { name: 'Teams', icon: <LayoutGrid viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/dashboard/teams/team-members', current: active === "/dashboard/teams/team-members" || active === "/dashboard/teams/teams" ? true : false, active: active, id: 'teams' },
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

  const [sellingMenus, setSellingMenus] = useState(false)

  const [activeSubmenus, setActiveSubmenus] = useState([]);

  const handleSubMenuClick = (index) => {
    setActiveSubmenus((prev) => {
      const newActiveSubmenus = [...prev];
      newActiveSubmenus[index] = !newActiveSubmenus[index];
      return newActiveSubmenus;
    });
  };

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
        <div className="nav-btns add">
          <PlusCircle color='#18181B' viewBox='0 0 24 24' width='16' height='16'/>
        </div>
      </nav>
    )
  }

  return (
    <>
      <IconSidebar />
      <div className={`flex flex-1 flex-col border-r border-gray-200 bg-white ${isSidebarOpen ? 'active' : 'inactive'}`} id="sidebar">
        <div className="flex flex-1 flex-col pt-3">
          <div className="flex flex-shrink-0 items-center px-3">
            <div className="flex gap-x-2 items-center w-full">
              <SidebarShortcut />
              <button className='listminus-btn' variant='secondary' onClick={() => setIsSidebarOpen(false)}>
                <ListMinus viewBox='0 0 24 24' width='16' height='16'/>
              </button>
            </div>
          </div>

          <nav className="flex bg-white px-3 pt-2 flex-col gap-y-4" aria-label="Sidebar">
            <section className="flex flex-col">
              {navigation.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${item.href === active ? 'bg-zinc-100' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section>

            <section className="flex flex-col">
              <Button variant='ghost' className="text-[#797979] text-sm font-semibold tracking-[-0.35px] justify-between" onClick={() => setSellingMenus(!sellingMenus)}>
                Selling
                <ChevronDown viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5' className={`${sellingMenus ? 'rotate-180' : ''} transition duration-200`}/>
              </Button>
              {sellingMenus ? (
                <div className="mb-6">
                  {settingsMenus.map((item, index) => (
                    <>
                      <Button variant='ghost' key={index} onClick={() => {handleSubMenuClick(index);console.log(activeSubmenus)}} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${item.href === active ? 'bg-zinc-100' : ''}`}>
                        {item.icon}
                        {item.name}
                      </Button>
                      {activeSubmenus[index] && (
                        <div>
                          {item.submenus.map((submenu, subIndex) => (
                            <Button variant='ghost' key={subIndex} className={`flex justify-start gap-x-2 text-[13px] items-center leading-5 ml-[15px] w-[calc(100%_-_15px)] ${item.href === active ? 'bg-zinc-100' : ''}`}>
                              {submenu.icon}
                              {submenu.title}
                            </Button>
                          ))}
                        </div>
                      )}
                    </>
                  ))}
                </div>
              ) : null}
              <Button variant='ghost' className="text-[#797979] text-sm font-semibold tracking-[-0.35px] justify-between">
                CRM
              </Button>
              <Button variant='ghost' className="text-[#797979] text-sm font-semibold tracking-[-0.35px] justify-between">
                HR & HRM
              </Button>
              <Button variant='ghost' className="text-[#797979] text-sm font-semibold tracking-[-0.35px] justify-between">
                Accounting
              </Button>
            </section>

            {/* <section className="flex flex-col">
              <h3 className="text-[#797979] text-sm font-semibold p-4">Your sites</h3>
              {yourSites.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${item.href === active ? 'bg-zinc-100' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section>

            <section className="flex flex-col">
              <h3 className="text-[#797979] text-sm font-semibold p-4">WorkSpace App</h3>
              {workspaceApp.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${item.href === active ? 'bg-zinc-100' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section> */}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar;