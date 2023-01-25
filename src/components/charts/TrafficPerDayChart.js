import React from "react";
import ReactECharts from "echarts-for-react";
import { fakeDataPerDay } from "../../storage/data";

const TrafficPerDayChart = () => {
  const data = fakeDataPerDay;

  const options = {
    title: {
      text: "Entrées/sorties par jour",
      left: "center",
    },
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
      data: ["Entrées", "Sorties"],
      top: 30
    },
    series: [
      {
        type: "bar",
        data: data.map((d) => d.in),
        stack: "ins",
        name: "Entrées",
        barWidth: 5,
        itemStyle: {
          color: "#ff4136", // red
        },
      },
      {
        type: "bar",
        data: data.map((d) => d.out),
        stack: "outs",
        name: "Sorties",
        barWidth: 5,
        itemStyle: {
          color: "#f9d423", // yellow
        },
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={options} />
    </div>
  );
};

export default TrafficPerDayChart;
