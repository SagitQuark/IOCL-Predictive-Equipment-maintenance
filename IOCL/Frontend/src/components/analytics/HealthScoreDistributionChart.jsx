import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import mockPredictions from "../../data/mockPredictions";

function HealthScoreDistributionChart() {
  const healthDistribution = {
    "80-100": mockPredictions.filter((p) => p.healthScore >= 80).length,
    "50-79": mockPredictions.filter(
      (p) => p.healthScore >= 50 && p.healthScore < 80
    ).length,
    "0-49": mockPredictions.filter((p) => p.healthScore < 50).length,
  };

  const distributionData = [
    { range: "80-100", count: healthDistribution["80-100"] },
    { range: "50-79", count: healthDistribution["50-79"] },
    { range: "0-49", count: healthDistribution["0-49"] },
  ];

  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Health Score Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={distributionData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis
            dataKey="range"
            stroke="#94a3b8"
            style={{ fontSize: "12px" }}
          />
          <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#f1f5f9", fontWeight: "bold" }}
            itemStyle={{ color: "#f1f5f9" }}
            formatter={(value) => [`${value}`, "Machines"]}
            cursor={{ fill: "none", stroke: "none" }}
          />
          <Bar dataKey="count" fill="#8b5cf6" wrapperStyle={{ outline: "none" }} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default HealthScoreDistributionChart;
