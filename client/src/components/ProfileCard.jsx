import { Link } from 'react-router-dom';
import './ProfileCard.scss';

const ProfileCard = ({ profile }) => (
  <Link className="profile-card" to={`/profile/${profile._id}`}>
    <img
      src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      alt={profile.name}
    />
    <span>{profile.name}</span>
  </Link>
);

export default ProfileCard;
