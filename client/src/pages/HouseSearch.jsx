import { useEffect, useState } from 'react';
import HouseSearchForm from '../components/HouseSearchForm';
import { houseSearch } from '../services/house';
import './HouseSearch.scss';
import HouseMap from '../components/HouseMap';

const HouseSearch = () => {
  const [filters, setFilters] = useState({
    purpose: 'sell',
    type: 'apartment',
    minimumSize: 50,
    maximumPrice: 1000000,
    minimumBedrooms: 0,
    lat: 38.75,
    lng: -9.25,
    distance: 1
  });

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    houseSearch(filters).then((data) => setHouses(data.houses));
  }, [filters]);

  const handleMapMove = (lat, lng, distance) => {
    setFilters({ ...filters, lat, lng, distance });
  };

  return (
    <div className="house-search-page">
      <aside>
        <HouseSearchForm filters={filters} onFiltersChange={setFilters} />
      </aside>
      <main>
        <HouseMap houses={houses} onMove={handleMapMove} />
      </main>
    </div>
  );
};

export default HouseSearch;
