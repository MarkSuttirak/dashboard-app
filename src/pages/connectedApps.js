import HeaderIntegration from '../components/headerIntegration'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon, ReceiptPercentIcon, CheckCircleIcon, FireIcon } from '@heroicons/react/24/solid';
import { ArrowUpRight } from '@untitled-ui/icons-react/build/cjs';
import { Link } from "react-router-dom";
import iconmock from '../img/iconmock.svg'
import Spacer from '../components/spacer';

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
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
  const CardList = ({title, desc, isConnected, icon, badgeTitle, isSpecial, link}) => {
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
              <Spacer size={20}/>
            </div>
            <div className='flex flex-col gap-y-1'>
              <p className="tab-desc-small flex items-center gap-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" aria-hidden="true"/>
                Special deals for UOB customers
              </p>
              <p className="tab-desc-small flex items-center gap-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" aria-hidden="true"/>
                For Zaviago pro users only
              </p>
              <Spacer size={5}/>
              <span className="inline-flex items-start rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}> {/* Make it align middle */}
                <ReceiptPercentIcon width='16'/>
                {badgeTitle}
              </span>
            </div>
          </div>
        </div>
        <div className='border-t inner-card flex justify-between items-center'>
          <div className='flex gap-x-2'>
            <span className="inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 ring-1 ring-inset ring-red-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}> {/* Make it align middle */}
              <FireIcon width='16'/>
              Popular
            </span>
            <span className="inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}> {/* Make it align middle */}
              <ReceiptPercentIcon width='16'/>
              Premium
            </span>
          </div>
          <Link to='' className={`${isConnected ? 'primary-btn disabled' : 'primary-btn'} h-10`}>
            <ArrowUpRight viewBox="0 0 30 20" width="24" height="24"/>
            {isConnected ? "Connected" : "Connect"}
          </Link>
        </div>
      </div>
    )
  }

  const appLists = [
    {
      title: 'ChatGPT',
      desc: '6 months free on the Plus plan',
      isConnected: false,
      icon: iconmock,
      badgeTitle: 'Save up to $6000',
      isSpecial: true,
      link: '/'
    },
    {
      title: 'Stripe',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processing',
      isConnected: true,
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false,
      link: '/singleAppPage'
    },
    {
      title: 'Line CRM',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processingWaived fees on tens of thousands',
      isConnected: true,
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false,
      link: '/singleAppPage'
    },
    {
      title: 'Instagram Store',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processing',
      isConnected: true,
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
            <table className="table-overview">
              <thead className="table-head">
                <tr>
                  <th scope="col" className="table-head-text first-col">
                    Company
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
                          <img className="h-10 w-10 rounded-full" src={app.image} alt="" />
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
                      <a href="#" className="text-[#0788F5]">
                        Edit
                      </a>
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
    </>
  )
}

export default ConnectedApps;