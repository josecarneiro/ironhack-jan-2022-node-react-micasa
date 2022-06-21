import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

const GenericMap = ({ children, ...props }) => {
  /* Environment variables for react apps must start with REACT_APP_ */
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = useState(null);

  const center = { lat: 38.75, lng: -9.25 };

  const handleLoad = (map) => {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  };

  const handleDrag = () => {
    const lat = map.center.lat();
    const lng = map.center.lng();
    props.onMove(lat, lng);
  };

  return (
    (isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          minHeight: '30rem',
          height: '100%'
        }}
        center={center}
        zoom={10}
        options={{ fullscreenControl: false, streetViewControl: false }}
        onLoad={handleLoad}
        onDrag={handleDrag}
        {...props}
      >
        {children}
      </GoogleMap>
    )) || <></>
  );
};

export default GenericMap;
