import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import Spacer from './spacer'
import { Link, useLocation } from 'react-router-dom'
import { HomeSmile } from '@untitled-ui/icons-react/build/cjs'
import { useState, useEffect } from 'react'

const HeaderSettings = ({title}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('')

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  }

  const [currentPage, setCurrentPage] = useState('')

  const menus = [
    {
      name: 'My Account',
      href: '/settings/profile',
      current: activeMenu === '/settings/profile' ? true : false,
    },
    {
      name: 'Team',
      href: '/settings/team',
      current: activeMenu === '/settings/team' ? true : false,
    },
    {
      name: 'Plan',
      href: '/settings/plan',
      current: activeMenu === '/settings/plan' ? true : false,
    },
    {
      name: 'Billing',
      href: '/settings/billing',
      current: activeMenu === '/settings/billing' ? true : false,
    },
  ]

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [activeMenu])

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
                  <Link to="/settings" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Settings
                  </Link>
                </div>
              </li>
              {activeMenu !== '/settings' && (
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
          <h2 className="main-title">
            {title}
          </h2>
          <button className={`primary-btn${activeMenu === '/settings/team' ? ' invisible' : ''}`}>
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
            className={classNames(
              tab.current
                ? 'tab-menu active'
                : 'tab-menu'
            )}
            onClick={() => handleMenuClick(tab.href)}
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