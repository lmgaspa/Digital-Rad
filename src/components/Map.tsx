import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuração dos ícones
interface DefaultIcon extends L.Icon.Default {
  _getIconUrl?: () => string;
}

delete (L.Icon.Default.prototype as DefaultIcon)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map: React.FC = () => {
  const [interactive, setInteractive] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      const handleTouchStart = () => setInteractive(true);
      const handleTouchEnd = () => setInteractive(false);

      map.getContainer().addEventListener("touchstart", handleTouchStart);
      map.getContainer().addEventListener("touchend", handleTouchEnd);

      map.on('mousedown', () => setInteractive(true));
      map.on('mouseup', () => setInteractive(false));
      map.on('dragstart', () => setInteractive(true));
      map.on('dragend', () => setInteractive(false));

      return () => {
        map.getContainer().removeEventListener("touchstart", handleTouchStart);
        map.getContainer().removeEventListener("touchend", handleTouchEnd);
        map.off('mousedown');
        map.off('mouseup');
        map.off('dragstart');
        map.off('dragend');
      };
    }
  }, []);

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
    <MapContainer
      center={[defaultPosition.lat, defaultPosition.lng]}
      zoom={defaultPosition.zoom}
      style={{ height: "400px", width: "100%" }}
      dragging={interactive}
      touchZoom={interactive}
      doubleClickZoom={interactive}
      scrollWheelZoom={interactive}
      whenReady={() => {
        if (mapRef.current) {
          mapRef.current.invalidateSize();
        }
      }}
      ref={(mapInstance) => {
        if (mapInstance) {
          mapRef.current = mapInstance;
        }
      }}
    >
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
