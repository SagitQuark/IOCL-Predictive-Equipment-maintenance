import mockPredictions from "../../data/mockPredictions";

function MaintenanceRecommendations() {
  const nonHealthy = mockPredictions
    .filter((p) => p.status !== "Healthy")
    .sort((a, b) => b.failureProbability - a.failureProbability)
    .slice(0, 5);

  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">
        Maintenance Recommendations
      </h2>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {nonHealthy.length === 0 ? (
          <p className="text-gray-400 text-center py-6">
            No maintenance required
          </p>
        ) : (
          nonHealthy.map((recommendation) => (
            <div
              key={recommendation.id}
              className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 hover:bg-slate-700/70 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-white font-semibold">{recommendation.id}</p>
                  <p className="text-slate-400 text-sm mt-1">
                    {recommendation.recommendedAction}
                  </p>
                </div>

                <span
                  className={`px-2 py-1 text-sm font-medium rounded whitespace-nowrap ${
                    recommendation.status === "Critical"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-orange-500/10 text-orange-400"
                  }`}
                >
                  {recommendation.status}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-600">
                <p className="text-slate-400 text-xs">
                  Failure Probability:{" "}
                  <span className="text-white font-semibold">
                    {recommendation.failureProbability}%
                  </span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default MaintenanceRecommendations;
