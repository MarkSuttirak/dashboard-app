import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function DashboardLayout() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}