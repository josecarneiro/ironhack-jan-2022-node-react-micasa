import { useEffect, useState } from 'react';
import HouseSearchForm from '../components/HouseSearchForm';
import HouseCard from '../components/HouseCard';
import { houseSearch } from '../services/house';
import './HouseSearch.scss';
import HouseMap from '../components/HouseMap';

const HouseSearch = () => {
  const [filters, setFilters] = useState({
    purpose: 'sell',
    type: 'apartment',
    minimumSize: 50,
    maximumPrice: 1000000,
    minimumBedrooms: 0
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
        {/* {houses.map((house) => (
          <HouseCard key={house._id} house={house} />
        ))} */}
        <HouseMap houses={houses} />
      </main>
    </div>
  );
};

export default HouseSearch;
