import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import Topbar from "src/components/topbar";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Topbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className={`page-section ${isSidebarOpen ? 'active' : 'inactive'}`}>
        <Outlet />
      </div>
    </>
  );
}