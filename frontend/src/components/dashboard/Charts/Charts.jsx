import Spline from "./Spline";
import Pie from "./Pie";

const Charts = () => {
  return (
    <div className="flex gap-4 p-4 flex-col md:flex-row">
      <Spline />
      <Pie />
    </div>
  );
};

export default Charts;
