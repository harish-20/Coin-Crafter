import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

import EmptyData from "../../UI/EmptyData/EmptyData";
import Spinner from "../../UI/Spinner";

import { expensesToDailyDataPoints } from "../../../helpers/dataProcessing";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MultiSeriesBarChart = () => {
  const filteredData = useSelector((state) => state.chart.data);
  const isFilteredDataLoading = useSelector(
    (state) => state.chart.loadingState.isFilteredDataLoading
  );
  const isAvailableFilterLoading = useSelector(
    (state) => state.chart.loadingState.isAvailableFilterLoading
  );

  const { incomeDataPoints, spendDataPoints } =
    expensesToDailyDataPoints(filteredData);

  const options = getOptionsWithData(incomeDataPoints, spendDataPoints);

  const isNoExpenseAdded = filteredData.length === 0;

  const isChartLoading = isFilteredDataLoading || isAvailableFilterLoading;

  return (
    <div className="min-h-[400px] w-full overflow-x-auto md:col-span-2">
      {isChartLoading && (
        <Spinner className="h-full flex justify-center" size={50} />
      )}

      {isNoExpenseAdded && !isChartLoading && <EmptyData />}

      {!isChartLoading && !isNoExpenseAdded && (
        <div className="min-w-[1000px]">
          <CanvasJSChart options={options} />
        </div>
      )}
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
    zoomType: "x",
    axisX: {
      interval: 1,
    },
    toolTip: {
      shared: true,
    },
    legend: {
      fontWeight: "normal",
      horizontalAlign: "right",
      verticalAlign: "top",
    },
    data: [
      {
        type: "column",
        name: "Income",
        legendText: "Income",
        showInLegend: true,
        dataPoints: incomeDataPoints,
        color: "#26C6DA",
      },
      {
        type: "column",
        name: "expense",
        legendText: "Expense",
        showInLegend: true,
        dataPoints: spendDataPoints,
        color: "#FF867C",
      },
    ],
  };
}
