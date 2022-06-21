import { Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import GenericMap from './GenericMap';

const HouseMap = ({ houses, onMove }) => {
  const navigate = useNavigate();

  return (
    <GenericMap onMove={onMove}>
      {houses.map((house) => (
        <Marker
          key={house._id}
          position={{
            lat: house.position.coordinates[1],
            lng: house.position.coordinates[0]
          }}
          onClick={() => navigate(`/house/${house._id}`)}
        />
      ))}
    </GenericMap>
  );
};

export default HouseMap;
