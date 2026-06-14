import KPICard from "../components/dashboard/KPICard";
import HighRiskMachines from "../components/dashboard/HighRiskMachines";
import RecentAlerts from "../components/dashboard/RecentAlerts";

function Dashboard() {
        // Sample data for high-risk machines
        const highRiskMachines = [
    {
        id: "M-102",
        risk: 92,
        status: "Critical",
    },
    {
        id: "M-245",
        risk: 88,
        status: "High Risk",
    },
    {
        id: "M-178",
        risk: 81,
        status: "High Risk",
    },
    {
        id: "M-331",
        risk: 76,
        status: "Warning",
    },
    ];

    //Sample data for Recent alerts
    const recentAlerts = [
      {
        id: 1,
        type: "Critical",
        message: "Machine M-102 exceeded torque threshold",
        time: "2 min ago",
      },
      {
        id: 2,
        type: "Warning",
        message: "Tool wear increasing on M-245",
        time: "15 min ago"
      },
      {
        id: 3,
        type: "Info",
        message: "Maintenance completed for M-178",
        time: "1 hour ago"
      },
    ];
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Equipment Health Dashboard
        </h1>
        <p className="text-slate-400 mt-2">
          Monitor machine health, risks, and maintenance insights.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <KPICard title="Total Machines" value="10,000" />
            <KPICard title="Healthy Machines" value="9,661" />
            <KPICard title="At Risk Machines" value="339" />
            <KPICard title="Health Score" value="94%" />
        </div>

      <HighRiskMachines machines={highRiskMachines} />

      <RecentAlerts alerts={recentAlerts} />

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white">
          Health Trends
        </h2>
      </section>
    </div>
  );
}

export default Dashboard;