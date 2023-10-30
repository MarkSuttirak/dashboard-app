import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fragment } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import "../css/sidebar-dropdown.css";
import { switchContext } from '../App'
import Digice from "./icon-menus/Digice";
import IconMock from "./icon-menus/IconMock";
import { useUser } from "../hooks/useUser";
import SidebarShortcut from "./sidebarShortcut";
import { Home, ListMinus, PlusCircle, Settings, Search, Bell, Users } from "lucide-react";
import { Button } from "./ui/button";

// import TeamModal from "../components/switchTeamModal";

const Sidebar = ({ loadingLogo, tooltip }) => {
  const [active, setActive] = useState('');
  const location = useLocation();
  const { user } = useUser();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleMenuClick = (menu) => {
    setActive(menu);
  }

  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', icon: <Home viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/', current: active === '/' ? true : false, id: 'dashboard' },
    { name: 'Notifications', icon: <Bell viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/integration', current: active === '/integration' || active === '/integration/connected' ? true : false, id: 'integration' },
    { name: 'Search', icon: <Search viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/gifts-privileges', current: active === "/gifts-privileges" || active === "/gifts-privileges/premium" || active === "/gifts-privileges/free" ? true : false, active: active, id: 'gift' },
    { name: 'Settings', icon: <Settings viewBox='0 0 30 24' width='24' color='#18181B' />, href: '/gifts-privileges', current: active === "/gifts-privileges" || active === "/gifts-privileges/premium" || active === "/gifts-privileges/free" ? true : false, active: active, id: 'gift' },
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

  const filteredSearch =
    query === ''
      ? []
      : searchResults.filter((result) => {
        return result.name.toLowerCase().includes(query.toLowerCase())
      })

  const IconSidebar = () => {
    return (
      <nav className="nav-left-side">
        <Link to='/'>
          <div className="nav-btns" id="home-btn">
            <Home color='#18181B' viewBox='0 0 24 24' width='18' height='18'/>
          </div>
        </Link>
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
                <Button className='h-10 w-10 p-[10px]' variant='secondary' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ListMinus color='#18181B' viewBox='0 0 24 24'/>
                </Button>
              </div>
            ) : (
              <div className="animate-pulse">
                <div className="bg-[#F3F3F3] w-[54px] aspect-square rounded-lg"></div>
              </div>
            )}
          </div>

          {!loadingLogo ? (
            <nav className="flex-1 bg-white px-4 pt-2" aria-label="Sidebar">
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
                  >
                    {item.icon}
                    {/* <img src={item.icon} className="mr-3 flex-shrink-0 h-6 w-6" alt=""/> */}
                    <span className="flex-1 text-zinc-950">{item.name}</span>
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
                      </>
                    ) : null}
                  </Link>
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
                      <Users className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
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