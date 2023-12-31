import pjob from "../img/pjob.svg";
import { Link } from "react-router-dom";
import { PlusCircleIcon, HomeIcon, ChatBubbleOvalLeftEllipsisIcon, Bars3Icon, CommandLineIcon, CheckIcon, BellIcon, ClipboardDocumentListIcon, LinkIcon, TagIcon, ReceiptPercentIcon, InboxStackIcon, VideoCameraIcon, ComputerDesktopIcon, SquaresPlusIcon, BoltIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import iconsGroup from '../img/icons-group.svg'
import POSLogo from '../img/POSLogo.svg'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const [openMembership, setOpenMembership] = useState(false);
  const [openApps, setOpenApps] = useState(false)

  const [tabsFreeTrial, setTabsFreeTrial] = useState(0)

  const handleFreeTrial = (index) => {
    setTabsFreeTrial(index)
  }
  const footerMenusLeft = [
    {
      title: "Dashboard",
      link: "/",
      icon: <HomeIcon width='20'/>
    },
    {
      title: "Site & App",
      link: "/site-and-app",
      icon: <CommandLineIcon width='20'/>
    },
  ]

  const footerMenusRight = [
    {
      title: 'Manage',
      link: '/manage',
      icon: <Bars3Icon width='20'/>
    }
  ]

  const menusOnAddBtnOne = [
    {
      title: 'Add a coupon',
      link: '/add-coupon',
      icon: <ReceiptPercentIcon width='24'/>
    },
    {
      title: 'Send a push notification',
      link: '',
      icon: <BellIcon width='24'/>
    },
    {
      title: 'Create an email campaign',
      link: '',
      icon: <InboxStackIcon width='24'/>
    },
    {
      title: 'Make a video',
      link: '',
      icon: <VideoCameraIcon width='24'/>
    },
    {
      title: 'Create a social post',
      link: '',
      icon: <ComputerDesktopIcon width='24'/>
    },
  ]
  return (
    <>
    <header className="mobile-menu header-mobile">
      <div className="w-1/2 flex gap-x-4 items-center">
        <img
          src={pjob}
          alt=""
        />
        <h2 className="subheading">My site</h2>
      </div>
      <div className="flex gap-x-4 w-1/2 justify-end">
        <BoltIcon width='24' onClick={() => setOpenMembership(true)}/>
        <BellIcon width='24'/>
      </div>
    </header>
    <footer className="mobile-menu footer-mobile">
      <ul className="flex justify-between w-full">
        {footerMenusLeft.map((menu, index) => (
          <li key={index} className="block text-center" style={{width:`20%`}}>
            <Link to={menu.link}>
              <span className="inline-block m-auto">{menu.icon}</span>
              <p className="footer-menu-text">{menu.title}</p>
            </Link>
          </li>
        ))}
        <li key={2} className="block text-center" style={{width:`20%`}}>
          <button onClick={() => setOpen(true)}>
            <span className="inline-block m-auto"><PlusCircleIcon width='20'/></span>
            <p className="footer-menu-text">Add</p>
          </button>
        </li>
        <li key={3} className="block text-center" style={{width:`20%`}}>
          <button onClick={() => setOpenApps(true)}>
            <span className="inline-block m-auto"><SquaresPlusIcon width='20'/></span>
            <p className="footer-menu-text">Apps</p>
          </button>
        </li>
        {footerMenusRight.map((menu, index) => (
          <li key={index} className="block text-center" style={{width:`20%`}}>
            <Link to={menu.link}>
              <span className="inline-block m-auto">{menu.icon}</span>
              <p className="footer-menu-text">{menu.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </footer>

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="min-h-full flex items-end max-h-1/2 w-full p-4 text-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all w-full">
                <div>
                  <div className="text-left">
                    <Dialog.Title as="h3" className="subheading">
                      My site
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="tab-desc">
                        Quick Actions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 max-h-[300px] overflow-y-auto flex flex-col gap-y-4">
                  {menusOnAddBtnOne.map((menu, index) => (
                    <button key={index} className="flex items-center gap-x-3">
                      <div className="flex gap-x-4 items-center text-left">
                        {menu.icon}
                        <h2 className="subheading">{menu.title}</h2>
                      </div>
                    </button>
                  ))}

                  <h3 className="tab-desc">Marketing Tools</h3>

                  {menusOnAddBtnOne.map((menu, index) => (
                    <button key={index} className="flex items-center gap-x-3">
                      <div className="flex gap-x-4 items-center text-left">
                        {menu.icon}
                        <h2 className="subheading">{menu.title}</h2>
                      </div>
                    </button>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    <Transition.Root show={openApps} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenApps}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="min-h-full flex items-end max-h-1/2 w-full p-4 text-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all w-full">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col justify-center gap-y-2 text-center">
                    <img src={POSLogo} className="m-auto" width='50%'/>
                    <p className="tab-desc-small">App Test One</p>
                  </div>
                  <div className="flex flex-col justify-center gap-y-2 text-center">
                    <img src={POSLogo} className="m-auto" width='50%'/>
                    <p className="tab-desc-small">App Test Two</p>
                  </div>
                  <div className="flex flex-col justify-center gap-y-2 text-center">
                    <img src={POSLogo} className="m-auto" width='50%'/>
                    <p className="tab-desc-small">App Test Three</p>
                  </div>
                  <div className="flex flex-col justify-center gap-y-2 text-center">
                    <img src={POSLogo} className="m-auto" width='50%'/>
                    <p className="tab-desc-small">App Test Four</p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    <Transition.Root show={openMembership} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenMembership}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div className="text-center">
                    <Dialog.Title as="h3" className="main-heading flex justify-center items-center gap-x-2">
                      <BoltIcon color='#0788F5' width='24'/>
                      {tabsFreeTrial === 0 ? 'Zaviago Personal' : 'Zaviago Family'}
                    </Dialog.Title>
                    <div className="mt-3 px-3 py-6 pb-8 bg-[#EDEDED] rounded-lg">
                      {tabsFreeTrial === 0 ? (
                        <div className="mt-2">
                          <h2 className="subheading">1TB Cloud Storage</h2>
                          <p className="tab-desc-small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                            <img src={iconsGroup} alt="" className="mt-5 mx-auto" />
                          </p>
                        </div>
                      ) : (
                        <div className="mt-2">
                          <h2 className="subheading">Up to 6TB Cloud Storage</h2>
                          <p className="tab-desc-small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                            <img src={iconsGroup} alt="" className="mt-5 mx-auto" />
                          </p>
                        </div>
                      )}
                    </div>
                    <img src={iconsGroup} alt="" className="mt-5 mx-auto w-[25%]" />
                    <p className="tab-desc-small">Unlock all premium features across devices</p>
                  </div>
                  <nav className='flex flex-col relative border border-[#E3E3E3] rounded-lg mt-5' aria-label="Tabs">
                    <div className="flex">
                      <button
                        key='Free'
                        className={`tab-desc w-full p-4 text-center outline-none ${tabsFreeTrial !== 0 ? 'bg-[#EDEDED]' : ''}`}
                        onClick={() => handleFreeTrial(0)}
                      >
                        <p className="tab-desc bold">THB 209.99/mo</p>
                        <p className="tab-desc-small">1 Person</p>
                      </button>
                      <button
                        key='Pro'
                        className={`tab-desc w-full p-4 text-center outline-none ${tabsFreeTrial !== 1 ? 'bg-[#EDEDED]' : ''}`}
                        onClick={() => handleFreeTrial(1)}
                      >
                        <p className="tab-desc bold">THB 289.99/mo</p>
                        <p className="tab-desc-small">2-6 People</p>
                      </button>
                    </div>
                    <div className={`h-[2px] w-1/2 bg-[#0788F5] absolute bottom-0 ${tabsFreeTrial === 0 ? 'left-0' : 'right-0'}`} />
                  </nav>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="primary-btn w-full justify-center"
                      onClick={() => setOpenMembership(false)}
                    >
                      Start 30-day free trial
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default MobileMenu;