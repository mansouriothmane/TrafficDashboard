import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";

import radarIcon from "../assets/radar_icon.png";
import tubeIcon from "../assets/tube_icon.png";
import cameraIcon from "../assets/camera_icon.png";
import defaultIcon from "../assets/leaf_icon.png";

import posts from "../storage/posts.json";
const MapComponent = () => {

  const getMarkerIcon = (sensorType) => {
    const sensor = sensorType.split("-")[0];
    switch (sensor) {
      case "RADAR":
        return new Icon({
          iconUrl: radarIcon,
          iconSize: [30, 30],
        });
      case "TUBE":
        return new Icon({
          iconUrl: tubeIcon,
          iconSize: [30, 30],
        });
      case "CAMERA":
        return new Icon({
          iconUrl: cameraIcon,
          iconSize: [30, 30],
        });
      default:
        return new Icon({
          iconUrl: defaultIcon,
          iconSize: [30, 30],
        });
    }
  };

  const MultipleMarkers = () => {
    return Object.values(posts).map((item) => {
      console.log(item);
      const position = [item.location.latitude, item.location.longitude];
      const icon = getMarkerIcon(item.type);
      return (
        <Marker position={position} icon={icon}>
          <Popup className="w-auto">{item.post}</Popup>
        </Marker>
      );
    });
  }
  
  const center = [44.800913, -0.60751];
  return (
    <div className="w-full h-full p-2">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={true}
        style={{ width: "50vw", height: "89vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MultipleMarkers/>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
