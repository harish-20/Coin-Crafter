import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

import Spinner from "../../UI/Spinner";
import EmptyData from "../../UI/EmptyData/EmptyData";

import { expensesToCategoryDataPoints } from "../../../helpers/dataProcessing";
import EmptyTransaction from "../../transactions/TransactionList/EmptyTransaction";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Pie = (props) => {
  const { expenseType } = props;

  const filteredData = useSelector((state) => state.chart.data);
  const isFilteredDataLoading = useSelector(
    (state) => state.chart.loadingState.isFilteredDataLoading
  );
  const isAvailableFilterLoading = useSelector(
    (state) => state.chart.loadingState.isAvailableFilterLoading
  );

  const dataPoints = expensesToCategoryDataPoints(filteredData);

  const filteredDataPoints = dataPoints.filter(
    (dataPoint) => dataPoint.type === expenseType
  );

  const options = getOptionsWithData(filteredDataPoints);

  const isNoExpenseAdded = filteredData.length === 0;
  const isDataEmpty = !isNoExpenseAdded && filteredDataPoints.length === 0;

  const isChartLoading = isFilteredDataLoading || isAvailableFilterLoading;

  return (
    <div className="w-full min-h-[400px]">
      {isChartLoading && (
        <Spinner className="h-full flex justify-center" size={50} />
      )}

      {isNoExpenseAdded && !isChartLoading && <EmptyData />}
      {isDataEmpty && !isChartLoading && <EmptyTransaction />}

      {!isChartLoading && !isNoExpenseAdded && !isDataEmpty && (
        <CanvasJSChart options={options} />
      )}
    </div>
  );
};
export default Pie;

function getOptionsWithData(dataPoints) {
  return {
    theme: "dark2",
    colorSet: "customColor",
    backgroundColor: "#0000",
    animationEnabled: true,
    legend: {
      horizontalAlign: "right",
      verticalAlign: "center",
      fontWeight: "normal",
      fontFamily: "sans-serif",
      fontSize: 16,
      markerMargin: 20,
    },
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        legendText: "{label}",
        indexLabel: "{label}",
        legendMarkerType: "triangle",
        dataPoints,
      },
    ],
  };
}
