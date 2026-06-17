import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
// import mockPredictions from "../../data/mockPredictions";
import { useEffect, useState } from "react";
import api from "../../services/api";

function FailureDistributionChart() {

  const [summary, setSummary] = useState({
  healthyMachines: 0,
  warningMachines: 0,
  criticalMachines: 0,
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

  const failureData = [
  {
    name: "Healthy",
    value: summary.healthyMachines,
  },
  {
    name: "Warning",
    value: summary.warningMachines,
  },
  {
    name: "Critical",
    value: summary.criticalMachines,
  },
];

  const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Machine Status Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={failureData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {failureData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
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
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
}

export default FailureDistributionChart;
