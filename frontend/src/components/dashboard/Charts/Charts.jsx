import Title from "../../UI/Title";
import BarChart from "./BarChart";
import MultiSeriesBarChart from "./MultiSeriesBarChart";
import Pie from "./Pie";

const Charts = () => {
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-2 gap-x-8 gap-y-8">
      {/* chart for income and expense in day wise */}
      <Title className="my-6  col-span-full text-center">Daily Expenses</Title>
      <MultiSeriesBarChart />

      {/* charts for expense visualization */}
      <Title className="my-6 ml-4 col-span-full">Expense</Title>
      <BarChart expenseType="spend" />
      <Pie expenseType="spend" />

      {/* charts for income visualization */}
      <Title className="my-6 ml-4 col-span-full">Income</Title>
      <BarChart expenseType="income" />
      <Pie expenseType="income" />
    </div>
  );
};

export default Charts;
