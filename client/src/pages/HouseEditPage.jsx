import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HouseForm from '../components/HouseForm';
import { houseEdit, houseLoad } from '../services/house';

const HouseEditPage = () => {
  const { id } = useParams();

  const [house, setHouse] = useState(null);

  const navigate = useNavigate();

  const handleHouseEdit = () => {
    houseEdit(id, house).then((data) => {
      navigate(`/house/${id}`);
    });
  };

  useEffect(() => {
    houseLoad(id).then((data) => setHouse(data.house));
  }, [id]);

  return (
    <div>
      <h1>Edit House Listing</h1>
      {house && (
        <HouseForm
          house={house}
          onHouseChange={setHouse}
          onHouseSubmit={handleHouseEdit}
          buttonLabel="Edit House Listing"
        />
      )}
    </div>
  );
};

export default HouseEditPage;
