import React, { useState, useEffect } from "react";
import Logo from "../img/logo.svg";
import dashboardImg from "../img/dashboard.svg";
import appsImg from "../img/apps.svg";
import teamsImg from "../img/teams.svg";
import { Link, useLocation } from "react-router-dom";
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import pjob from "../img/pjob.svg";

const Sidebar = () => {
    const location = useLocation();
    const [active, setActive] = useState('');

    const openSidebar = () => {
      const sidebar = document.getElementById('sidebar');
      const sidebarOverlay = document.getElementById('sidebar-overlay');
      sidebar.style.animation = "sidebarActive 400ms forwards";
      sidebarOverlay.style.animation = "sidebarOverlayActive 400ms forwards";
    }

    const closeSidebar = () => {
      const sidebar = document.getElementById('sidebar');
      const sidebarOverlay = document.getElementById('sidebar-overlay');
      sidebar.style.animation = "sidebarInactive 300ms forwards";
      sidebarOverlay.style.animation = "sidebarOverlayInactive 300ms forwards";
    }

    const handleMenuClick = (menu) => {
      setActive(menu);
    }

    console.log(location);

    const navigation = [
      { name: 'Dashboard', icon: HomeIcon, href: '/', current: active === '/' ? true : false},
      { name: 'Apps', icon: UsersIcon, href: '/apps', count: 3, current: active === '/apps' ? true : false},
      { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: active === '#' ? true : false},
      { name: 'Calendar', icon: CalendarIcon, href: '#', current: active === "#" ? true : false, active: active },
      { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: active === "#" ? true : false, active: active },
      { name: 'Reports', icon: ChartBarIcon, href: '#', current: active === "#" ? true : false, active: active },
    ]

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

    useEffect(() => {
      setActive(location.pathname);
    })

    return (
      <>
        <div className="w-full h-full fixed z-40" id="sidebar-overlay" style={{backgroundColor:"#000000"}} onClick={closeSidebar}></div>
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white fixed h-screen" id="sidebar">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 justify-between items-center px-4">
              <img
                className="w-auto"
                src={Logo}
                alt="Your Company"
              />
              <h1 className="sidebar-btn close-sidebar-mobile" onClick={closeSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </h1>
            </div>
            <nav className="mt-5 flex-1 space-y-1 bg-white px-4 pt-4" aria-label="Sidebar">

              <h4 className="text-sm font-semibold" style={{fontFamily:"Inter",color:"#1F272E"}}>Business Apps</h4>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900 hover:bg-gray-100 active'
                      : 'text-gray-600 hover:bg-gray-50',
                    'group flex items-center px-2 py-2 text-xs font-medium rounded-md'
                  )}
                  onClick={() => handleMenuClick(item.href)}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  <span className="flex-1">{item.name}</span>
                  {item.count ? (
                    <span
                      className={classNames(
                        item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                        'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                      )}
                    >
                      {item.count}
                    </span>
                  ) : null}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <a href="#" className="group block w-full flex-shrink-0">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src={pjob}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">John Persson</p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">john@zaviago.com</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        <header className="header-mobile">
          <h1 onClick={openSidebar} style={{cursor:"pointer"}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </h1>
        </header>
      </>
    )
}

export default Sidebar;