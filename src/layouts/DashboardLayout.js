import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import { useState } from "react";
import Topbar from "src/components/topbar";

export default function DashboardLayout() {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      {location.pathname !== '/dashboard/instance-configuration' ? (
        <>
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          <Topbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          <div className={`page-section ${isSidebarOpen ? 'active' : 'inactive'}`}>
            <Outlet />
          </div>
        </>
      ) : <Outlet />}
    </>
  );
}