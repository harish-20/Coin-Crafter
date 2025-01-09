import BarChart from "./BarChart";
import MultiSeriesBarChart from "./MultiSeriesBarChart";
import Pie from "./Pie";

const Charts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <BarChart />
      <Pie />
      <MultiSeriesBarChart />
    </div>
  );
};

export default Charts;
