import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import './MapComponent.css';
import 'leaflet/dist/leaflet.css';


const redIcon = new L.Icon({
  iconUrl: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|FF5722',
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});

const DraggableMarker = ({ position, setPosition }) => {
  const [draggable, setDraggable] = useState(true);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return (
    <Marker
      draggable={draggable}
      eventHandlers={{
        dragend: (e) => {
          setPosition(e.target.getLatLng());
        },
        click: () => {
          setDraggable((prev) => !prev); 
        },
      }}
      position={position}
      icon={redIcon}
    >
      <Popup>Drag me to set the issue location</Popup>
    </Marker>
  );
};

const MapComponent = () => {
  const [position, setPosition] = useState([6.5244, 3.3792]); // Lagos

  return (
    <div className="map-container">
      <h3 className="select-location">Select a location</h3>
      <input 
        type="text" 
        placeholder="Search for a location or drag the pin on the map" 
        className="search-bar" 
      />
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
