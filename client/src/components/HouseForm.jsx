import HouseInputMap from './HouseInputMap';

const HouseForm = ({ house, onHouseChange, onHouseSubmit, buttonLabel }) => {
  const handleHouseFormSubmission = (event) => {
    event.preventDefault();
    onHouseSubmit();
  };

  return (
    <form onSubmit={handleHouseFormSubmission}>
      <label htmlFor="input-purpose">Purpose of Listing</label>
      <select
        id="input-purpose"
        value={house.purpose}
        onChange={(event) =>
          onHouseChange({ ...house, purpose: event.target.value })
        }
      >
        <option value="sell">Sell</option>
        <option value="rent">Rent</option>
      </select>

      <label htmlFor="input-type">Type of House</label>
      <select
        id="input-type"
        value={house.type}
        onChange={(event) =>
          onHouseChange({ ...house, type: event.target.value })
        }
      >
        <option value="apartment">Apartment</option>
        <option value="detached-house">Detached House</option>
      </select>

      <label htmlFor="input-size">Size of House in square meters</label>
      <input
        id="input-size"
        type="number"
        min={0}
        placeholder="Size in square meters"
        value={house.size}
        onChange={(event) =>
          onHouseChange({ ...house, size: event.target.valueAsNumber })
        }
      />

      <label htmlFor="input-price">
        {house.purpose === 'rent'
          ? 'Monthly Rent in Euros'
          : 'Total Price in Euros'}
      </label>
      <input
        id="input-price"
        type="number"
        min={0}
        placeholder={
          house.purpose === 'rent'
            ? 'Monthly Rent in Euros'
            : 'Total Price in Euros'
        }
        value={house.price}
        onChange={(event) =>
          onHouseChange({ ...house, price: event.target.valueAsNumber })
        }
      />

      <label htmlFor="input-bedrooms">Number of Bedrooms</label>
      <input
        id="input-bedrooms"
        type="number"
        min={0}
        placeholder="Number of Bedrooms"
        value={house.bedrooms}
        onChange={(event) =>
          onHouseChange({ ...house, bedrooms: event.target.valueAsNumber })
        }
      />

      <label htmlFor="input-listed">House should be listed</label>
      <div>
        <input
          id="input-listed"
          type="checkbox"
          value={house.listed}
          onChange={(event) =>
            onHouseChange({ ...house, listed: event.target.checked })
          }
        />
        <label htmlFor="input-listed">
          {house.listed ? 'Listed' : 'Unlisted'}
        </label>
      </div>

      <label htmlFor="input-description">A short description of house</label>
      <textarea
        id="input-description"
        placeholder="A short description of house"
        value={house.description}
        onChange={(event) =>
          onHouseChange({ ...house, description: event.target.value })
        }
      />

      <HouseInputMap
        position={house.position}
        onPositionChange={(position) => onHouseChange({ ...house, position })}
      />

      <button>{buttonLabel}</button>
    </form>
  );
};

export default HouseForm;
