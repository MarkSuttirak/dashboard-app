import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import Spacer from './spacer'
import { Link, useLocation } from 'react-router-dom'
import { HomeSmile } from '@untitled-ui/icons-react/build/cjs'
import { useState, useEffect } from 'react'

const HeaderIntegration = () => {
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
      name: 'All integrations',
      href: '/integration/',
      current: activeMenu === '/integration' ? true : false,
    },
    {
      name: 'Connected',
      href: '/integration/connected',
      current: activeMenu === '/integration/connected' ? true : false,
    },
  ]

  useEffect(() => {
    handlePageTitle();
    setActiveMenu(location.pathname);
  }, [activeMenu])

  const handlePageTitle = () => {
    switch (activeMenu) {
      case '/integration':
        setCurrentPage('Integration')
        break;
      case '/integration/connected':
        setCurrentPage('Connected')
        break;
      default:
        setCurrentPage('Integration')
        break;
    }
  }

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
                      {currentPage}
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
            {currentPage}
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

export default HeaderIntegration