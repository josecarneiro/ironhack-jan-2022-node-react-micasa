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
    lat: 38,
    lng: -9
    // center: 0,
    // distance: 0
  });

  const [houses, setHouses] = useState([]);

  const handleSearch = () => {
    houseSearch(filters).then((data) => setHouses(data.houses));
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleMapMove = (lat, lng) => {
    setFilters({ ...filters, lat, lng });
    handleSearch();
  };

  return (
    <div className="house-search-page">
      <aside>
        <HouseSearchForm
          filters={filters}
          onFiltersChange={setFilters}
          onSearchSubmit={handleSearch}
        />
      </aside>
      <main>
        <HouseMap houses={houses} onMove={handleMapMove} />
      </main>
    </div>
  );
};

export default HouseSearch;
