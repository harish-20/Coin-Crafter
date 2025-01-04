import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
  const options = {
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
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };

  return (
    <div className="w-full md:w-6/12">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default BarChart;
