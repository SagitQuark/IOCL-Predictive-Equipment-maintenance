function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold text-white">
                    IOCL Predictive Maintenance System
                </h1>
                <p className="text-sm text-slate-400">
                    Equipment Health Monitoring Dashboard
                </p>
            </div>

        <div className="flex items-center gap-6">
          <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="text-green-400 text-sm font-medium">
                Operational
            </span>
        </div>

          <span className="text-slate-300 text-xl">
            🔔
          </span>

          <div className="text-slate-300">
            👤 Admin
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;