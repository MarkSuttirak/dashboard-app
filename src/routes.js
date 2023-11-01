import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/DashboardLayout';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// pages
import withAuthenticationRequired from './utils/withAuthenticationRequired';
import Welcome from './pages/register/welcome';
import ChangeDomain from './pages/changeDomain';
import Callback from './callback';
import Partial, { PhoneVerification } from './pages/register/partial';
import OtherInfo from './pages/register/otherInfo';
import InstanceConfig from './pages/register/instanceConfig';
import Dashboard from './pages/dashboard';
import Settings from './pages/settings/settings';
import Teams from './pages/teams/teams';
import NotFoundPage from './pages/404';

// ----------------------------------------------------------------------

export default function Router() {
  if (window.location.pathname === '/dashboard/app') {
    document.body.style.background = "linear-gradient(229deg, rgba(246, 235, 255, 0.50) -23.12%, rgba(226, 198, 255, 0.16) 11.08%, rgba(255, 98, 202, 0.00) 32.6%, rgba(255, 255, 255, 0.05) 81.71%)"
  } else {   
    document.body.style.background = "white"
  }

  return useRoutes([
    {
      path: '/dashboard',
      element: withAuthenticationRequired(DashboardLayout),
      children: [
        { path: 'instance-configuration', element: <InstanceConfig /> },
        { path: 'app', element: <Dashboard /> },
        {
          path: 'products',
          children: [
            { path: '/dashboard/products', element: <ChangeDomain /> },
            { path: 'add', element: <></> },
            { path: 'edit/:id', element: <></> },
          ],
        },
        { path: 'settings/:id', element: <Settings /> },
        { path: 'teams/:id', element: <Teams /> },
      ],
    },
    {
      path: '/',
      // element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Welcome /> },
        { path: 'callback', element: <Callback /> },
        {
          path: 'partial/:key',
          element: <Partial />,
          children: [
            { path: 'phone-verification', element: <PhoneVerification /> },
            { path: 'other-info', element: <OtherInfo /> },
          ]
        },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    { path: '/404', element: <NotFoundPage />}
  ]);
}