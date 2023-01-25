import React from "react";
import ReactECharts from "echarts-for-react";
import { fakeDataPerVehicle } from "../../storage/data";

const TrafficPerVehiculeChart = () => {
  const data = fakeDataPerVehicle;

  const options = {
    title: {
      text: "Entrées/sorties par type de véhicule",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: data.map((d) => d.vehicleType),
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
        barWidth: 30,
        itemStyle: {
          color: "#ff4136", // red
        },
      },
      {
        type: "bar",
        data: data.map((d) => d.out),
        stack: "outs",
        name: "Sorties",
        barWidth: 30,
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

export default TrafficPerVehiculeChart;
