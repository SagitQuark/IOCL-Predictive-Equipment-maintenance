import mockPredictions from "../../data/mockPredictions";

function AnalyticsSummaryCards() {
  const totalMachines = mockPredictions.length;

  const criticalMachines = mockPredictions.filter(
    (p) => p.status === "Critical"
  ).length;

  const healthyMachines = mockPredictions.filter(
    (p) => p.status === "Healthy"
  ).length;

  const avgHealthScore = Math.round(
    mockPredictions.reduce((sum, p) => sum + p.healthScore, 0) /
      mockPredictions.length
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-slate-400 text-sm">Total Machines</p>
        <h3 className="text-3xl font-bold text-white mt-2">{totalMachines}</h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-slate-400 text-sm">Critical Machines</p>
        <h3 className="text-3xl font-bold text-white mt-2">{criticalMachines}</h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-slate-400 text-sm">Healthy Machines</p>
        <h3 className="text-3xl font-bold text-white mt-2">{healthyMachines}</h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-slate-400 text-sm">Average Health Score</p>
        <h3 className="text-3xl font-bold text-white mt-2">{avgHealthScore}%</h3>
      </div>
    </div>
  );
}

export default AnalyticsSummaryCards;
