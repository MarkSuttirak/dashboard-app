import pjob from "../img/pjob.svg";
import { Link } from "react-router-dom";
import { PlusCircleIcon, HomeIcon, ChatBubbleOvalLeftEllipsisIcon, Bars3Icon, CommandLineIcon, CheckIcon, BellIcon, ClipboardDocumentListIcon, LinkIcon, TagIcon, ReceiptPercentIcon, InboxStackIcon, VideoCameraIcon, ComputerDesktopIcon, SquaresPlusIcon, GiftIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
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
      title: 'Apps',
      link: '/inbox',
      icon: <SquaresPlusIcon width='20'/>
    },
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
      <div className="w-1/3">
        <img
          src={pjob}
          alt=""
        />
      </div>
      <div className="w-1/3 text-center">
        <h2 className="subheading">My site</h2>
      </div>
      <div className="flex gap-x-2 w-1/3 justify-end">
        <GiftIcon width='24'/>
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
    </>
  )
}

export default MobileMenu;