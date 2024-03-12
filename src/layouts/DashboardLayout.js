import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import { useState } from "react";
import Topbar from "src/components/topbar/topbar";

export default function DashboardLayout() {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const removeHorizontalPaddingOnMobile = 
    location.pathname !== '/dashboard/app' &&
    location.pathname !== '/dashboard/settings/billing-plans'

  return (
    <>
      {location.pathname !== '/dashboard/instance-configuration' ? (
        <>
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          <Topbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} hasNoLeftSidebar={false}/>
          <div className={`${removeHorizontalPaddingOnMobile ? 'page-section' : 'page-sec-dashboard'} ${isSidebarOpen ? 'active' : 'inactive'}`}>
            <Outlet />
          </div>
        </>
      ) : <Outlet />}
    </>
  );
}