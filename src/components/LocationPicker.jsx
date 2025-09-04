// src/components/LocationPicker.jsx
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function LocationMarker({ setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return null;
}

export default function LocationPicker() {
  const [position, setPosition] = useState([17.385044, 78.486671]); // default Hyderabad

  return (
    <div className="card shadow-sm p-3">
      <input 
        type="text" 
        placeholder="Enter your location" 
        className="form-control mb-2" 
      />

      <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}></Marker>
        <LocationMarker setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}
