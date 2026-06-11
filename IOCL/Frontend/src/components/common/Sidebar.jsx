import {NavLink} from "react-router-dom";

function Sidebar() {
        const NavItemClass = ({isActive}) => `block px-4 py-3 rounded-lg hover:bg-slate-600 transition ${
            isActive 
                ? "bg-slate-600" 
                : "hover:bg-slate-600"}`;
    return (
        <div className="w-64 min-h-screen bg-slate-700 p-4">
            <h2 className="text-xl font-bold">
                IOCL Dashboard
            </h2>
            <ul className="mt-8 space-y-2">
                <li>
                    <NavLink 
                        to="/"
                        className={NavItemClass}>                 
                            Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/machine-health"
                        className={NavItemClass}>  
                        Machine Health
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/predictions"
                        className={NavItemClass}>
                        Predictions
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/analytics"
                        className={NavItemClass}>
                        Analytics
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/ai-assistant"
                        className={NavItemClass}>
                        AI Assistant
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/settings"
                        className={NavItemClass}>
                        Settings
                    </NavLink>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;