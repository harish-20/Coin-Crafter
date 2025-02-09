import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

import EmptyTransaction from "../../transactions/TransactionList/EmptyTransaction";
import EmptyData from "../../UI/EmptyData/EmptyData";
import Spinner from "../../UI/Spinner";

import { expensesToCategoryDataPoints } from "../../../helpers/dataProcessing";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = (props) => {
  const { expenseType } = props;

  const filteredData = useSelector((state) => state.chart.data);
  const isFilteredDataLoading = useSelector(
    (state) => state.chart.loadingState.isFilteredDataLoading
  );

  const dataPoints = expensesToCategoryDataPoints(filteredData);

  const filteredDataPoints = dataPoints.filter(
    (dataPoint) => dataPoint.type === expenseType
  );

  const options = getOptionsWithData(filteredDataPoints);

  const isNoExpenseAdded = !isFilteredDataLoading && dataPoints.length === 0;
  const isDataEmpty = !isNoExpenseAdded && filteredDataPoints.length === 0;

  return (
    <div className="w-full min-h-[400px]">
      {isFilteredDataLoading && (
        <Spinner className="h-full flex justify-center" size={50} />
      )}

      {isNoExpenseAdded && <EmptyData />}
      {isDataEmpty && !isFilteredDataLoading && <EmptyTransaction />}

      {!isFilteredDataLoading && !isNoExpenseAdded && !isDataEmpty && (
        <CanvasJSChart options={options} />
      )}
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
    zoomType: "x",
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
