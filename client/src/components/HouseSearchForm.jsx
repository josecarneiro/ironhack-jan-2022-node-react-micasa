const HouseSearchForm = ({ filters, onFiltersChange, onSearchSubmit }) => {
  const handleSearchFormSubmission = (event) => {
    event.preventDefault();
    onSearchSubmit();
  };

  return (
    <form onSubmit={handleSearchFormSubmission}>
      <label htmlFor="input-purpose">Purpose of Listing</label>
      <select
        id="input-purpose"
        value={filters.purpose}
        onChange={(event) =>
          onFiltersChange({ ...filters, purpose: event.target.value })
        }
      >
        <option value="sell">Sell</option>
        <option value="rent">Rent</option>
      </select>

      <label htmlFor="input-type">Type of House</label>
      <select
        id="input-type"
        value={filters.type}
        onChange={(event) =>
          onFiltersChange({ ...filters, type: event.target.value })
        }
      >
        <option value="apartment">Apartment</option>
        <option value="detached-house">Detached House</option>
      </select>

      <label htmlFor="input-size">Minimum Size of House in square meters</label>
      <input
        id="input-size"
        type="number"
        min={0}
        placeholder="Minimum Size in square meters"
        value={filters.minimumSize}
        onChange={(event) =>
          onFiltersChange({ ...filters, size: event.target.valueAsNumber })
        }
      />

      <label htmlFor="input-price">
        {filters.purpose === 'rent'
          ? 'Maximum Monthly Rent in Euros'
          : 'Maximum Total Price in Euros'}
      </label>
      <input
        id="input-price"
        type="number"
        min={0}
        placeholder={
          filters.purpose === 'rent'
            ? 'Monthly Rent in Euros'
            : 'Total Price in Euros'
        }
        value={filters.maximumPrice}
        onChange={(event) =>
          onFiltersChange({ ...filters, price: event.target.valueAsNumber })
        }
      />

      <label htmlFor="input-bedrooms">Minimum Number of Bedrooms</label>
      <input
        id="input-bedrooms"
        type="number"
        min={0}
        placeholder="Minimum Number of Bedrooms"
        value={filters.minimumBedrooms}
        onChange={(event) =>
          onFiltersChange({ ...filters, bedrooms: event.target.valueAsNumber })
        }
      />

      <button>Search</button>
    </form>
  );
};

export default HouseSearchForm;
