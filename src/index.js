import './index.css';
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const domain = "dev-6h3frnmqfgbtbxry.eu.auth0.com";
const clientId = "YwhBBN18xP5dQBxPBMf074deyW1eebt8";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-6h3frnmqfgbtbxry.eu.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
