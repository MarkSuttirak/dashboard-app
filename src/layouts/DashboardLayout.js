import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useState } from "react";

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <>
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            <div className={`page-section ${isSidebarOpen ? 'active' : 'inactive'}`}>
              <Outlet />
          </div>
        </>
    );
}