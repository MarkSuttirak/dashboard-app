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
import Dashboard from './pages/dashboard';
import Settings from './pages/settings/settings';
import Teams from './pages/teams/teams';
import NotFoundPage from './pages/404';
import AppStore from './pages/integration/appstore';
import SingleApp from './pages/integration/singleapp';
import PaymentPage from './pages/payment/payment';
import CheckoutPage from './pages/checkout/checkoutPage';
import CheckoutReceived from './pages/checkout/checkoutReceived';
import Integration from './pages/integration/integration';
import QuotaDetail from './pages/integration/quotaDetail';
import ComparePlan from './pages/compare-plan/comparePlan';
import AppCategory from './pages/integration/appCategory';
import { useEffect } from 'react'
import Pricing from './pages/pricing';

// ----------------------------------------------------------------------

export default function Router() {
    const location = useLocation()

    const pathParts = location.pathname.split('/');
    const appCategory = pathParts[1] === 'integration' && pathParts[2] === 'app-category' && pathParts[3] !== '';

    useEffect(() => {
        if (location.pathname === '/dashboard/app' || location.pathname === '/integration/appstore' || appCategory){
            document.body.classList.add('bg-gradient')
        } else {
            document.body.classList.remove('bg-gradient')
        }
    })

    const routes = [
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
                { path: 'compare-plan', element: <ComparePlan /> }
            ],
        },
        {
            path: '/payment',
            element: <PaymentPage />
        },
        {
            path: '/checkout',
            element: <CheckoutPage />
        },
        {
            path: '/checkout-received',
            element: <CheckoutReceived />
        },
        {
            path: '/integration',
            element: withAuthenticationRequired(DashboardLayout),
            children: [
                { path: ':id', element: <Integration />},
                { path: 'appstore', element: <AppStore />},
                { path: 'appstore/:id', element: <SingleApp />},
                { path: 'quota-detail/:app', element: <QuotaDetail />},
                { path: 'app-category/:cate', element: <AppCategory />}
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
                { path: '*', element: <NotFoundPage /> },
            ],
        },
        { path: '*', element: <NotFoundPage replace /> },
        { path: '/pricing', element: <Pricing />}
    ]
    return useRoutes(routes);
}
