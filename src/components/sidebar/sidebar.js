import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { PlusCircle, Settings, Search, ChevronsLeft, Users, Zap, UserCircle, LayoutGrid, Layout, ClipboardList, Package, Group, Baseline, Clipboard, CheckCircle, CheckCircle2, UserSquare, Mailbox, Milestone, PackagePlus, ClipboardPaste, PanelLeftClose, PanelLeftOpen, Home, ChevronsRight, Hotel } from "lucide-react";
import { Button } from "../ui/button";
import { BellIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import { Icons } from "../ui/icons";
import ServiceModals from "./serviceModals";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { SearchItem } from "../topbar/searchBar";
import { Skeleton } from "../ui/skeleton"
import SidebarUpgrade from "./sidebarUpgrade";

// import TeamModal from "../components/switchTeamModal";

export default function Sidebar({ loadingLogo, isSidebarOpen, setIsSidebarOpen }){
  const [active, setActive] = useState('');
  const location = useLocation();
  const { user } = useUser();
  const [upgraded, setUpgraded] = useState(false)

  const benchApps = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), {enabled: false});
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), {enabled: false});  
  const appslists = benchApps.data || [];

  const navigate = useNavigate();

  const handleMenuClick = (menu, href) => {
    navigate(href)
    setActive(menu);
  }

  const { data: sites } = useQuery('sites', site.list, {enabled: false});

  const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.loginAsAdmin(name, reason), {
    onSuccess: (res) => {
      const { sid, site } = res.data.message;
      if (sid && site) {
        window.open(`https://${site}/app/home?sid=${sid}`, '_blank');
      }
    }
  });

  const navigation = [
    { name: 'Dashboard', icon: <Hotel viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5' color='#18181B' />, href: '/dashboard/app', current: active === '/dashboard/app' ? true : false, id: 'dashboard' },
    { name: 'Settings', icon: <Settings viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5' color='#18181B' />, href: '/dashboard/settings/account', current: active == "/dashboard/settings/account" || active == "/dashboard/settings/billing-plans" || active == "/dashboard/settings/notifications" ? true : false, active: active, id: 'settings' },
  ]

  const settingsMenus = [
    { name: 'Inventory', icon: <LightningBoltIcon />, submenus: [
      { title:'Items',icon:<Package className="w-4 h-4 stroke-[1.5] text-[#18181B]"/> },
      { title:'Item Group', icon:<Group className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>},
      { title:'Brand', icon:<Baseline className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>}
    ]},
    { name: 'Orders', icon: <ClipboardList className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>, submenus: [
      { title:'Sales Invoice', icon:<Clipboard className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>},
      { title:'Payment Entry', icon:<CheckCircle2 className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>}
    ]},
    { name: 'Customers', icon: <UserCircle className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>, submenus: [
      { title:'Customer', icon: <UserSquare className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>},
      { title:'Customers Group', icon: <Users className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>},
      { title:'Contact', icon: <Mailbox className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>},
      { title:'Address', icon: <Milestone className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>}
    ]},
    { name: 'Stock', icon: <LayoutGrid className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>, submenus: [
      { title:'Stock Entry', icon: <PackagePlus className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>},
      { title:'Delivery Note', icon: <ClipboardPaste className="w-4 h-4 stroke-[1.5] text-[#18181B]"/>}
    ]},
  ]

  const yourSites = [
    { name: 'Integration', icon: <Zap className="w-4 h-4 stroke-[1.5] text-[#18181B]" />, id: 'integration', href: '/integration/manage-apps' },
    { name: 'App Store', icon: <UserCircle className="w-4 h-4 stroke-[1.5] text-[#18181B]" />, id: 'app-store', href: '/integration/appstore' },
  ]

  const workspaceApp = [
    { name: 'Manage Business', icon: <Icons.erpApp width='20' height='20'/>, id: 'manage-business', onClick:() => loginAsAdmin({ name: sites?.site_list[0].name, reason: "Login as admin" })},
    { name: 'Blog Creator', icon: <Icons.blogPostApp width='20' height='20' />, id: 'builder', onClick:() => window.open(`https://${sites?.site_list[0].name}/SpaBlogEditor`)},
    { name: 'Web Pages', icon: <Icons.websiteApp width='20' height='20' fill='transparent'/>, id: 'websites', onClick:() => window.open(`https://${sites?.site_list[0].name}/builder`)},
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

  const { data: loadAdmin, refetch } = useQuery('loadAdmin', () => site.loginAsAdmin(sites?.site_list[0].name, 'Admin'), {
    enabled: false,
    onSuccess: (res) => {
      //console.log(res);
    },
  });

  const loginNow = (page) => {
    var sid = loadAdmin?.data?.message.sid;
    var sitetoview = sites?.site_list[0].name;
    if(sid){
      window.open(`https://${sitetoview}/app/${page}?sid=${sid}`, '_blank');
    }
  }

  const IconSidebar = () => {
    return (
      <nav className={`nav-left-side`}>
        {/* {isSidebarOpen ? (
          <div className="nav-btns" id="home-btn" onClick={() => navigate('/')}>
            <Home color='#18181B' viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5'/>
          </div>
        ) : (
          <div className="nav-btns" id="home-btn" onClick={() => setIsSidebarOpen(true)}>
            <PanelLeftOpen color='#18181B' viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5'/>
          </div>
        )} */}
        <div className={`nav-btns ${!isSidebarOpen ? 'show' : 'hide'}`} id="home-btn" onClick={() => setIsSidebarOpen(true)}>
          <ChevronsRight color='#18181B' viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5'/>
        </div>

        <ServiceModals />
      </nav>
    )
  }

  return (
    <>
      <IconSidebar />
      <div className={`flex flex-1 flex-col border-r border-gray-200 bg-white ${isSidebarOpen ? 'active' : 'inactive'}`} id="sidebar">
        <div className="flex flex-1 flex-col pt-3">
          <div className="flex flex-shrink-0 items-center px-3 sidebar-site">
            <div className="flex items-center w-full">
              <div className="flex items-center gap-x-2">
                <div className="min-w-9 min-h-9">
                  <Icons.zaviagoApp onClick={() => navigate('/')} className='cursor-pointer w-9 h-9'/>
                </div>
                <span className="flex gap-x-2 items-center">
                  <div className="flex flex-col text-left">
                    <h2 className="cal-sans text-[17px] font-semibold">zaviago<span className="text-[13px]">.com</span></h2>
                    <p className={`text-[11px] font-medium tracking-[-0.33px] text-[#5A5A5A] ${sites ? '-mt-1' : 'mt-0'}`}>
                      {sites ? sites?.site_list[0].name : <Skeleton className='h-3 w-full rounded-sm'/>}
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <button className={`chevron-btn ${!isSidebarOpen ? 'inactive' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <ChevronsLeft className="chevron-sidebar" viewBox="0 0 24 24" width='16' height='16' />
          </button>

          {!upgraded && <SidebarUpgrade />}

          <nav className="flex bg-white px-3 pt-2 flex-col gap-y-4" aria-label="Sidebar">
            <section className="flex flex-col">
              {navigation.map((item) => (
                <>
                  {item.href ? (
                    <Button key={item.name} variant='ghost' onClick={() => handleMenuClick(item.current, item.href)} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${item.href === active ? 'bg-zinc-100' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                  ) : (
                    <Dialog key={item.name}>
                      <DialogTrigger>
                        <Button variant='ghost' className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5`}>
                          {item.icon}
                          {item.name}
                        </Button>
                      </DialogTrigger>
                      <SearchItem />
                    </Dialog>
                  )}
                </>
              ))}
            </section>

            {/* <section className="flex flex-col">
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
            </section> */}

            <section className="flex flex-col">
              <h3 className="text-[#8A8A8A] text-sm font-medium p-4">WorkSpace App</h3>
              {workspaceApp.map((item) => (
                <Button variant='ghost' onClick={item.onClick} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5`}>
                  {item.icon}
                  {item.name}
                </Button>
              ))}
            </section>

            <section className="flex flex-col">
              <h3 className="text-[#8A8A8A] text-sm font-medium p-4">Your sites</h3>
              {yourSites.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={handleMenuClick} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${item.href === active ? 'bg-zinc-100' : ''}`}>
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