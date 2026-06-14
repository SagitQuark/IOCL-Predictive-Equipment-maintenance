import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import {Outlet} from "react-router-dom";

function DashboardLayout(){
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return(
        <div className = "min-h-screen bg-slate-900 text-white flex">

            <Sidebar 
                isCollapsed={isSidebarCollapsed} 
                onToggle={handleToggleSidebar}
            />
            {/*Main content*/}
            <div className="flex-1 flex flex-col">
                <Header 
                    isCollapsed={isSidebarCollapsed} 
                    onToggle={handleToggleSidebar}
                />

                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;