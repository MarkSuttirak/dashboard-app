import HeaderIntegration from '../components/headerIntegration'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon, TrashIcon, PlayCircleIcon, ArrowsRightLeftIcon, ExclamationTriangleIcon, PencilSquareIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon, ReceiptPercentIcon, CheckCircleIcon, FireIcon } from '@heroicons/react/24/solid';
import { ArrowUpRight, Settings01 } from '@untitled-ui/icons-react/build/cjs';
import { Link } from "react-router-dom";
import iconmock from '../img/iconmock.svg'
import Spacer from '../components/spacer';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import LoadingCheck from '../components/loadingcheck';

const stats = [
  { id: 1, name: 'Total Transactions', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Total App Users', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Total App Value', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

const apps = [
  {
    companytitle: 'Catalog',
    aboutdesc: 'Brings all your news into one place',
    usage: 40,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    companytitle: 'Catalog',
    aboutdesc: 'Brings all your news into one place',
    usage: 20,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    companytitle: 'Catalog',
    aboutdesc: 'Brings all your news into one place',
    usage: 30,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ConnectedApps = () => {
  const [openConnect, setOpenConnect] = useState(false)

  const [preparingDatabase, setPreparingDatabase] = useState(false)
  const [removingDatabase, setRemovingDatabase] = useState(false)
  const [removingApp, setRemovingApp] = useState(false)

  const [openRemovingApp, setOpenRemovingApp] = useState(false)
  const [openFinishedRemoving, setOpenFinishedRemoving] = useState(false)

  const [askAgain, setAskAgain] = useState(false)

  const removeApp = () => {
    setOpenConnect(false);
    setOpenRemovingApp(true);
    setPreparingDatabase(true);
    setRemovingDatabase(true);
    setRemovingApp(true);
    setTimeout(() => {
      setPreparingDatabase(false);
      setAskAgain(false);
    }, 1000)
    setTimeout(() => {
      setRemovingDatabase(false);
    }, 2000)
    setTimeout(() => {
      setRemovingApp(false);
    }, 4000)
    setTimeout(() => {
      finishedRemoving();
    }, 6000)
  }

  const finishedRemoving = () => {
    setOpenRemovingApp(false);
    setOpenFinishedRemoving(true);
  }

  const CardList = ({title, desc, icon, badgeTitle, isSpecial, link}) => {
    return (
      <div
        className="inte-card border flex flex-col justify-between"
      >
        <div className="flex h-full justify-between items-end inner-card">
          <div className='w-full h-full flex flex-col justify-between'>
            <div>
              <div className='flex justify-between'>
                <div className='border rounded-lg w-[60px] h-[60px] bg-[#F3F4F6] flex justify-center items-center'>
                  {/* <img src={icon} /> */}
                </div>
                <Link to={link} className='card-link flex items-center gap-x-2'>
                  Read more
                  <ArrowTopRightOnSquareIcon viewBox='0 0 24 24' width='20' strokeWidth='4'/> {/* Make it bolder */}
                </Link>
              </div>
              <Spacer size={10}/>
              <h2 className="main-heading flex gap-x-2 mt-2 items-center">
                {title}
              </h2>
              <Spacer size={5}/>
              <p className="tab-desc">{desc}</p>
            </div>
          </div>
        </div>
        <div className='border-t inner-card flex justify-end items-center'>
          <button onClick={() => setOpenConnect(true)} className={`white-outline-btn h-10`}>
            <Cog6ToothIcon viewBox="0 0 30 24" width="24" height="24"/>
            Edit
          </button>
        </div>
      </div>
    )
  }

  const appLists = [
    {
      title: 'ChatGPT',
      desc: '6 months free on the Plus plan',
      icon: iconmock,
      badgeTitle: 'Save up to $6000',
      isSpecial: true,
      link: '/'
    },
    {
      title: 'Stripe',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processing',
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false,
      link: '/singleAppPage'
    },
    {
      title: 'Line CRM',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processingWaived fees on tens of thousands',
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false,
      link: '/singleAppPage'
    },
    {
      title: 'Instagram Store',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processing',
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false,
      link: '/singleAppPage'
    },
  ]

  return (
    <>
      <div className="page-section">
        <div className="dashboard-settings">
          <HeaderIntegration title="Connected Apps"/>

          <div>
            <h3 className="main-heading">Last 30 days</h3>

            <dl className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-lg bg-white border border-[#F2F2F2] px-6 py-6"
                >
                  <dt>
                    <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
                  </dt>
                  <dd className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                    <p
                      className={classNames(
                        item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                        'ml-2 flex items-baseline text-sm font-semibold'
                      )}
                    >
                      {item.changeType === 'increase' ? (
                        <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                      ) : (
                        <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                      )}

                      <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                      {item.change}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Spacer size={30}/>
          <div>
            <h3 className="main-heading">Most used apps</h3>
            <dl className="mt-5 grid gap-5 cards-sec-inte">
              {appLists.map((app, index) => 
                <CardList title={app.title} desc={app.desc} isConnected={app.isConnected} icon={app.icon} badgeTitle={app.badgeTitle} link={app.link}/>
              )}
            </dl>
          </div>

          <div className="mt-8 flex flex-col">
            <h3 className="main-heading">All active apps</h3>
            <table className="table-overview mt-5">
              <thead className="table-head">
                <tr>
                  <th scope="col" className="table-head-text first-col">
                    App
                  </th>
                  <th scope="col" className="table-head-text">
                    Status
                  </th>
                  <th scope="col" className="table-head-text">
                    About
                  </th>
                  <th scope="col" className="table-head-text">
                    Usage
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {apps.map((app) => (
                  <tr key={app.companytitle}>
                    <td className="whitespace-nowrap py-4 pr-3 text-sm pl-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded-md" src={app.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="subheading">{app.companytitle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <div className="table-desc">{app.aboutdesc}</div>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: `${app.usage}%` }}></div>
                      </div>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button onClick={() => setOpenConnect(true)} className={`white-outline-btn h-10`}>
                        <Cog6ToothIcon viewBox="0 0 30 24" width="24" height="24"/>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav
                className="flex items-center justify-between py-4"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">{apps.length}</span> of <span className="font-medium">{apps.length}</span> results
                  </p>
                </div>
                <div className="flex flex-1 justify-end gap-x-3">
                  <a
                    href="#"
                    className="white-outline-btn"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="white-outline-btn"
                  >
                    Next
                  </a>
                </div>
              </nav>
          </div>
        </div>
      </div>

      <Transition.Root show={openConnect} as={Fragment}>
          <Dialog as="div" className="relative z-[1001]" onClose={() => {
            if (askAgain){
              setAskAgain(false);
            }
            setOpenConnect(false)
          }}>
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
                  {askAgain ? (
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all w-full max-w-[400px] flex flex-col">
                    <section className='p-6 pt-8'>
                      <div className='flex justify-center'>
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                      </div>
                      <Spacer size={20}/>
                      <Dialog.Title as="h3" className="main-heading">
                        Are you sure to remove your app?
                      </Dialog.Title>
                      <Dialog.Description as="p" className="tab-desc px-3">
                        Removing your app will delete all your data and cannot be recovered.
                      </Dialog.Description>
                    </section>

                    <section className='p-6 flex justify-end'>
                      <div className='flex gap-x-2'>
                        <button className={`white-outline-btn`} onClick={() => setAskAgain(false)}>
                          Cancel
                        </button>
                        <button className={`primary-btn error`} onClick={removeApp}>
                          Remove app
                        </button>
                      </div>
                    </section>

                  </Dialog.Panel>
                  ) : (
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
                        Edit integration
                      </Dialog.Title>
                      <Dialog.Description as="p" className="tab-desc px-3">
                        Connect your app to Zaviago to get more customers and increase your revenue.
                      </Dialog.Description>
                    </section>

                    <hr />

                    <section className='p-6 text-left'>
                      <Dialog.Title as="h3" className="subheading small">
                        Information and Help Support
                      </Dialog.Title>
                      <p className='tab-desc'>service@zaviago.com</p>
                    </section>

                    <hr />

                    <section className='p-6 flex justify-end'>
                      <div className='flex gap-x-2'>
                        <button className={`white-outline-btn`} onClick={() => setOpenConnect(false)}>
                          Cancel
                        </button>
                        <button className={`primary-btn error`} onClick={() => setAskAgain(true)}>
                          Remove app
                        </button>
                      </div>
                    </section>

                  </Dialog.Panel>
                  )}
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <Transition.Root show={openRemovingApp} as={Fragment}>
        <Dialog as="div" className="relative z-[1001]" onClose={() => setOpenRemovingApp(true)}>
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
                    <TrashIcon width='24'/>
                    Removing app
                  </p>
                  {preparingDatabase ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Preparing database
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
                            Prepared database
                          </Dialog.Title>
                        </div>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                  
                  {removingDatabase ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Removing database
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
                          Removed database
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                  
                  {removingApp ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Removing app
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
                          Removed app
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

      <Transition.Root show={openFinishedRemoving} as={Fragment}>
        <Dialog as="div" className="relative z-[1001]" onClose={() => setOpenFinishedRemoving(false)}>
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
                          The app has been removed
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="tab-desc">
                            Please click 'Go back' to continue.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="primary-btn w-full justify-center"
                        onClick={() => setOpenFinishedRemoving(false)}
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

export default ConnectedApps;