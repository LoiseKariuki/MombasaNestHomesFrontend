"use client";

import * as React from "react";
import Map, { Marker, MapRef } from "@vis.gl/react-maplibre";

interface OpenFreeMapProps {
  searchQuery?: string;
}

export default function OpenFreeMap({ searchQuery }: OpenFreeMapProps) {
  const [markers, setMarkers] = React.useState<
    { longitude: number; latitude: number }[]
  >([]);
  const mapRef = React.useRef<MapRef | null>(null); // ✅ no more `any`

  React.useEffect(() => {
    const fetchLocation = async () => {
      if (!searchQuery) return;

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery,
        )}`,
      );
      const data = await res.json();

      if (data && data[0]) {
        const { lon, lat } = data[0];
        setMarkers([{ longitude: parseFloat(lon), latitude: parseFloat(lat) }]);

        if (mapRef.current) {
          mapRef.current.flyTo({
            center: [parseFloat(lon), parseFloat(lat)],
            zoom: 12,
            essential: true,
          });
        }
      }
    };

    fetchLocation();
  }, [searchQuery]);

  return (
    <Map
      ref={mapRef}
      mapLib={import("maplibre-gl")}
      initialViewState={{
        longitude: 37.9062,
        latitude: 0.0236,
        zoom: 3,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    >
      {markers.map((m, i) => (
        <Marker
          key={i}
          longitude={m.longitude}
          latitude={m.latitude}
          color="red"
          anchor="bottom"
        />
      ))}
    </Map>
  );
}
