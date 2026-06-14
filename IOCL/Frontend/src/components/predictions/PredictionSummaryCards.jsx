function PredictionSummaryCards({ predictions }) {
  const highRiskCount = predictions.filter(
    (p) => p.status === "Critical"
  ).length;

  const predictedFailures = predictions.filter(
    (p) => p.failureProbability >= 50
  ).length;

  const avgFailureProbability =
    predictions.length > 0
      ? Math.round(
          predictions.reduce((sum, p) => sum + p.failureProbability, 0) /
            predictions.length
        )
      : 0;

  const maintenanceDue = predictions.filter(
    (p) => p.status !== "Healthy"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-slate-400 text-sm">High Risk Machines</p>
        <h3 className="text-3xl font-bold text-white mt-2">{highRiskCount}</h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-slate-400 text-sm">Predicted Failures</p>
        <h3 className="text-3xl font-bold text-white mt-2">
          {predictedFailures}
        </h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-slate-400 text-sm">Avg Failure Probability</p>
        <h3 className="text-3xl font-bold text-white mt-2">
          {avgFailureProbability}%
        </h3>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-slate-400 text-sm">Maintenance Due</p>
        <h3 className="text-3xl font-bold text-white mt-2">
          {maintenanceDue}
        </h3>
      </div>
    </div>
  );
}

export default PredictionSummaryCards;
