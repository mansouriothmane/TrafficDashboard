import React from "react";
import TrafficPerDayChart from "../components/charts/TrafficPerDayChart";
import TrafficPerVehiculeChart from "../components/charts/TrafficPerVehiculeChart";
import TrafficPerSensorChart from "../components/charts/TrafficPerSensorChart";

const StatsComponent = () => {
  return (
    <div>
      <div className="w-full h-full">
        <TrafficPerDayChart />
        <TrafficPerVehiculeChart />
        <TrafficPerSensorChart />
      </div>
    </div>
  );
};

export default StatsComponent;
