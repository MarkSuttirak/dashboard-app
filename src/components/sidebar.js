import React, { useState, useEffect, useContext, useRef } from "react";
import Logo from "../img/logo-zaviago.svg";
import mock1 from "../img/mock1.svg";
import mock2 from "../img/mock2.svg";
import mock3 from "../img/mock3.svg";
import switchuser from "../img/switchuser.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CalendarIcon, ChartBarIcon, Cog6ToothIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import pjob from "../img/pjob.svg";
import { Fragment } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import "../css/sidebar-dropdown.css";
import { switchContext } from '../App'
import { PlusIcon } from "@heroicons/react/20/solid";
import { HomeSmile, Edit04, Menu01, LayoutAlt01, Backpack, Gift01, Inbox01, Settings01, ArrowLeft } from "@untitled-ui/icons-react/build/cjs";
import EarPhone from "./icon-menus/EarPhone";
import GaugeMin from "./icon-menus/GaugeMin";
import Digice from "./icon-menus/Digice";
import IconMock from "./icon-menus/IconMock";
import AppsIcon from "./icon-menus/AppsIcon";
import BoxOpen from "./icon-menus/BoxOpen";
import HomeIconTwo from "./icon-menus/HomeIcon";

// import TeamModal from "../components/switchTeamModal";

const Sidebar = ({ loadingLogo, tooltip }) => {
  const location = useLocation();
  const [active, setActive] = useState('');

  const openSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    sidebar.style.animation = "sidebarActive 400ms forwards";
    sidebarOverlay.style.animation = "sidebarOverlayActive 400ms forwards";
  }

  const tooltipRef = useRef(null);
  const containerRef = useRef(null);

  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    sidebar.style.animation = "sidebarInactive 300ms forwards";
    sidebarOverlay.style.animation = "sidebarOverlayInactive 300ms forwards";
  }

  const handleMenuClick = (menu) => {
    setActive(menu);
  }

  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', icon: <HomeSmile viewBox='0 0 30 24' width='24' className='menu-icon'/>, href: '/', current: active === '/' ? true : false, id: 'dashboard' },
    { name: 'Integration', icon: <Backpack viewBox='0 0 30 24' width='24'className='menu-icon'/>, href: '/integration', count: [10, 'orange', 'have-dot'], current: active === '/integration' || active === '/integration/connected' ? true : false, id: 'integration' },
    { name: 'Gift & Privilege', icon: <Gift01 viewBox='0 0 30 24' width='24'className='menu-icon'/>, href: '/gifts-privileges', count: [5, 'blue', 'have-dot'], current: active === "/gifts-privileges" || active === "/gifts-privileges/premium" || active === "/gifts-privileges/free" ? true : false, active: active, id: 'gift' },
  ]

  const leftNavigation = [
    { name: 'Settings', icon: <Cog6ToothIcon width='24'/>, href: '/settings/profile', current: active === '/settings' || active === '/settings/profile' || active === '/settings/team' || active === '/settings/plan' || active === '/settings/billing' ? true : false, id: 'settings' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    setActive(location.pathname);
  })

  const searchResults = [
    { name: 'Apps', url: '/apps' },
    { name: 'Change Domain', url: '/change-domain' },
    { name: 'Layer', url: '/appsdetail' }
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [query, setQuery] = useState('')

  const [open, setOpen] = useState(false)

  const [showModal, setShowModal] = React.useState(false);
  const filteredSearch =
    query === ''
      ? []
      : searchResults.filter((result) => {
        return result.name.toLowerCase().includes(query.toLowerCase())
      })

  const openSearch = () => {
    setOpen(true);
  }

  const [isSwitchModalOpen, setisSwitchModalOpen] = React.useContext(switchContext);

  function show_menu() {
    setShowModal(false);
  }

  // const [loadingLogo, setLoadingLogo] = useState(true);
  // const timeout = setTimeout(() => {
  //   setLoadingLogo(false);
  // }, 1800);
  // useEffect(() => {
  //   return () => clearTimeout(timeout);
  // }, []);
  // const handleContentLoad = () => {
  //   clearTimeout(timeout);
  //   setLoadingLogo(false);
  // };

  const IconSidebar = () => {
    return (
      <nav className="nav-left-side">
        <div className="logo">
          <img src={Logo} />
        </div>
        <Link to='/'>
          <div className="nav-btns" id="home-btn">
            <HomeSmile className='menu-icon'/>
          </div>
        </Link>

        <hr className="vertical-bar d-none d-sm-block" />
        <div className="nav-btns">
          <Backpack className='menu-icon'/>
        </div>
        <div className="nav-btns">
          <Gift01 className='menu-icon'/>
        </div>
        <div id="additional-apps">
          <div className="nav-btns add-ons" style={{background:"#F2F2FD"}}>
            <IconMock />
          </div>
          <div className="nav-btns add-ons" style={{background:"#FFEAE1"}}>
            <Digice />
          </div>
        </div>
        <div id="lower-apps">
          {leftNavigation.map((item) => (
            <Link key={item.id}
            to={item.href}
            className={classNames(
              item.current
                ? 'nav-btns active'
                : 'nav-btns'
            )}>
              {item.icon}
            </Link>
            // <Link to='/settings/profile' className="nav-btns">
            //   <Settings01/>
            // </Link>
          ))}
          {/* <Link to='/settings/profile' className="nav-btns">
            <Cog6ToothIcon width='24'/>
          </Link> */}
          <hr style={{borderColor:"#EBEEF0"}}/>
          <div className="nav-btns">
            <img
              src={pjob}
              alt=""
            />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
    <IconSidebar />
      <div className="flex flex-1 flex-col border-r border-gray-200 bg-white" id="sidebar">
        <div className="flex flex-1 flex-col pt-[18px] pb-5">
          <div className="flex flex-shrink-0 items-center px-4">
            {!loadingLogo ? (
              <button onClick={() => navigate(-1)} className="flex text-[13px] font-semibold items-center">
                <ArrowLeft viewBox='0 0 30 24' />
                Back
              </button>
            ) : (
              <div className="animate-pulse">
                <div className="bg-[#F3F3F3] w-[54px] aspect-square rounded-lg"></div>
              </div>
            )}
          </div>

          {!loadingLogo ? (
            <nav className="flex-1 bg-white px-4 pt-4" aria-label="Sidebar">
              {navigation.map((item) => (
                <>
                  <Link
                    key={item.id}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'sidebar-menu active'
                        : 'sidebar-menu'
                    )}
                    onClick={() => handleMenuClick(item.href)}
                    // onMouseEnter={() => {
                    //   const tooltip = document.getElementById(`tooltip-${item.id}`);
                    //   tooltip.classList.remove('opacity-0');
                    //   tooltip.classList.remove('invisible');
                    // }}
                    // onMouseLeave={() => {
                    //   const tooltip = document.getElementById(`tooltip-${item.id}`);
                    //   tooltip.classList.add('opacity-0');
                    //   tooltip.classList.add('invisible');
                    // }}
                  >
                    {item.icon}
                    {/* <img src={item.icon} className="mr-3 flex-shrink-0 h-6 w-6" alt=""/> */}
                    <span className="flex-1 item-name">{item.name}</span>
                    {item.count ? (
                      <>
                      {/* Desktop Version */}

                      <div className="menu-badge">
                        <span className={`badge-sidebar ${item.count[1] === 'orange' ? 'orange' : item.count[1] === 'blue' ? 'blue' : item.count[1] === 'gray' ? 'gray' : ''}`}>
                          {item.count[2] === 'have-dot' && (
                            <svg className="badge-circle" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx={4} cy={4} r={3} />
                            </svg>
                          )}
                          {item.count[0]}
                        </span>
                      </div>

                      {/* Responsive Version */}
                      {/* <span
                        className={classNames(
                          item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                          'flex items-center justify-center w-[20px] h-[20px] text-xs font-medium rounded-full absolute left-[40px] translate-y-[12px] item-name-res'
                        )}
                      >
                        {item.count[0]}
                      </span> */}
                      </>
                    ) : null}
                  </Link>
                  <div id={`tooltip-${item.id}`} role="tooltip" className="tooltip-menu absolute invisible opacity-0 z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg left-[60px] text-xs translate-y-[-120%] whitespace-pre shadow-sm dark:bg-gray-700">
                    {item.name}
                  </div>
                </>
              ))}
            </nav>
          ) : (
            <div className="animate-pulse space-y-3">
              <div className="aspect-square rounded-md">
                <nav className="mt-5 flex-1 space-y-1 bg-white px-4 pt-4" aria-label="Sidebar">
                  <h4 className="w-full h-[28px] bg-[#F3F3F3] block rounded-md"></h4>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className='flex' style={{ marginTop: '10px' }}>
                      <div className="w-[15%] h-[28px] bg-[#F3F3F3] block rounded-lg mr-4">

                      </div>
                      <div className="w-[80%] h-[28px] bg-[#F3F3F3] block rounded-lg"></div>
                    </Link>
                  ))}

                  {/* <div className="h-[16px] w-[20%] bg-[#F3F3F3] rounded-md block"></div>
                  {teamMembers.map((member) => (
                    <div className="flex">
                      <div className="w-[15%] h-[28px] bg-[#F3F3F3] block rounded-lg mr-4 item-name">
                      </div>
                      <div className="w-[80%] h-[28px] bg-[#F3F3F3] block rounded-lg"></div>
                    </div>
                  ))} */}
                </nav>
              </div>
            </div>
          )}

        </div>
      </div>



      <header className="header-mobile">
        <h1 onClick={openSidebar} style={{ cursor: "pointer" }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        </h1>
      </header>


      <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
        <Dialog as="div" className="relative z-[99]" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox onChange={(result) => (window.location = result.url)}>
                  <Combobox.Input
                    className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />

                  {filteredSearch.length > 0 && (
                    <Combobox.Options
                      static
                      className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                    >
                      {filteredSearch.map((result) => (
                        <Combobox.Option
                          key={result.id}
                          value={result}
                          className={({ active }) =>
                            classNames(
                              'cursor-default select-none rounded-md px-4 py-2',
                              active && 'bg-[#0099FF] text-white'
                            )
                          }
                        >
                          {result.name}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredSearch.length === 0 && (
                    <div className="py-14 px-4 text-center sm:px-14">
                      <UsersIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                      <p className="mt-4 text-sm text-gray-900">No search found using that search term.</p>
                    </div>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Sidebar;