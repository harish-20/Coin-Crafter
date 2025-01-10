import BarChart from "./BarChart";
import MultiSeriesBarChart from "./MultiSeriesBarChart";
import Pie from "./Pie";

const Charts = () => {
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-2 gap-8">
      <MultiSeriesBarChart />
      <BarChart />
      <Pie />
    </div>
  );
};

export default Charts;
