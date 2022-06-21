import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';

const Navbar = () => {
  const { user, setUser } = useContext(AuthenticationContext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
    });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile/search">Search for Profiles</Link>
      <Link to="/house/search">Search for Houses</Link>
      {(user && (
        <>
          <Link to="/message/list">Messages</Link>
          <Link to="/house/add">List New House</Link>
          <aside>
            <Link to={`/profile/${user._id}`}>{user.name}'s Profile</Link>
            <button onClick={handleSignOut}>Sign Out</button>
          </aside>
        </>
      )) || (
        <>
          <aside>
            <Link to="/log-in">Log In</Link>
            <Link to="/register">Register</Link>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar;
