import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { appList } from "./apps/appList";
import { totalAppsQuota } from "src/pages/integration/appQuota";

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
    '/integration/apps-quota': [
      { link: '/integration/manage-apps', title: 'Integration' },
      { link: null, title: 'Apps Quota' },
    ],
    '/integration/appstore': [
      { link: null, title: 'App Store' },
    ],
    '/dashboard/compare-plan': [
      { link: null, title: 'Compare Plan' },
    ],
    '/dashboard/teams/team-members': [
      { link: '/dashboard/teams/team-members', title: 'Team' },
      { link: null, title: 'Team Members' },
    ],
    '/dashboard/teams/teams': [
      { link: '/dashboard/teams/team-members', title: 'Team' },
      { link: null, title: 'Teams' },
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
    ...totalAppsQuota.reduce((acc, app) => {
      acc[`/integration/quota-detail/${app.id}`] = [
        { link: '/integration/manage-apps', title: 'Integration' },
        { link: '/integration/apps-quota', title: 'Apps Quota' },
        { link: null, title: 'Quota Detail: ' + app.title },
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
        <h2 className='subheading font-medium'>Home</h2>
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