import { useState } from "react";
import { Bell } from "lucide-react";
import { mockAlerts } from "../../data/mockAlerts";

function NotificationBell() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getAlertColor = (type) => {
    switch (type) {
      case "Critical":
        return "border-l-4 border-red-500 bg-red-500/5";
      case "Warning":
        return "border-l-4 border-yellow-500 bg-yellow-500/5";
      case "Info":
        return "border-l-4 border-blue-500 bg-blue-500/5";
      default:
        return "border-l-4 border-slate-500 bg-slate-500/5";
    }
  };

  const getAlertBadgeColor = (type) => {
    switch (type) {
      case "Critical":
        return "bg-red-500/10 text-red-400";
      case "Warning":
        return "bg-yellow-500/10 text-yellow-400";
      case "Info":
        return "bg-blue-500/10 text-blue-400";
      default:
        return "bg-slate-500/10 text-slate-400";
    }
  };

  return (
    <div className="relative">
      {/* Bell Button */}
      <button
        onClick={toggleDropdown}
        className="relative flex items-center justify-center text-slate-300 hover:text-white transition-colors"
        aria-label="Notifications"
        title="Notifications"
      >
        <Bell size={20} />
        {/* Badge */}
        {mockAlerts.length > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
            {mockAlerts.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-slate-700 border border-slate-600 rounded-lg shadow-lg z-50">
          {/* Dropdown Header */}
          <div className="px-4 py-3 border-b border-slate-600">
            <h3 className="text-sm font-semibold text-white">Notifications</h3>
          </div>

          {/* Alerts List */}
          <div className="max-h-96 overflow-y-auto">
            {mockAlerts.length > 0 ? (
              mockAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`px-4 py-3 border-b border-slate-600/50 last:border-b-0 ${getAlertColor(
                    alert.type
                  )}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded mb-2 ${getAlertBadgeColor(
                          alert.type
                        )}`}
                      >
                        {alert.type}
                      </span>
                      <p className="text-sm text-slate-100">{alert.message}</p>
                      <p className="text-xs text-slate-400 mt-1">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-slate-400">
                <p className="text-sm">No notifications</p>
              </div>
            )}
          </div>

          {/* Dropdown Footer */}
          <div className="px-4 py-2 border-t border-slate-600 text-center">
            <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
              View all alerts
            </button>
          </div>
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
}

export default NotificationBell;
