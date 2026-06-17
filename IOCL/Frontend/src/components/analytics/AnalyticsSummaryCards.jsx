// import mockPredictions from "../../data/mockPredictions";
import { useEffect, useState } from "react";
import api from "../../services/api";

function AnalyticsSummaryCards() {

  const [summary, setSummary] = useState({
  totalMachines: 0,
  healthyMachines: 0,
  warningMachines: 0,
  criticalMachines: 0,
  avgHealthScore: 0,
});

  useEffect(() => {
  const fetchSummary = async () => {
    try {
      const response = await api.get("/analytics/summary");
      setSummary(response.data);
    } catch (error) {
      console.error("Failed to fetch analytics summary:", error);
    }
  };

  fetchSummary();
}, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-slate-800 border border-slate-700 hover:bg-slate-800/50 transition-colors rounded-xl p-5">
        <p className="text-slate-400 text-sm">Total Machines</p>
        <h3 className="text-3xl font-bold text-white mt-2">{summary.totalMachines}</h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 hover:bg-slate-800/50 transition-colors rounded-xl p-5">
        <p className="text-slate-400 text-sm">Critical Machines</p>
        <h3 className="text-3xl font-bold text-white mt-2">{summary.criticalMachines}</h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 hover:bg-slate-800/50 transition-colors rounded-xl p-5">
        <p className="text-slate-400 text-sm">Healthy Machines</p>
        <h3 className="text-3xl font-bold text-white mt-2">{summary.healthyMachines}</h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 hover:bg-slate-800/50 transition-colors rounded-xl p-5">
        <p className="text-slate-400 text-sm">Average Health Score</p>
        <h3 className="text-3xl font-bold text-white mt-2">{summary.avgHealthScore}%</h3>
      </div>
    </div>
  );
}

export default AnalyticsSummaryCards;
