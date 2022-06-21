import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GenericMap = ({ children, ...props }) => {
  /* Environment variables for react apps must start with REACT_APP_ */
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  return (
    (isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          minHeight: '30rem',
          height: '100%'
        }}
        center={{ lat: 38.75, lng: -9.25 }}
        zoom={10}
        options={{ fullscreenControl: false, streetViewControl: false }}
        {...props}
      >
        {children}
      </GoogleMap>
    )) || <></>
  );
};

export default GenericMap;
