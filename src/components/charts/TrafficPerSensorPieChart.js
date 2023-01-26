import React from "react";
import ReactECharts from "echarts-for-react";
import { fakeDataPerSensor } from "../../storage/data";

const TrafficPerSensorPieChart = () => {
  const data = fakeDataPerSensor.map((e) => {
    return { value: e.count, name: e.sensor };
  });
  const options = {
    title: {
      text: "Nombre total de données par capteur",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "5%",
      left: "center",
    },
    series: [
      {
        name: "Nombre total",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={options} />
    </div>
  );
};

export default TrafficPerSensorPieChart;
