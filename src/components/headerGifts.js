import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import Spacer from './spacer'
import { Link, useLocation } from 'react-router-dom'
import { HomeSmile } from '@untitled-ui/icons-react/build/cjs'
import { useState, useEffect } from 'react'

const HeaderGifts = ({title}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('')

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  }

  const menus = [
    {
      name: 'All Gifts',
      href: '/gifts-privileges',
      current: activeMenu === '/gifts-privileges' ? true : false,
    },
    {
      name: 'Premium',
      href: '/gifts-privileges/premium',
      current: activeMenu === '/gifts-privileges/premium' ? true : false,
    },
    {
      name: 'Free',
      href: '/gifts-privileges/free',
      current: activeMenu === '/gifts-privileges/free' ? true : false,
    },
    {
      name: 'Partner',
      href: '/gifts-privileges/partner',
      current: activeMenu === '/gifts-privileges/partner' ? true : false,
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
                  <Link to="/integration" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Privileges
                  </Link>
                </div>
              </li>
              {activeMenu !== '/gifts-privileges' && (
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
          <div className='w-1/2'>
            <h2 className="main-title">
              {title}
            </h2>
            <p className='tab-desc'>Quisque et neque et lorem imperdiet malesuada. metus nec sapien cursus vehicula. Vivamus non orci nulla. Sed commodo tortor vel efficitur volutpat. Nullam vel dolor nunc. Quisque eu lacus justo.</p>
          </div>
          <div className='w-fit'>
            <div className="overflow-hidden rounded-lg bg-white px-6 py-5 border">
              <h2 className="subheading">
                Total deals value
              </h2>
              <p className="mb-3 text-3xl font-semibold tracking-tight text-gray-900">1,200,000
                <span className="ml-2 tab-desc">฿</span>
              </p>

              <p className="tab-desc-small">From total 150 partners</p>
            </div>
          </div>
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

export default HeaderGifts