import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

import Spinner from "../../UI/Spinner";

import { expensesToCategoryDataPoints } from "../../../helpers/dataProcessing";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
  const filteredData = useSelector((state) => state.chart.data);
  const isFilteredDataLoading = useSelector(
    (state) => state.chart.loadingState.isFilteredDataLoading
  );
  const dataPoints = expensesToCategoryDataPoints(filteredData);

  const options = getOptionsWithData(dataPoints);

  return (
    <div className="w-full min-h-[400px]">
      {isFilteredDataLoading && (
        <Spinner className="h-full flex justify-center" size={50} />
      )}
      {!isFilteredDataLoading && <CanvasJSChart options={options} />}
    </div>
  );
};

export default BarChart;

function getOptionsWithData(dataPoints) {
  return {
    theme: "dark2",
    backgroundColor: "#0000",
    animationEnabled: true,
    zoomEnabled: true,
    zoomType: "xy",
    title: {
      text: "Expenses",
      fontSize: 22,
      padding: 20,
    },
    toolTip: {
      shared: true,
    },
    legend: {
      fontWeight: "normal",
    },
    data: [
      {
        type: "column",
        name: "Expense",
        dataPoints,
      },
    ],
  };
}
