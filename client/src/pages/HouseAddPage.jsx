import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseForm from '../components/HouseForm';
import { houseAdd } from '../services/house';

const HouseAddPage = () => {
  const [house, setHouse] = useState({
    purpose: 'sell',
    type: 'apartment',
    size: 100,
    price: 500000,
    bedrooms: 2,
    listed: true,
    description: '',
    pictures: []
  });

  const navigate = useNavigate();

  const handleHouseCreation = () => {
    houseAdd(house).then((data) => {
      const id = data.house._id;
      navigate(`/house/${id}`);
    });
  };

  return (
    <div>
      <h1>Add New House Listing</h1>
      <HouseForm
        house={house}
        onHouseChange={setHouse}
        onHouseSubmit={handleHouseCreation}
        buttonLabel="Add House Listing"
      />
    </div>
  );
};

export default HouseAddPage;
