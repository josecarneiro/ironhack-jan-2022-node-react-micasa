import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from '../components/AuthenticationForm';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';

const LogInPage = () => {
  const navigate = useNavigate();

  const [user, setUserState] = useState({
    email: '',
    password: ''
  });

  const { setUser } = useContext(AuthenticationContext);

  const handleLogIn = () => {
    logInUser(user).then((data) => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Log In to Existing Account</h1>
      <AuthenticationForm
        user={user}
        buttonLabel="Log In to Existing Account"
        displayInputs={['email', 'password']}
        onUserChange={setUserState}
        onAuthenticationSubmit={handleLogIn}
      />
    </div>
  );
};

export default LogInPage;
