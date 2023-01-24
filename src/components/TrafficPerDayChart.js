import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { fakeDataPerDay } from "../storage/data";

const TrafficPerDayChart = () => {
  const data = fakeDataPerDay;

  console.log("fakeDataPerDay");
  console.log(data);

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    xAxis: {
      type: "category",
      data: data.map((d) => d.day),
    },
    yAxis: {
      type: "value",
    },
    legend: {
      data: ["Ins", "Outs"],
    },
    series: [
      {
        type: "line",
        data: data.map((d) => d.in),
        stack: "ins",
        name: "Ins",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        // barWidth: 5,
        itemStyle: {
          color: "#ff4136", // red
        },
      },
      {
        type: "line",
        data: data.map((d) => d.out),
        stack: "outs",
        name: "Outs",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        // barWidth: 5,
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

export default TrafficPerDayChart;
