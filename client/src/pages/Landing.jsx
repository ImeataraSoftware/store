import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";

import { Footer } from "../components/Footer";

export const Landing = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="h-fit" style={{ height: "calc(100vh - 64px)" }}>
          <Link to="/home">Get Started</Link>
        </div>
      </div>
    </>
  );
};
