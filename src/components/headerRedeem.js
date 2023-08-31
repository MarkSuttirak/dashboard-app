import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, CheckCircleIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid'
import { PlayCircleIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import Spacer from './spacer'
import { Link, useLocation } from 'react-router-dom'
import { HomeSmile } from '@untitled-ui/icons-react/build/cjs'
import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowLeft, ArrowRight } from 'untitledui-js/icons/arrow'
import LoadingCheck from './loadingcheck'

const HeaderRedeem = ({title, desc}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('')

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  }

  const [currentPage, setCurrentPage] = useState('')
  const [openInstallApp, setOpenInstallApp] = useState(false);
  const [openInstallingApp, setOpenInstallingApp] = useState(false);

  const [preparingWorkspace, setPreparingWorkspace] = useState(true);
  const [creatingDatabase, setCreatingDatabase] = useState(true);
  const [connectApp, setConnectApp] = useState(true);
  const [openFinishedInstalling, setOpenFinishedInstalling] = useState(false);

  const menus = [
    {
      name: 'All integrations',
      href: '/integration',
      current: activeMenu === '/integration' ? true : false,
    },
    {
      name: 'Connected',
      href: '/integration/connected',
      current: activeMenu === '/integration/connected' ? true : false,
    },
    {
      name: 'Apps',
      href: '/integration/apps',
      current: activeMenu === '/integration/apps' ? true : false,
    },
  ]

  const installApp = () => {
    setOpenInstallApp(false);
    setOpenInstallingApp(true);
    setPreparingWorkspace(true);
    setCreatingDatabase(true);
    setConnectApp(true);
    setTimeout(() => {
      setPreparingWorkspace(false);
    }, 1000)
    setTimeout(() => {
      setCreatingDatabase(false);
    }, 2000)
    setTimeout(() => {
      setConnectApp(false);
    }, 4000)
    setTimeout(() => {
      finishedInstalling();
    }, 6000)
  }

  const finishedInstalling = () => {
    setOpenInstallingApp(false);
    setOpenFinishedInstalling(true);
  }

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [activeMenu])

  const accesses = ['Access basic company information', 'Change issue status and assignee to others', 'Declare variables', 'Post anything you prefer']

  return (
    <>
      <div>
        <div>
          <nav className="sm:hidden" aria-label="Back">
            <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
              <ChevronLeftIcon className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              Back
            </a>
          </nav>
          <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <Link to='/' className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    <HomeSmile />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <Link className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {title}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <Spacer size={20} />
        <div className="flex items-center justify-between">
          <div>
            <h2 className="main-title">
              {title}
            </h2>
            <p className='tab-desc'>{desc}</p>
          </div>
          <button className={`primary-btn`} onClick={() => setOpenInstallApp(true)}>
            Redeem
          </button>
        </div>
      </div>

      <Spacer size={10} />

      <Transition.Root show={openInstallApp} as={Fragment}>
          <Dialog as="div" className="relative z-[1001]" onClose={() => setOpenInstallApp(false)}>
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
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all w-full max-w-[400px] flex flex-col">
                    <section className='p-6 pt-8'>
                      <div className='flex gap-x-4 justify-center'>
                        <div className='border rounded-lg w-[60px] h-[60px] bg-[#F3F4F6] flex justify-center items-center' />
                      </div>
                      <Spacer size={20}/>
                      <Dialog.Title as="h3" className="main-heading">
                        Redeem Privilege
                      </Dialog.Title>
                      <Dialog.Description as="p" className="tab-desc px-3">
                        Redeem this privilege to get access to the application.
                      </Dialog.Description>
                    </section>

                    <hr />

                    <section className='p-6'>
                      <Dialog.Title as="h3" className="subheading small text-left">
                        How to redeem:
                      </Dialog.Title>
                      <Spacer size={10} />
                      <ul className='flex flex-col gap-y-1 ml-2'>
                        {accesses.map((access) => 
                          <li className="tab-desc-small flex items-center gap-x-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-600" aria-hidden="true"/>
                            {access}
                          </li>
                        )}
                      </ul>
                    </section>

                    <hr />

                    <section className='p-6 flex justify-between'>
                      <div className='flex gap-x-2'>
                        <button className={`white-outline-btn flex gap-x-1`}>
                          <PlayCircleIcon width='24'/>
                          How it works
                        </button>
                      </div>
                      <div className='flex gap-x-2'>
                        <button className={`white-outline-btn`} onClick={() => setOpenInstallApp(false)}>
                          Cancel
                        </button>
                        <button className={`primary-btn`} onClick={installApp}>
                          Redeem
                        </button>
                      </div>
                    </section>

                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <Transition.Root show={openInstallingApp} as={Fragment}>
        <Dialog as="div" className="relative z-[1001]" onClose={() => setOpenInstallingApp(true)}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all w-full max-w-[400px] flex flex-col gap-y-4">
                  <div class="moving-line"/>
                  <p className="tab-desc text-left font-bold mb-3 flex gap-x-2">
                    <ChatBubbleBottomCenterTextIcon width='24'/>
                    Redeeming privilege
                  </p>
                  {preparingWorkspace ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Preparing code
                          </Dialog.Title>
                        </div>
                      </div>
                      <div>
                        <p className='tab-desc'>
                          In progress
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <LoadingCheck type='primary' height='20px'/>
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Prepared code
                          </Dialog.Title>
                        </div>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                  
                  {creatingDatabase ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Adding code to your account
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='tab-desc'>In progress</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <LoadingCheck type='primary' height='20px'/>
                        <Dialog.Title as="h3" className="subheading small">
                          Added code to your account
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                  
                  {connectApp ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Redeeming item
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='tab-desc'>In progress</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <LoadingCheck type='primary' height='20px'/>
                        <Dialog.Title as="h3" className="subheading small">
                          Redeemed item
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openFinishedInstalling} as={Fragment}>
        <Dialog as="div" className="relative z-[1001]" onClose={() => setOpenFinishedInstalling(false)}>
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
                    <div>
                      <div className='flex justify-center'>
                        <LoadingCheck type='success'/>
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="main-heading">
                          The privilege has been redeemed
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="tab-desc">
                            Please click 'Go back' to start working.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="primary-btn w-full justify-center"
                        onClick={() => setOpenFinishedInstalling(false)}
                      >
                        Go back
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

export default HeaderRedeem