import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import StartPage from './pages/StartPage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';

import Navbar from './components/Navbar';
import AuthenticationContext from './context/authentication';
import { loadUserInformation } from './services/authentication';
import ProfileSearchPage from './pages/ProfileSearchPage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import HouseAddPage from './pages/HouseAddPage';
import HouseDetailPage from './pages/HouseDetailPage';
import HouseEditPage from './pages/HouseEditPage';
import HouseSearch from './pages/HouseSearch';
import MessageThreadDetailPage from './pages/MessageThreadDetailPage';
import MessageThreadListPage from './pages/MessageThreadListPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserInformation().then((data) => {
      setUser(data.user);
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/profile/search" element={<ProfileSearchPage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/house/add" element={<HouseAddPage />} />
          <Route path="/house/search" element={<HouseSearch />} />
          <Route path="/house/:id" element={<HouseDetailPage />} />
          <Route path="/house/:id/edit" element={<HouseEditPage />} />
          <Route path="/message/list" element={<MessageThreadListPage />} />
          <Route path="/message/:id" element={<MessageThreadDetailPage />} />
        </Routes>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
};

export default App;
