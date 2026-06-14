function recentAlerts({ alerts }){
    return(
        <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-5">
            <h2 className="text-xl font-semibold text-white mb-4">
                Recent Alerts
            </h2>

            <div className="space-y-4">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`border-1-4 bg-slate-700/30 rounded-lg p-4 ${
                            alert.type === "Critical"
                            ? "border-red-500"
                            : alert.type === "Warning"
                            ? "border-yellow-500"
                            : "border-blue-500"
                        }`}>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${
                                alert.type === "Critical"
                                ? "bg-red-500/10 text-red-400"
                                : alert.type === "Warning"
                                ? "bg-yellow-500/10 text-yellow-400"
                                : "bg-blue-500/10 text-blue-400"
                            }`}
                            >
                                {alert.type}
                            </span>
         
                            <p className="text-white">
                                {alert.message}
                            </p>

                            <p classname="text-sm text-slate-400 mt-1">
                                {alert.time}
                            </p>
                    </div>
             ))}
            </div>

        </section>
    );
}

export default recentAlerts;