import PredictionSummaryCards from "../components/predictions/PredictionSummaryCards";
import FailureRiskTable from "../components/predictions/FailureRiskTable";
import MaintenanceRecommendations from "../components/predictions/MaintenanceRecommendations";
// import mockPredictions from "../data/mockPredictions";
import { useState, useEffect } from "react";
import axios from "axios";

function Predictions() {

  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
  const fetchPredictions = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/predictions"
      );

      console.log(response.data);

      setPredictions(response.data);
    } catch (error) {
      console.error("Error fetching predictions:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchPredictions();
}, []);

  return (
    <div className="p-6">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Machine Failure Predictions
        </h1>
        <p className="text-slate-400 mt-2">
          Predictive analytics for maintenance planning and risk assessment.
        </p>
      </div>

      {/* Summary Cards */}
      <PredictionSummaryCards predictions={predictions} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-6">
        {/* Failure Risk Table */}
        <FailureRiskTable predictions={predictions} />

        {/* Maintenance Recommendations */}
        <MaintenanceRecommendations predictions={predictions} />
      </div>

      {/* Future Enhancements */}
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Future Enhancements
        </h2>
        <div className="space-y-2 text-slate-400 text-sm">
          <p>• Failure Trend Analysis</p>
          <p>• Remaining Useful Life (RUL) Estimation</p>
          <p>• Failure Type Prediction</p>
          <p>• AI Generated Insights</p>
        </div>
      </section>
    </div>
  );
}

export default Predictions;