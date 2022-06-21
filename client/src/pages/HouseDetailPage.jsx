import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import AuthenticationContext from '../context/authentication';
import { houseLoad } from '../services/house';
import formatPrice from '../utilities/format-price';

const HouseDetailPage = () => {
  const { id } = useParams();

  const [house, setHouse] = useState(null);

  useEffect(() => {
    houseLoad(id).then((data) => setHouse(data.house));
  }, [id]);

  const { user } = useContext(AuthenticationContext);

  return (
    <div>
      {house && (
        <>
          <header>
            <h1>{house.bedrooms} Bedroom House</h1>
            <h3>{formatPrice(house.price)}</h3>
          </header>
          <section>
            <p>{house.description}</p>
          </section>
          <aside>
            <h4>Owned by</h4>
            <ProfileCard profile={house.owner} />
            <h4>Actions</h4>
            {(user && (
              <>
                {house.owner._id === user._id && (
                  <Link to={`/house/${id}/edit`} className="btn">
                    Edit House Listing
                  </Link>
                )}
                <button>Bookmark</button>
                {user._id !== house.owner._id && (
                  <Link to={`/message/${house.owner._id}`} className="btn">
                    Message Owner
                  </Link>
                )}
              </>
            )) || (
              <Link to="/register" className="btn">
                Register to Message Owner or Bookmark Listing
              </Link>
            )}
          </aside>
        </>
      )}
    </div>
  );
};

export default HouseDetailPage;
