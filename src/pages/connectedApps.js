import HeaderIntegration from '../components/headerIntegration'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

const apps = [
  {
    companytitle: 'Catalog',
    companydesc: 'catalogapp.io',
    abouttitle: 'Content curating app',
    aboutdesc: 'Brings all your news into one place',
    usage: 40,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    companytitle: 'Catalog',
    companydesc: 'catalogapp.io',
    abouttitle: 'Content curating app',
    aboutdesc: 'Brings all your news into one place',
    usage: 20,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    companytitle: 'Catalog',
    companydesc: 'catalogapp.io',
    abouttitle: 'Content curating app',
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
  return (
    <>
      <div className="page-section">
        <div className="dashboard-settings">
          <HeaderIntegration />

          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3>

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                          <div className="table-desc">{app.companydesc}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <div className="subheading">{app.abouttitle}</div>
                      <div className="table-desc">{app.aboutdesc}</div>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: `${app.usage}%` }}></div>
                      </div>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
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