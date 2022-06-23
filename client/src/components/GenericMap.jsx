import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { memo, useState } from 'react';

// Initialize style, settings and center objects outside of component function
// as proposed in the package documentation
const mapContainerStyle = { width: '100%', minHeight: '30rem', height: '100%' };
const mapSettings = { fullscreenControl: false, streetViewControl: false };
const center = { lat: 38.75, lng: -9.25 };

const UnmemoizedGenericMap = ({ children, ...props }) => {
  /* Environment variables for react apps must start with REACT_APP_ */
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = useState(null);

  const handleLoad = (map) => {
    // Store map in component state, so it can be accessed later
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
        center={center}
        zoom={10}
        mapContainerStyle={mapContainerStyle}
        options={mapSettings}
        onLoad={handleLoad}
        onDragEnd={handleDrag}
        {...props}
      >
        {children}
      </GoogleMap>
    )) || <></>
  );
};

// Memoize the component, as proposed in the package documentation
// memoization avoids re-renders when parent component gets re-rendered
// but no props of memoized child component have changed
const GenericMap = memo(UnmemoizedGenericMap);

export default GenericMap;
