import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { appList } from "./apps/appList";

export default function Breadcrumbs(){
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [breadcrumbList, setBreadcrumbList] = useState([]);

  const breadcrumbMap = {
    '/integration/manage-apps': [
      { link: '/integration/manage-apps', title: 'Integration' },
      { link: null, title: 'Manage Apps' },
    ],
    '/integration/upgrade-apps': [
      { link: '/integration/manage-apps', title: 'Integration' },
      { link: null, title: 'Upgrade Apps' },
    ],
    '/integration/appstore': [
      { link: null, title: 'App Store' },
    ],
    '/dashboard/compare-plan': [
      { link: null, title: 'Compare Plan' },
    ],
    '/dashboard/settings/account': [
      { link: '/dashboard/settings/account', title: 'Settings' },
      { link: null, title: 'Account' },
    ],
    '/dashboard/settings/billing-plans': [
      { link: '/dashboard/settings/account', title: 'Settings' },
      { link: null, title: 'Billing & Plans' },
    ],
    '/dashboard/settings/notifications': [
      { link: '/dashboard/settings/account', title: 'Settings' },
      { link: null, title: 'Notifications' },
    ],
    ...appList.reduce((acc, app) => {
      acc[`/integration/appstore/${app.id}`] = [
        { link: '/integration/appstore', title: 'App Store' },
        { link: null, title: 'App Detail: ' + app.title },
      ];
      return acc;
    }, {}),
  };

  let currentPath = breadcrumbMap[currentPage]

  useEffect(() => {
    document.title = currentPath ? currentPath[currentPath.length - 1].title + ' - Zaviago WorkSpace' : 'Zaviago WorkSpace'
    setBreadcrumbList(currentPath || []);
  }, [currentPage]);

  return (
    <div className="flex items-center gap-x-2">
      <Link to='/'>
        <h2 className='subheading'>WorkSpace</h2>
      </Link>
      {breadcrumbList.map(p => (
        <>
          <h2 className='subheading font-medium'>/</h2>
          <Link to={p.link}>
            <h2 className='subheading font-medium'>{p.title}</h2>
          </Link>
        </>
      ))}
    </div>
  )
}