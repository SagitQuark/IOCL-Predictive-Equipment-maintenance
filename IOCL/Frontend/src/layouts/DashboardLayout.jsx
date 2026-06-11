import Sidebar from "../components/common/Sidebar";
import {Outlet} from "react-router-dom";

function DashboardLayout(){
    return(
        <div className = "min-h-screen bg-slate-900 text-white flex">

            <Sidebar />
            {/*Main content*/}
            <div className= "flex-1 p-6">
                <Outlet />
            </div>

        </div>
    );
}

export default DashboardLayout;