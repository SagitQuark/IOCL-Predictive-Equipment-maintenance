import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import mockPredictions from "../../data/mockPredictions";
import { useEffect, useState } from "react";
import api from "../../services/api";

function MachineTypeDistributionChart() {

  const [typeData, setTypeData] = useState([]);

  useEffect(() => {
  const fetchMachineTypes = async () => {
    try {
      const response = await api.get("/analytics/machine-types");
      setTypeData(response.data);
    } catch (error) {
      console.error("Failed to fetch machine types:", error);
    }
  };

  fetchMachineTypes();
}, []);


  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Machine Type Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={typeData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis
            dataKey="name"
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
          <Bar dataKey="count" fill="#3b82f6" wrapperStyle={{ outline: "none" }} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default MachineTypeDistributionChart;
