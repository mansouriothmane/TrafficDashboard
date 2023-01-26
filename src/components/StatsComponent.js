import React from "react";
import TrafficPerDayChart from "./charts/TrafficPerDayChart";
import TrafficPerVehiculeChart from "./charts/TrafficPerVehiculeChart";
import TrafficPerSensorChart from "./charts/TrafficPerSensorChart";

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
