import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { fakeDataPerVehicle } from "../storage/data";

const TrafficPerVehiculeChart = () => {
  const data = fakeDataPerVehicle;

  console.log("fakeDataPerVehicule");
  console.log(data);

  const options = {
    xAxis: {
      type: "category",
      data: data.map((d) => d.vehicleType),
    },
    yAxis: {
      type: "value",
    },
    legend: {
      data: ["Ins", "Outs"],
    },
    series: [
      {
        type: "bar",
        data: data.map((d) => d.in),
        stack: "ins",
        name: "Ins",
        barWidth: 50,
        itemStyle: {
          color: "#ff4136", // red
        },
      },
      {
        type: "bar",
        data: data.map((d) => d.out),
        stack: "outs",
        name: "Outs",
        barWidth: 50,
        itemStyle: {
          color: "#f9d423", // yellow
        },
      },
    ],
  };

  return (
    <div className="charts-container">
      <ReactECharts option={options} />
    </div>
  );
};

export default TrafficPerVehiculeChart;
