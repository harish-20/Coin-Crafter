import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

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

  const options = getOptionsWithData(filteredDataPoints, expenseType);

  const isDataEmpty = filteredDataPoints.length === 0;

  return (
    <div className="w-full min-h-[400px]">
      {isFilteredDataLoading && (
        <Spinner className="h-full flex justify-center" size={50} />
      )}

      {isDataEmpty && <EmptyData />}

      {!isFilteredDataLoading && !isDataEmpty && (
        <CanvasJSChart options={options} />
      )}
    </div>
  );
};

export default BarChart;

const expenseTitle = {
  spend: "Expense",
  income: "Income",
};

function getOptionsWithData(dataPoints, expenseType) {
  return {
    theme: "dark2",
    backgroundColor: "#0000",
    animationEnabled: true,
    zoomEnabled: true,
    zoomType: "xy",
    title: {
      text: expenseTitle[expenseType],
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
