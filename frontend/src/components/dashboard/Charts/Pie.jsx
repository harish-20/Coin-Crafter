import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("customColor", ["red", "blue", "green", "yellow"]);
const Pie = () => {
  const options = {
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
        type: "pie",
        markerColor: "#711DB0",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: 32, label: "Health" },
          { y: 22, label: "Finance" },
          { y: 15, label: "Education" },
          { y: 19, label: "Career" },
          { y: 5, label: "Family" },
          { y: 7, label: "Real Estate" },
        ],
      },
    ],
  };
  return (
    <div className="w-full md:w-6/12">
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
};
export default Pie;
