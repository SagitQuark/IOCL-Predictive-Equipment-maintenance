import KPICard from "../components/dashboard/KPICard";
import HighRiskMachines from "../components/dashboard/HighRiskMachines";
import HealthTrends from "../components/dashboard/HealthTrends";

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

  return (
    <div className="p-6">
      {/* Dashboard Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Equipment Health Dashboard
        </h1>
        <p className="text-slate-400 mt-2">
          Monitor machine health, risks, and maintenance insights.
        </p>
      </div>

      {/* KPI Overview and Health Trends Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* KPI Overview Section */}
        <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4 pb-6">
            KPI Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <KPICard title="Total Machines" value="10,000" />
            <KPICard title="Healthy Machines" value="9,661" />
            <KPICard title="At Risk Machines" value="339" />
            <KPICard title="Health Score" value="94%" />
          </div>
        </section>

        {/* Health Trends Section */}
        <HealthTrends />
      </div>

      {/* High Risk Machines Table */}
      <HighRiskMachines machines={highRiskMachines} />
    </div>
  );
}

export default Dashboard;