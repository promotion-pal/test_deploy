import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import("./MapContainer"), {
  ssr: false,
  loading: () => null,
});

export default MapContainer;