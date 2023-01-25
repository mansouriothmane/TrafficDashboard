import MapComponent from "../components/MapComponent";
import StatsComponent from "../components/StatsComponent";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="w-1/2">
        <MapComponent />
      </div>
      <div className="w-1/2 ">
        <div className="text-center font-bold text-xl text-gray-800 p-2">
          Statistiques sur les entrées/sorties
        </div>
        <div className="h-72 overflow-y-scroll">
          <StatsComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
