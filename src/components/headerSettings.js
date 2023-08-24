import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import Spacer from './spacer'
import { Link } from 'react-router-dom'
import { HomeSmile } from '@untitled-ui/icons-react/build/cjs'

const HeaderSettings = ({active}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const menus = [
    {
      name: 'My Account',
      href: '/profile',
      current: 0,
    },
    {
      name: 'Team',
      href: '',
      current: 1,
    },
    {
      name: 'Plan',
      href: '',
      current: 2,
    },
    {
      name: 'Billing',
      href: '',
      current: 3,
    },
    {
      name: 'Notifications',
      href: '',
      current: 4,
    }
  ]

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
                  <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    <HomeSmile />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Engineering
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Back End Developer
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Back End Developer
          </h2>
          <button className="primary-btn">
            Save
          </button>
        </div>
      </div>

      <Spacer size={10} />

      <nav className="tabs" aria-label="Tabs">
        {menus.map((tab) => (
          <Link
            key={tab.name}
            to={tab.href}
            className={`tab-menu${tab.current == active ? ' active' : ''}`}
          >
            {tab.name}
          </Link>
        ))}
      </nav>

      <Spacer size={40} />
    </>
  )
}

export default HeaderSettings