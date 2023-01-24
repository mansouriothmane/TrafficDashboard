import React from "react";
import TrafficPerDayChart from "../components/TrafficPerDayChart";
import TrafficPerVehiculeChart from "../components/TrafficPerVehiculeChart";
import TrafficPerSensorChart from "../components/TrafficPerSensorChart";

const VehiculesComponent = () => {
  console.log("Je suis dans vehicules");
  return (
    <div>
      <h1>Je suis dans véhicules</h1>
      <div className="charts-container">
        <TrafficPerDayChart />
        <TrafficPerVehiculeChart />
        <TrafficPerSensorChart />
      </div>
    </div>
  );
};

export default VehiculesComponent;
