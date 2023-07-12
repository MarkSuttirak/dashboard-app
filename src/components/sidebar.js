import React, { useState, useEffect, useContext } from "react";
import Logo from "../img/logo.svg";
import dashboardImg from "../img/dashboard.svg";
import appsImg from "../img/apps.svg";
import teamsImg from "../img/teams.svg";
import billingImg from "../img/billingImg.svg";
import settingsImg from "../img/settingsImg.svg";
import { Link, useLocation } from "react-router-dom";
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import pjob from "../img/pjob.svg";
import { Fragment } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import "../css/sidebar-dropdown.css";
import { switchContext } from '../App'
// import TeamModal from "../components/switchTeamModal";

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

  const navigation = [
    { name: 'Dashboard', icon: dashboardImg, href: '/', current: active === '/' ? true : false },
    { name: 'Apps', icon: appsImg, href: '/apps', count: 3, current: active === '/apps' ? true : false },
    { name: 'Teams', icon: teamsImg, href: '/teams', count: 4, current: active === '/teams' ? true : false },
    { name: 'Billing', icon: billingImg, href: '#', current: active === "#" ? true : false, active: active },
    { name: 'Setting', icon: settingsImg, href: '#', count: 12, current: active === "/settings" || active === "/change-domain" ? true : false, active: active },
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

  const [loadingLogo, setLoadingLogo] = useState(true);
  const timeout = setTimeout(() => {
    setLoadingLogo(false);
  }, 1800);
  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);
  const handleContentLoad = () => {
    clearTimeout(timeout);
    setLoadingLogo(false);
  };


  return (
    <>

      <div className="w-full h-full fixed z-40 bg-gray-500" id="sidebar-overlay" onClick={closeSidebar}></div>
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white fixed h-screen" id="sidebar">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 justify-between items-center px-4 columns-2">
            {!loadingLogo ? (
              <img
                className="w-auto"
                src={Logo}
                alt="Your Company"
                onLoad={handleContentLoad}
              />
            ) : (
              <div className="animate-pulse">
                <div className="bg-[#F3F3F3] w-[54px] aspect-square rounded-lg"></div>
              </div>
            )}

            {!loadingLogo ? (
              <div>
                <h1 className="sidebar-btn search-btn" onClick={openSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </h1>

                <h1 className="sidebar-btn close-sidebar-mobile" onClick={closeSidebar}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </h1>
              </div>
            ) : (
              <div className="animate-pulse">
                <div className="bg-[#F3F3F3] w-[32px] aspect-square rounded-lg"></div>
              </div>
            )}
          </div>

          <div className="flex flex-shrink-0 justify-between items-center px-4 columns-2 search-btn-sec mt-4 -mb-2">
            <h1 className="sidebar-btn search-btn-mobile" onClick={openSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            </h1>
          </div>

          {!loadingLogo ? (
              <nav className="mt-5 flex-1 space-y-1 bg-white px-4 pt-4" aria-label="Sidebar">
              <h4 className="text-sm font-semibold" style={{ fontFamily: "Inter", color: "#1F272E" }}>Business Apps</h4>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-[#0077E0] hover:bg-[#F5F5F5] active'
                      : 'text-gray-600 hover:bg-[#F5F5F5] hover:text-[#0077E0]',
                    'group flex items-center px-2 py-2 text-xs font-semibold rounded-md'
                  )}
                  onClick={() => handleMenuClick(item.href)}
                >
                  <img src={item.icon} className="mr-3 flex-shrink-0 h-6 w-6" alt="" />
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
            ) : (
              <div className="animate-pulse space-y-3">
                <div className="aspect-square rounded-md">
                <nav className="mt-5 flex-1 space-y-1 bg-white px-4 pt-4" aria-label="Sidebar">
              <h4 className="w-full h-[28px] bg-[#F3F3F3] block rounded-md"></h4>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='flex' style={{marginTop:'10px'}}>
                    <div className="w-[15%] h-[28px] bg-[#F3F3F3] block rounded-lg mr-4">

                    </div>
                    <div className="w-[80%] h-[28px] bg-[#F3F3F3] block rounded-lg"></div>
                </Link>
              ))}
            </nav>
                </div>
              </div>
            )}

          
        </div>
        <div className="flex flex-shrink-0 p-4 bg-[#F5F5F5] m-4 rounded-md">
          <a href="#" className="group block w-full flex-shrink-0">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src={pjob}
                  alt=""
                />
              </div>


              {showModal ? (
                <>
                  <div
                    className="sidebar-options-menu  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <div className="user0in0menu">
                            <div className="user-image-inside-menu">
                              <img
                                className="inline-block h-9 w-9 rounded-full"
                                src={pjob}
                                alt=""
                              />
                            </div>
                            <div className="user-name-in-side-menu">
                              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">John Persson</p>
                              <p className="user-email text-xs font-medium text-gray-500 group-hover:text-gray-700">john@zaviago.com</p>
                            </div>
                          </div>
                          <button
                            className=""
                            onClick={show_menu}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="side-menu-ul-container relative p-6 flex-auto">
                          <ul >
                            <li
                              onClick={() => setisSwitchModalOpen(true)}
                            >
                              <span className="logo-in-menu">
                                <img src={require('../img/reverse-arrows.png')} />
                              </span>
                              <span>Switch Team</span>
                            </li>
                            <li>
                              <span className="logo-in-menu"><img src={require('../img/account-in-menu.png')} /></span> <span>Account</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <hr className="hr-1"></hr>
                        </div>
                        <div className="side-menu-ul-container relative p-6 flex-auto">
                          <ul >
                            <li>
                              <span className="logo-in-menu"><img src={require('../img/ask-support.png')} /></span> <span>Help and support</span>
                            </li>
                            <li>
                              <span className="logo-in-menu"><img src={require('../img/whats-new.png')} /></span> <span>What's new</span>
                            </li>
                            <li>
                              <span className="logo-in-menu"><img src={require('../img/upgrade-to-pro.png')} /></span> <span>Upgrade to pro</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <hr className="hr-1"></hr>
                        </div>
                        <div className="side-menu-ul-container relative p-6 flex-auto">
                          <ul className="sign-out-ul">
                            <li>
                              <span className="logo-in-menu">
                                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M835.669333 554.666667h-473.173333A42.453333 42.453333 0 0 1 320 512a42.666667 42.666667 0 0 1 42.474667-42.666667h473.173333l-161.813333-161.834666a42.666667 42.666667 0 0 1 60.330666-60.330667l234.666667 234.666667a42.666667 42.666667 0 0 1 0 60.330666l-234.666667 234.666667a42.666667 42.666667 0 0 1-60.330666-60.330667L835.669333 554.666667zM554.666667 42.666667a42.666667 42.666667 0 1 1 0 85.333333H149.525333C137.578667 128 128 137.578667 128 149.482667v725.034666C128 886.4 137.6 896 149.525333 896H554.666667a42.666667 42.666667 0 1 1 0 85.333333H149.525333A106.816 106.816 0 0 1 42.666667 874.517333V149.482667A106.773333 106.773333 0 0 1 149.525333 42.666667H554.666667z" fill="currentColor" /></svg>
                              </span>
                              <span>Sign Out</span><br></br>

                            </li>
                          </ul>
                          <ul className="app-version">
                            <li> <span>v.1.4.88</span></li>
                          </ul>
                        </div>
                        {/*footer*/}

                        <button
                          className=""
                          type="button"
                          onClick={() => setShowModal(false)}
                        >

                        </button>

                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
              <div className="ml-3">
                <button
                  className=""
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">John Persson</p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">john@zaviago.com</p>
                </button>

              </div>
            </div>
          </a>
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