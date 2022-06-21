import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HouseCard from '../components/HouseCard';
import AuthenticationContext from '../context/authentication';
import { profileLoad } from '../services/profile';
import './ProfilePage.scss';

const ProfilePage = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    profileLoad(id).then((data) => {
      setProfile(data.profile);
      setHouses(data.houses);
    });
  }, [id]);

  const { user } = useContext(AuthenticationContext);

  return (
    <div className="profile-page">
      {profile && (
        <header>
          <img
            src={
              profile.picture ||
              'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
            }
            alt={profile.name}
          />
          <h1>{profile.name}</h1>
        </header>
      )}
      {user && user._id === id && (
        <Link className="btn" to="/profile/edit">
          Edit Profile
        </Link>
      )}
      <Link className="btn" to={`/message/${id}`}>
        Message This User
      </Link>
      {Boolean(houses.length) && (
        <>
          <h3>Some of the houses this user has listed:</h3>
          {houses.map((house) => (
            <HouseCard key={house._id} house={house} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
