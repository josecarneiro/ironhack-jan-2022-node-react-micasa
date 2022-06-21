import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from '../components/AuthenticationForm';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [user, setUserState] = useState({
    name: '',
    email: '',
    password: '',
    picture: ''
  });

  const { setUser } = useContext(AuthenticationContext);

  const handleRegistration = () => {
    registerUser(user).then((data) => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Register New Account</h1>
      <AuthenticationForm
        user={user}
        buttonLabel="Register New Account"
        displayInputs={['name', 'email', 'password', 'picture']}
        onUserChange={setUserState}
        onAuthenticationSubmit={handleRegistration}
      />
    </div>
  );
};

export default RegisterPage;
