import KPICard from "../components/dashboard/KPICard";
import HighRiskMachines from "../components/dashboard/HighRiskMachines";
import HealthTrends from "../components/dashboard/HealthTrends";
import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  // Sample data for high-risk machines
  const [summary, setSummary] = useState({
  totalMachines: 0,
  healthyMachines: 0,
  criticalMachines: 0,
  avgHealthScore: 0,
});

const [highRiskMachines, setHighRiskMachines] = useState([]);

  useEffect(() => {
  const fetchDashboardData = async () => {
    try {
      const [summaryResponse, riskResponse] = await Promise.all([
        api.get("/analytics/summary"),
        api.get("/dashboard/high-risk-machines"),
      ]);

      setSummary(summaryResponse.data);
      setHighRiskMachines(riskResponse.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    }
  };

  fetchDashboardData();
}, []);

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
            <KPICard
              title="Total Machines" value={summary.totalMachines} />
            <KPICard title="Healthy Machines" value={summary.healthyMachines} />
            <KPICard title="At Risk Machines" value={summary.criticalMachines} />
            <KPICard title="Health Score" value={`${summary.avgHealthScore}%`} />
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