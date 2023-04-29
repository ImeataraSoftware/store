import { Link } from 'react-router-dom';

import { Navbar } from '../components/Navbar';

import { Footer } from '../components/Footer';

export const Landing = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-fit mt-16" style={{ height: 'calc(100vh - 64px)' }}>
          <Link to="/home">Get Started</Link>
        </div>
      </div>
    </>
  );
};
