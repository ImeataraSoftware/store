import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="h-[64px] fixed left-0 top-0 right-0">
        <div className="p-5 flex justify-between">
          <Link to="/home">Logo</Link>
          <Link to="/login">LogIn</Link>
        </div>
      </div>
    </>
  );
};
