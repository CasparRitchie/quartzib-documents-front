// src/App.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Productions from './components/Productions';
import Tables from './components/Tables';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>My React App</h1>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      <Profile />
      {isAuthenticated && (
        <>
          <Tables />
          <Productions />
        </>
      )}
    </div>
  );
};

export default App;
