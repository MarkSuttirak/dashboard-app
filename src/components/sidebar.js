import React from "react";
import Logo from "../img/logo.svg";
import dashboardImg from "../img/dashboard.svg";
import appsImg from "../img/apps.svg";
import teamsImg from "../img/teams.svg";
import { Link } from "react-router-dom";
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import pjob from "../img/pjob.svg";

const Sidebar = () => {
    const navigation = [
        { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
        { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
        { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
        { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
        { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
        { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
      ]
      
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white fixed sidebar h-screen">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 justify-between items-center px-4">
            <img
              className="w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h1>Test</h1>
          </div>
          <nav className="mt-5 flex-1 space-y-1 bg-white px-4" aria-label="Sidebar">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                <span className="flex-1">{item.name}</span>
                {item.count ? (
                  <span
                    className={classNames(
                      item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                      'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                    )}
                  >
                    {item.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
          <a href="#" className="group block w-full flex-shrink-0">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src={pjob}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">John Persson</p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">john@zaviago.com</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
}

export default Sidebar;