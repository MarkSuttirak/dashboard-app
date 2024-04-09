import { Navigate, useLocation, useNavigate, useRoutes } from 'react-router-dom';
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
import Dashboard from './pages/dashboard/dashboard';
import Settings from './pages/settings/settings';
import NotFoundPage from './pages/404';
import AppStore from './pages/integration/appstore';
import SingleApp from './pages/integration/singleapp';
import PaymentPage from './pages/payment/payment';
import CheckoutPage from './pages/checkout/checkoutPage';
import CheckoutReceived from './pages/checkout/checkoutReceived';
import Integration from './pages/integration/integration';
import ComparePlan from './pages/compare-plan/comparePlan';
import AppCategory from './pages/integration/appCategory';
import { useEffect } from 'react'
import Pricing from './pages/pricing';
import PricingTablePage from './pages/pricingTable';
import CheckoutPending from './pages/checkout/checkoutPending';
import ComingSoonPage from './pages/coming-soon';
import Teams from './pages/teams/teams';
import JoinTeam from './pages/teams/joinTeam';
import QuotaDetail from './pages/integration/quotaDetail';

// ----------------------------------------------------------------------

export default function Router() {
    const location = useLocation()

    const pathParts = location.pathname.split('/');
    const appCategory = pathParts[1] === 'integration' && pathParts[2] === 'app-category' && pathParts[3] !== '';

    useEffect(() => {
        if (location.pathname === '/dashboard/app' || location.pathname === '/integration/appstore' || appCategory) {
            document.body.classList.add('bg-gradient')
        } else {
            document.body.classList.remove('bg-gradient')
        }
    })

    const routes = [
        {
            path: '/coming-soon',
            element: <ComingSoonPage />
        },
        {
            path: '/dashboard',
            element: withAuthenticationRequired(DashboardLayout),
            children: [
                { path: 'instance-configuration/:site', element: <InstanceConfig /> },
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
                { path: 'settings/', element: <Settings /> },
                { path: 'settings/:id', element: <Settings /> },
                {
                    path: 'teams', children: [
                        { path: 'invite/:inviteCode', element: <JoinTeam /> },
                        { path: '/dashboard/teams', element: <Teams /> },
                        { path: ':id', element: <Teams /> }
                    ]
                },
                { path: 'compare-plan', element: <ComparePlan /> }
            ],
        },
        {
            path: '/payment/:app/:id',
            element: <PaymentPage />
        },
        {
            path: '/checkout/:app/:id',
            element: <CheckoutPage />
        },
        {
            path: '/checkout-pending/:app/:id',
            element: <CheckoutPending />
        },
        {
            path: '/checkout-received/:app/:id',
            element: <CheckoutReceived />
        },
        {
            path: '/integration',
            element: withAuthenticationRequired(DashboardLayout),
            children: [
                { path: '', element: <Integration /> },
                { path: ':id', element: <Integration /> },
                { path: 'appstore', element: <AppStore /> },
                { path: 'appstore/:id', element: <SingleApp /> },
                { path: 'app-category/:cate', element: <AppCategory /> },
                { path: 'quota-detail/:app', element: <QuotaDetail /> }
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
                { path: 'invite/:inviteCode', element: <Navigate to={`/dashboard/teams/invite/${location.pathname.split('/')[2]}`} /> },
                { path: '*', element: <NotFoundPage /> },
            ],
        },
        { path: '*', element: <NotFoundPage replace /> },
        { path: '/pricing', element: <Pricing /> },
        { path: '/pricing-table', element: <PricingTablePage /> }
    ]
    return useRoutes(routes);
}
