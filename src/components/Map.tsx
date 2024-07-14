import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  const defaultPosition = {
    lat: -25.647224300728542,
    lng: -49.31325766000899,
    zoom: 16,
  };

  const markerPosition = {
    lat: -25.647224300728542,
    lng: -49.31325766000899,
  };

  return (
    <MapContainer center={[defaultPosition.lat, defaultPosition.lng]} zoom={defaultPosition.zoom} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[markerPosition.lat, markerPosition.lng]}>
        <Popup>
          Rua Rio Eufrates, nº 65, Bairro: Iguaçu, Cidade: Fazenda Rio Grande/PR
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
