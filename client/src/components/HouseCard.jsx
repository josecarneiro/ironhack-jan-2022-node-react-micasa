import { Link } from 'react-router-dom';
import formatPrice from '../utilities/format-price';
import './HouseCard.scss';

const HouseCard = ({ house }) => (
  <Link className="house-card" to={`/house/${house._id}`}>
    {/* <img
      src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      alt={house.name}
    /> */}
    <span>{house.bedrooms} Bedroom House</span>
    <small>{formatPrice(house.price)}</small>
  </Link>
);

export default HouseCard;
