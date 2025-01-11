import BarChart from "./BarChart";
import MultiSeriesBarChart from "./MultiSeriesBarChart";
import Pie from "./Pie";

const Charts = () => {
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-2 gap-8">
      {/* chart for income and expense in day wise */}
      <MultiSeriesBarChart />

      {/* charts for expense visualization */}
      <BarChart expenseType="spend" />
      <Pie expenseType="spend" />

      {/* charts for income visualization */}
      <BarChart expenseType="income" />
      <Pie expenseType="income" />
    </div>
  );
};

export default Charts;
