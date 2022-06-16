import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(AuthenticationContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    logInUser({ email, password }).then((data) => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div>
      <form onSubmit={handleLogIn}>
        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button>Log In to Existing Account</button>
      </form>
    </div>
  );
};

export default LogInPage;
