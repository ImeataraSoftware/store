import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('token') !== null
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null && !authenticated) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  const handleLogout = () => {
    localStorage.removeItem('id');

    localStorage.removeItem('firstName');

    localStorage.removeItem('lastName');

    localStorage.removeItem('email');

    localStorage.removeItem('address');

    localStorage.removeItem('city');

    localStorage.removeItem('zipCode');

    localStorage.removeItem('country');

    localStorage.removeItem('phone');

    localStorage.removeItem('token');

    setAuthenticated(false);
  };

  return { authenticated, handleLogout };
};

export const useDecrypted = () => {};
