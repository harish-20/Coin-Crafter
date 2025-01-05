import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

import Spinner from "../../UI/Spinner";

import { expenseToDataPoints } from "../../../helpers/dataProcessing";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
  const filteredData = useSelector((state) => state.chart.data);
  const isFilteredDataLoading = useSelector(
    (state) => state.chart.loadingState.isFilteredDataLoading
  );
  const dataPoints = expenseToDataPoints(filteredData);

  const options = getOptionsWithData(dataPoints);

  return (
    <div className="w-full md:w-6/12">
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
        dataPoints,
      },
    ],
  };
}
