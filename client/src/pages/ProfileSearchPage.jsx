import { useEffect, useState } from 'react';
import { profileSearch } from '../services/profile';

const ProfileSearchPage = () => {
  const [term, setTerm] = useState('');

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    profileSearch().then((data) => {
      setProfiles(data.profiles);
    });
  }, [term]);

  return (
    <div>
      <form>
        <label htmlFor="input-search-term">Search by name</label>
        <input
          id="input-search-term"
          type="text"
          placeholder="Search for other users..."
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
      {profiles.map((profile) => (
        <div>
          <span>{profile.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ProfileSearchPage;
