import mockPredictions from "../../data/mockPredictions";

function FailureRiskTable() {
  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">
        Failure Risk Analysis
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                Machine ID
              </th>

              <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                Failure Probability
              </th>

              <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                Health Score
              </th>

              <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                Status
              </th>

              <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                Recommended Action
              </th>
            </tr>
          </thead>

          <tbody>
            {mockPredictions.map((prediction) => (
              <tr
                key={prediction.id}
                className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"
              >
                <td className="px-4 py-3 text-white text-center">
                  {prediction.id}
                </td>

                <td className="px-4 py-3 text-white text-center">
                  {prediction.failureProbability}%
                </td>

                <td className="px-4 py-3 text-white text-center">
                  <span
                    className={`font-semibold ${
                      prediction.healthScore >= 80
                        ? "text-green-400"
                        : prediction.healthScore >= 50
                        ? "text-orange-400"
                        : "text-red-400"
                    }`}
                  >
                    {prediction.healthScore}
                  </span>
                </td>

                <td className="px-4 py-3 text-white text-center">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded ${
                      prediction.status === "Critical"
                        ? "bg-red-500/10 text-red-400"
                        : prediction.status === "Warning"
                        ? "bg-orange-500/10 text-orange-400"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {prediction.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-white text-center">
                  {prediction.recommendedAction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default FailureRiskTable;
