import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import api from "../../services/api";


function HealthTrends() {

  const [healthTrendData, setHealthTrendData] = useState([]);

  useEffect(() => {
  const fetchHealthTrends = async () => {
    try {
      const response = await api.get("/dashboard/health-trends");
      setHealthTrendData(response.data);
    } catch (error) {
      console.error("Failed to fetch health trends:", error);
    }
  };

  fetchHealthTrends();
}, []);


  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 pr-10">
      <h2 className="text-xl font-semibold text-white mb-6">
        Equipment Health Score Trend
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={healthTrendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis
            dataKey="date"
            stroke="#94a3b8"
            style={{ fontSize: "12px" }}
          />
          <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#f1f5f9" }}
            formatter={(value) => [`${value}%`, "Health Score"]}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#3b82f6"
            dot={{ fill: "#3b82f6", r: 5 }}
            activeDot={{ r: 7 }}
            strokeWidth={2}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default HealthTrends;
