import { useEffect, useState } from 'react';
import HouseCard from '../components/HouseCard';
import ProfileCard from '../components/ProfileCard';
import { listHomeData } from '../services/base';

const StartPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    listHomeData().then((data) => {
      setProfiles(data.profiles);
      setHouses(data.houses);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to MiCasa</h1>
      <h2>Some of our newest users</h2>
      {profiles.map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
      <h2>Some of our latest house listings</h2>
      {houses.map((house) => (
        <HouseCard key={house._id} house={house} />
      ))}
    </div>
  );
};

export default StartPage;
