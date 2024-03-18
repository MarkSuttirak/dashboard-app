import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { appList } from "./apps/appList";
import { useTranslation } from "react-i18next";

export default function Breadcrumbs(){
  const { t } = useTranslation()
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [breadcrumbList, setBreadcrumbList] = useState([]);

  const mobileLink = {
    settings: window.innerWidth > 1024 ? '/dashboard/settings/account' : '/dashboard/settings',
    teams: window.innerWidth > 1024 ? '/dashboard/teams/members' : '/dashboard/teams',
    integration: window.innerWidth > 1024 ? '/integration/manage-apps' : '/integration'
  }

  const breadcrumbMap = {
    '/integration': [
      { link: '/integration', title: t('menus.integration') },
    ],
    '/integration/manage-apps': [
      { link: mobileLink.integration, title: t('menus.integration') },
      { link: null, title: t('integration.manage_apps') },
    ],
    '/integration/upgrade-apps': [
      { link: mobileLink.integration, title: t('menus.integration') },
      { link: null, title: t('integration.upgrade_apps') },
    ],
    '/integration/appstore': [
      { link: null, title: 'App Store' },
    ],
    '/dashboard/compare-plan': [
      { link: null, title: 'Compare Plan' },
    ],
    '/dashboard/settings': [
      { link: '/dashboard/settings', title: t('menus.settings') }
    ],
    '/dashboard/settings/account': [
      { link: mobileLink.settings, title: t('menus.settings') },
      { link: null, title: t('settings.account') },
    ],
    '/dashboard/settings/billing-plans': [
      { link: mobileLink.settings, title: t('menus.settings') },
      { link: null, title: t('settings.billing_plans') },
    ],
    '/dashboard/teams': [
      { link: '/dashboard/teams', title: t('menus.teams') }
    ],
    '/dashboard/teams/members': [
      { link: mobileLink.teams, title: t('menus.teams') },
      { link: null, title: t('teams.teammembers') },
    ],
    '/dashboard/teams/my-teams': [
      { link: mobileLink.teams, title: t('menus.teams') },
      { link: null, title: t('teams.my_teams') },
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
    <>
      <div className="flex items-center gap-x-2 text-secondary md:text-primary">
        <div className="hidden lg:flex items-center gap-x-2">
          <Link to='/'>
            <h2 className='subheading'>{t('menus.dashboard')}</h2>
          </Link>

          {breadcrumbList.length > 0 ? <h2 className='subheading'>/</h2> : null}
        </div>

        {breadcrumbList.map((p, index) => (
          <div key={index} className="flex items-center gap-x-2">
            {index !== 0 && <h2 className='text-secondary lg:text-primary text-base lg:text-sm'>/</h2>}
            <Link to={p.link}>
              <h2 className='text-secondary lg:text-primary text-base lg:text-sm'>{p.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}