// src/components/Productions.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Productions = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    const fetchProductions = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get('http://localhost:5000/productions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProductions(response.data);
      } catch (error) {
        console.error('Failed to fetch productions', error);
      }
    };

    fetchProductions();
  }, [getAccessTokenSilently]);

  return (
    <div>
      {productions.map(production => (
        <div key={production.id}>
          <h3>{production.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Productions;
