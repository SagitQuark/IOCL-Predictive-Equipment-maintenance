import AnalyticsSummaryCards from "../components/analytics/AnalyticsSummaryCards";
import FailureDistributionChart from "../components/analytics/FailureDistributionChart";
import MachineTypeDistributionChart from "../components/analytics/MachineTypeDistributionChart";
import RiskHealthScatterChart from "../components/analytics/RiskHealthScatterChart";
import HealthScoreDistributionChart from "../components/analytics/HealthScoreDistributionChart";

function Analytics() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Analytics</h1>
        <p className="text-slate-400 mt-2">
          Machine health metrics, distributions, and predictive insights.
        </p>
      </div>

      {/* Summary Cards */}
      <AnalyticsSummaryCards />

      {/* Charts Grid - 2x2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FailureDistributionChart />
        <MachineTypeDistributionChart />
        <RiskHealthScatterChart />
        <HealthScoreDistributionChart />
      </div>
    </div>
  );
}

export default Analytics;