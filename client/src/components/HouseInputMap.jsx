import { Marker } from '@react-google-maps/api';
import GenericMap from './GenericMap';

const HouseInputMap = ({ position, onPositionChange }) => {
  const handleHouseLocationSetting = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    onPositionChange({
      type: 'Point',
      coordinates: [lng, lat]
    });
  };

  return (
    <GenericMap onClick={handleHouseLocationSetting}>
      {position && (
        <Marker
          position={{
            lat: position.coordinates[1],
            lng: position.coordinates[0]
          }}
        />
      )}
    </GenericMap>
  );
};

export default HouseInputMap;
