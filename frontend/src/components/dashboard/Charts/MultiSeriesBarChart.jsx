import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

import Spinner from "../../UI/Spinner";

import { expenseToDataPoints } from "../../../helpers/dataProcessing";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MultiSeriesBarChart = () => {
  const filteredData = useSelector((state) => state.chart.data);
  const isFilteredDataLoading = useSelector(
    (state) => state.chart.loadingState.isFilteredDataLoading
  );
  const dataPoints = expenseToDataPoints(filteredData);

  const { incomeDataPoints, spendDataPoints } = dataPoints.reduce(
    (acc, val) => {
      if (val.type === "spend") acc.spendDataPoints.push(val);
      else acc.incomeDataPoints.push(val);
      return acc;
    },
    { spendDataPoints: [], incomeDataPoints: [] }
  );

  const options = getOptionsWithData(incomeDataPoints, spendDataPoints);

  return (
    <div className="w-full">
      {isFilteredDataLoading && (
        <Spinner className="h-full flex justify-center" size={50} />
      )}
      {!isFilteredDataLoading && <CanvasJSChart options={options} />}
    </div>
  );
};

export default MultiSeriesBarChart;

function getOptionsWithData(incomeDataPoints, spendDataPoints) {
  return {
    theme: "dark2",
    backgroundColor: "#0000",
    animationEnabled: true,
    zoomEnabled: true,
    zoomType: "xy",
    title: {
      text: "Income & Expense",
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
        name: "Income",
        dataPoints: incomeDataPoints,
      },
      {
        type: "column",
        name: "expense",
        dataPoints: spendDataPoints,
      },
    ],
  };
}
