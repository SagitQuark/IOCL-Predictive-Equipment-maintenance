import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Activity,
  BrainCircuit,
  BarChart3,
  Settings,
  Menu,
} from "lucide-react";

function Sidebar({ isCollapsed, onToggle }) {
  const navItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/machine-health",
      label: "Machine Health",
      icon: Activity,
    },
    {
      path: "/predictions",
      label: "Predictions",
      icon: BrainCircuit,
    },
    {
      path: "/analytics",
      label: "Analytics",
      icon: BarChart3,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: Settings,
    },
    // TODO: Future Floating AI Assistant Integration
    // The AI Assistant page still exists at src/pages/AI_Assistant.jsx
    // and the route is preserved. It will be replaced with a floating
    // assistant button in a future phase.
  ];

  const navItemClass = ({ isActive }) => `
    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
    ${isCollapsed ? "justify-center" : ""}
    ${isActive 
      ? "bg-slate-600 text-white" 
      : "hover:bg-slate-700 text-slate-300"
    }
  `;

  return (
    <aside
      className={`
        transition-all duration-300
        ${isCollapsed ? "w-20" : "w-64"}
        min-h-screen bg-slate-800 border-r border-slate-700
        flex flex-col p-4
      `}
    >
      {/* Sidebar Header - Title and Toggle Button */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
        {/* Title Area - Hidden when collapsed */}
        {!isCollapsed && (
          <h2 className="text-xl font-bold text-white">IOCL Dashboard</h2>
        )}

        {/* Toggle Button - Always visible */}
        <button
          onClick={onToggle}
          className="flex items-center justify-center p-2 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white flex-shrink-0"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={navItemClass}
                  title={isCollapsed ? item.label : ""}
                >
                  <IconComponent size={20} className="flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* IOCL Footer - Pinned to bottom, visible in both states */}
      <div className="mt-auto pt-4 border-t border-slate-700">
        <div
          className={`
            bg-slate-700/30 rounded-lg p-3 transition-all duration-300
            ${isCollapsed ? "flex justify-center" : "text-center"}
          `}
        >
          <span
            className={`
              text-xs font-semibold text-slate-400 transition-opacity duration-300
              ${isCollapsed ? "text-xs" : "text-sm"}
            `}
          >
            {isCollapsed ? "IOCL" : "IOCL Logo Area"}
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;