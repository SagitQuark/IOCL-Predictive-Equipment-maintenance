import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function HealthTrends() {
  const healthTrendData = [
    { month: "Jan", score: 85 },
    { month: "Feb", score: 88 },
    { month: "Mar", score: 87 },
    { month: "Apr", score: 90 },
    { month: "May", score: 92 },
    { month: "Jun", score: 94 },
  ];

  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 pr-10">
      <h2 className="text-xl font-semibold text-white mb-6">
        Equipment Health Score Trend
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={healthTrendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis
            dataKey="month"
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
