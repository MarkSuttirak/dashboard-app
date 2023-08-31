import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import { PlayCircleIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import Spacer from './spacer'
import { Link, useLocation } from 'react-router-dom'
import { HomeSmile } from '@untitled-ui/icons-react/build/cjs'
import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowLeft, ArrowRight } from 'untitledui-js/icons/arrow'

const HeaderApps = ({title, desc}) => {
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
                  <Link to="/integration" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Integration
                  </Link>
                </div>
              </li>
              {activeMenu !== '/integration' && (
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                      {title}
                    </a>
                  </div>
                </li>
              )}
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
            Connect
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
                        <div className='w-[24px] flex flex-col justify-center'>
                          <ArrowsRightLeftIcon stroke='#475467'/>
                        </div>
                        <div className='border rounded-lg w-[60px] h-[60px] bg-[#F3F4F6] flex justify-center items-center' />
                      </div>
                      <Spacer size={20}/>
                      <Dialog.Title as="h3" className="main-heading">
                        Connect App to Zaviago 
                      </Dialog.Title>
                      <Dialog.Description as="p" className="tab-desc px-3">
                        Connect your app to Zaviago to get more customers and increase your revenue.
                      </Dialog.Description>
                    </section>

                    <hr />

                    <section className='p-6'>
                      <Dialog.Title as="h3" className="subheading small text-left">
                        Application would like to
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
                        <button className={`primary-btn`}>
                          Install
                        </button>
                      </div>
                    </section>

                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
    </>
  )
}

export default HeaderApps