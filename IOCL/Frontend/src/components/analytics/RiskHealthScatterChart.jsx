import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import mockPredictions from "../../data/mockPredictions";

function RiskHealthScatterChart() {
  const scatterData = mockPredictions.map((p) => ({
    healthScore: p.healthScore,
    failureProbability: p.failureProbability,
    id: p.id,
  }));

  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Risk vs Health Score
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis
            type="number"
            dataKey="healthScore"
            name="Health Score"
            stroke="#94a3b8"
            style={{ fontSize: "12px" }}
            domain={[0, 100]}
          />
          <YAxis
            type="number"
            dataKey="failureProbability"
            name="Failure Probability"
            stroke="#94a3b8"
            style={{ fontSize: "12px" }}
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#f1f5f9", fontWeight: "bold" }}
            itemStyle={{ color: "#f1f5f9" }}
            cursor={{ fill: "none" }}
          />
          <Scatter
            name="Machines"
            data={scatterData}
            fill="#3b82f6"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </section>
  );
}

export default RiskHealthScatterChart;
