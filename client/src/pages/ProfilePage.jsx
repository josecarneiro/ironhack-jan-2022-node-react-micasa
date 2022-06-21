import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HouseCard from '../components/HouseCard';
import { profileLoad } from '../services/profile';

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

  return (
    <div>
      {profile && (
        <>
          <img
            src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt={profile.name}
          />
          <h1>{profile.name}</h1>
        </>
      )}
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
