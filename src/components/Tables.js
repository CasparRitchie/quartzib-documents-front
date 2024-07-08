import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Tables = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get('https://quartzib-documents-back-962e7b20e999.herokuapp.com/tables', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTables(response.data);
      } catch (error) {
        console.error('Failed to fetch tables', error);
      }
    };

    fetchTables();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h3>Database Tables</h3>
      <ul>
        {tables.map(table => (
          <li key={table}>{table}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tables;
