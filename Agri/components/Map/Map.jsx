import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = ({ latN, lngN }) => {
  const defaultZoom = 13;
  const padding = 0.05;
  const bounds = L.latLngBounds(
    L.latLng(latN - padding, lngN - padding),
    L.latLng(latN + padding, lngN + padding)
  );

  return (
    <MapContainer
      center={[latN, lngN]}
      zoom={defaultZoom}
      scrollWheelZoom={false}
      style={{ height: "500px" }}
      bounds={bounds}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latN, lngN]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
