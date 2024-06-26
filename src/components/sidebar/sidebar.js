import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { Settings, Users, Zap, UserCircle, LayoutGrid, ClipboardList, Package, Group, Baseline, Clipboard, CheckCircle2, UserSquare, Mailbox, Milestone, PackagePlus, ClipboardPaste, ChevronsRight, Hotel, Unplug } from "lucide-react";
import { Button } from "../ui/button";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import ServiceModals from "./serviceModals";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { SearchItem } from "../topbar/searchBar";
import SidebarUpgrade from "./sidebarUpgrade";
import { useTranslation } from "react-i18next";
import SidebarWebsite from "./sidebarWebsite";
import { workspaceImages, dashboardActivities } from "../icon-menus/workspace-images";
import { Separator } from "../ui/separator";

// import TeamModal from "../components/switchTeamModal";

export default function Sidebar({ loadingLogo, isSidebarOpen, setIsSidebarOpen }) {
  const { t, i18n } = useTranslation()
  const [active, setActive] = useState('');
  const location = useLocation();
  const { user } = useUser();
  const [upgraded, setUpgraded] = useState(false)
  const [isMobile, setIsMobile] = useState()

  const benchApps = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), { enabled: false });
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), { enabled: false });
  const appslists = benchApps.data || [];

  const navigate = useNavigate();
  const resize = () => window.innerWidth > 1024 ? setIsMobile(false) : setIsMobile(true)

  const handleMenuClick = (menu, href) => {
    navigate(href)
    setActive(menu);
  }

  const { data: sites } = useQuery('sites', site.list, { enabled: false });

  const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.login(name, reason), {
    onSuccess: (res) => {
      const { sid, site } = res.data.message;
      if (sid && site) {
        window.open(`https://${site}/app/home?sid=${sid}`, '_blank');
      }
    }
  });

  const navigation = [
    { name: t('menus.dashboard'), icon: <Hotel viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5' color='#18181B' />, href: '/dashboard/app', current: active === '/dashboard/app' ? true : false, id: 'dashboard' },
    { name: t('menus.settings'), icon: <Settings viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5' color='#18181B' />, href: window.innerWidth > 1024 ? '/dashboard/settings/account' : '/dashboard/settings', current: active == "/dashboard/settings/account" || active == "/dashboard/settings/billing-plans" ? true : false, active: active, id: 'settings' },
    { name: t('menus.teams'), icon: <Users viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5' color='#18181B' />, href: window.innerWidth > 1024 ? '/dashboard/teams/members' : '/dashboard/teams', current: active == "/dashboard/teams/members" ? true : false, active: active, id: 'teams' },
  ]

  const settingsMenus = [
    {
      name: 'Inventory', icon: <LightningBoltIcon />, submenus: [
        { title: 'Items', icon: <Package className="w-4 h-4 stroke-[1.5] text-darkergray" /> },
        { title: 'Item Group', icon: <Group className="w-4 h-4 stroke-[1.5] text-darkergray" /> },
        { title: 'Brand', icon: <Baseline className="w-4 h-4 stroke-[1.5] text-darkergray" /> }
      ]
    },
    {
      name: 'Orders', icon: <ClipboardList className="w-4 h-4 stroke-[1.5] text-darkergray" />, submenus: [
        { title: 'Sales Invoice', icon: <Clipboard className="w-4 h-4 stroke-[1.5] text-darkergray" /> },
        { title: 'Payment Entry', icon: <CheckCircle2 className="w-4 h-4 stroke-[1.5] text-darkergray" /> }
      ]
    },
    {
      name: 'Customers', icon: <UserCircle className="w-4 h-4 stroke-[1.5] text-darkergray" />, submenus: [
        { title: 'Customer', icon: <UserSquare className="w-4 h-4 stroke-[1.5] text-darkergray" /> },
        { title: 'Customers Group', icon: <Users className="w-4 h-4 stroke-[1.5] text-darkergray" /> },
        { title: 'Contact', icon: <Mailbox className="w-4 h-4 stroke-[1.5] text-darkergray" /> },
        { title: 'Address', icon: <Milestone className="w-4 h-4 stroke-[1.5] text-darkergray" /> }
      ]
    },
    {
      name: 'Stock', icon: <LayoutGrid className="w-4 h-4 stroke-[1.5] text-darkergray" />, submenus: [
        { title: 'Stock Entry', icon: <PackagePlus className="w-4 h-4 stroke-[1.5] text-darkergray" /> },
        { title: 'Delivery Note', icon: <ClipboardPaste className="w-4 h-4 stroke-[1.5] text-darkergray" /> }
      ]
    },
  ]

  const yourSites = [
    { name: t('menus.integration'), icon: <Zap className="w-4 h-4 stroke-[1.5] text-darkergray" />, id: 'integration', href: '/integration/manage-apps', current: active === '/integration/manage-apps' || active === '/integration/upgrade-apps' ? true : false },
    { name: 'App Store', icon: <Unplug className="w-4 h-4 stroke-[1.5] text-darkergray" />, id: 'app-store', href: '/integration/appstore', current: active === '/integration/appstore' ? true : false },
  ]

  const workspaceApp = [
    { name: 'Workspace', icon: workspaceImages.customerDataSystem, onClick: () => window.open('https://apps.hosting.zaviago.com/app/item', '_self') },
    { name: 'TeamInbox', icon: workspaceImages.pos, onClick: () => window.open('https://chat.zaviago.com/', '_self')  },
    { name: 'WorkDay', icon: workspaceImages.projectManagement, onClick: () => window.open('https://workday.zaviago.com/', '_self')  },
    { name: 'LineCRM', icon: workspaceImages.linecrm, onClick: () => window.open('https://apps.hosting.zaviago.com/app/loyalty-program', '_self') },
    { name: 'SalesTeam', icon: workspaceImages.salesteam, onClick: () => window.open('/coming-soon', '_blank') },
    { name: 'Zaviago HR', icon: workspaceImages.hrspace, onClick: () => window.open('https://apps.hosting.zaviago.com/app/hr', '_self') },
  ]

  const workspaceAppTwo = [
    { name: 'Data Insight', icon: workspaceImages.blogAndNews, onClick: () => window.open('https://apps.hosting.zaviago.com/insights/dashboard', '_self') },
    { name: 'Drive', icon: workspaceImages.manageWebsite, onClick: () => window.open('https://apps.hosting.zaviago.com/drive/home', '_self') },
  ]

  const workspaceAppThree = [
    { name: 'Blogs', icon: workspaceImages.blogAndNews, onClick: () => window.open('https://ghost.zaviago.com/ghost/#/dashboard', '_self') },
    { name: 'Builder', icon: workspaceImages.manageWebsite, onClick: () => window.open('https://apps.hosting.zaviago.com/builder', '_self') },
    { name: 'Whiteboard', icon: workspaceImages.whiteboard, onClick: () => window.open('https://affine.zaviago.com/', '_self')  },
  ]

  useEffect(() => {
    setActive(location.pathname);
    resize()

    window.addEventListener("resize", resize)
  }, [isMobile])

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

  const { data: loadAdmin, refetch } = useQuery('loadAdmin', () => site.login(sites?.site_list[0].name, 'Admin'), {
    enabled: false,
    onSuccess: (res) => {
      //console.log(res);
    },
  });

  const loginNow = (page) => {
    var sid = loadAdmin?.data?.message.sid;
    var sitetoview = sites?.site_list[0].name;
    if (sid) {
      window.open(`https://${sitetoview}/app/${page}?sid=${sid}`, '_blank');
    }
  }

  return (
    <>
      {/* <IconSidebar /> */}
      <div className={`h-screen w-screen bg-gray-500/50 z-[99] left-0 top-0 fixed ${isSidebarOpen ? 'opacity-1 visible' : 'opacity-0 invisible'} transition duration-300`} onClick={() => setIsSidebarOpen(false)}/>
      <div className={`${isSidebarOpen ? 'active' : 'inactive'}`} id="sidebar">
        <div className="flex flex-1 flex-col pt-3 lg:pt-[18px]">
          <div className="relative sidebar-top">
            <div className="flex flex-shrink-0 items-center px-[14px] sidebar-site relative z-[4]">
              <div className="flex items-center w-full relative">
                <SidebarWebsite />
              </div>
            </div>
            <div className="w-8 h-8 absolute top-2.5 rounded-[5px] left-4 bg-[#0000000F] border border-[#00000029] square-shadow" />
          </div>
          {/* <button className={`chevron-btn ${!isSidebarOpen ? 'inactive' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <ChevronsLeft className="chevron-sidebar" viewBox="0 0 24 24" width='16' height='16' />
          </button> */}

          <nav className="flex bg-white py-7 justify-center flex-col gap-y-3" aria-label="Sidebar">
            <section className="flex flex-col gap-y-3 lg:gap-y-0 px-3">
              {navigation.map((item) => (
                <>
                  {item.href ? (
                    <Button key={item.name} variant='ghost' onClick={() => handleMenuClick(item.current, item.href)} className={`w-full flex h-full justify-start gap-2 text-base lg:text-[13px] items-center leading-5 ${item.current ? 'bg-zinc-100' : ''}`}>
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

            <Separator className='bg-[#F4F4F4]'/>

            {/* <section className="flex flex-col">
              <Button variant='ghost' className="text-[#797979] text-sm font-semibold tracking-[-0.35px] justify-between" onClick={() => setSellingMenus(!sellingMenus)}>
                Selling
                <ChevronDown viewBox="0 0 24 24" width='16' height='16' strokeWidth='1.5' className={`${sellingMenus ? 'rotate-180' : ''} transition duration-200`}/>
              </Button>
              {sellingMenus ? (
                <div className="mb-6">
                  {settingsMenus.map((item, index) => (
                    <>
                      <Button variant='ghost' key={index} onClick={() => {handleSubMenuClick(index);console.log(activeSubmenus)}} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${item.current ? 'bg-zinc-100' : ''}`}>
                        {item.icon}
                        {item.name}
                      </Button>
                      {activeSubmenus[index] && (
                        <div>
                          {item.submenus.map((submenu, subIndex) => (
                            <Button variant='ghost' key={subIndex} className={`flex justify-start gap-x-2 text-[13px] items-center leading-5 ml-[15px] w-[calc(100%_-_15px)] ${item.current ? 'bg-zinc-100' : ''}`}>
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

            <section className="flex flex-col px-3">
              <h3 className="text-lightgray text-sm font-semibold py-3 px-4">ระบบงานของคุณ</h3> {/* {t('menus.your_workspace')} */}
              <div className="flex flex-col gap-y-4 lg:gap-y-1">
                {workspaceApp.map((item) => (
                  <Button variant='ghost' onClick={item.onClick} className={`w-full flex justify-start gap-x-2 text-base font-normal lg:text-[13px] items-center leading-5`}>
                    <img src={item.icon} className="h-[19px] w-[19px]"/>
                    {item.name}
                  </Button>
                ))}
              </div>
            </section>

            <Separator className='bg-[#F4F4F4]'/>

            <section className="flex flex-col px-3">
              <div className="flex flex-col gap-y-4 lg:gap-y-1">
                {workspaceAppTwo.map((item) => (
                  <Button variant='ghost' onClick={item.onClick} className={`w-full flex justify-start gap-x-2 text-base font-normal lg:text-[13px] items-center leading-5`}>
                    <img src={item.icon} className="h-[19px] w-[19px]"/>
                    {item.name}
                  </Button>
                ))}
              </div>
            </section>

            <Separator className='bg-[#F4F4F4]'/>

            <section className="flex flex-col px-3">
              <div className="flex flex-col gap-y-4 lg:gap-y-1">
                {workspaceAppThree.map((item) => (
                  <Button variant='ghost' onClick={item.onClick} className={`w-full flex justify-start gap-x-2 text-base font-normal lg:text-[13px] items-center leading-5`}>
                    <img src={item.icon} className="h-[19px] w-[19px]"/>
                    {item.name}
                  </Button>
                ))}
              </div>
            </section>

            <Separator className='bg-[#F4F4F4]'/>

            {/* <section className="flex flex-col">
              <h3 className="text-lightgray text-sm font-medium p-4">{t('menus.application')}</h3>
              {yourSites.map((item) => (
                <Link to={item.href}>
                  <Button variant='ghost' onClick={() => handleMenuClick(item.current, item.href)} className={`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${item.current ? 'bg-zinc-100' : ''}`}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </section> */}
          </nav>

          {!upgraded && <SidebarUpgrade onClick={() => setIsSidebarOpen(false)}/>}
        </div>
      </div>
    </>
  )
}