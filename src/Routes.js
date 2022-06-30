import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing({cordinat}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    //tabke mandi cooords=-0.3350975699634586, 100.34190295250696
    //swasembada=-6.117940067952994, 106.8894023734158
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(cordinat.latitude,cordinat.longitude), L.latLng(-6.117940067952994, 106.8894023734158)],
      routeWhileDragging: true
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
