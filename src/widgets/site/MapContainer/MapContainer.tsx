'use client';

import "leaflet/dist/leaflet.css";
import 'react-leaflet-markercluster/styles'
import * as L from 'leaflet'

import { MapContainer as LeafletMapContainer, MapContainerProps as LeafletMapContainerProps, Marker, MarkerProps, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";

interface BaloonProps extends Omit<MarkerProps, 'icon'> {
  text: string;
}

function Baloon({ text, ...props }: BaloonProps) {
  return <Marker icon={L.divIcon({ className: "leaflet-baloon-wrapper", html: `<div class="leaflet-baloon">${text}</div>`, iconSize: [1, 1] })} {...props} />;
}

const iconCreateFunction = function (cluster: any) {
  return L.divIcon({
    html: `<div class="leaflet-baloon">${cluster.getChildCount()}</div>`,
    className: 'leaflet-baloon-wrapper',
    iconSize: [1, 1],
  });
}

interface MapContainerProps extends LeafletMapContainerProps {
  points: { key: string | number; position: [number, number], text: string }[];
}

export default function MapContainer({ center, points }: MapContainerProps) {
  return (
    <LeafletMapContainer className="leaflet-map" center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerClusterGroup showCoverageOnHover={false} iconCreateFunction={iconCreateFunction}>
        {points.map(({ key, position, text }) => <Baloon key={key} position={position} text={text} />)}
      </MarkerClusterGroup>
    </LeafletMapContainer>
  );
}
