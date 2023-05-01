import { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useAuthentication } from '../app/hook';

export const Navbar = () => {
  const { authenticated, handleLogout } = useAuthentication();

  return (
    <>
      <div className="h-[64px] fixed left-0 top-0 right-0">
        <div className="p-5 flex justify-between">
          <Link to="/home">Logo</Link>
          {authenticated ? (
            <>
              <div>{localStorage.getItem('email')}</div>
              <button onClick={handleLogout}>Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login">Log In</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
