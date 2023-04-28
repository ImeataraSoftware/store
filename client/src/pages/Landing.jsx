import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";

import { Footer } from "../components/Footer";

import "../pages/Landing.css";

export const Landing = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-fit mt-16" style={{ height: "calc(100vh - 64px)" }}>
          {/* <Link to="/home">Get Started</Link> */}
          <section>
            <img
              src="https://i.pinimg.com/564x/fc/b8/0b/fcb80bbeb52e28ca768540e05b1c1553.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/564x/e4/39/89/e439896ca261671d3e98607ec5c93fc1.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/564x/98/d1/a9/98d1a99ae827037c6734d9bec92f535d.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/564x/f5/0b/a5/f50ba52ea8894139538112d2b26870c3.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/564x/07/73/9a/07739aac2b774f5110a82ffd35e1b681.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/564x/95/e9/0e/95e90ec04febafda5b56a89dbbc9b029.jpg"
              alt=""
            />
          </section>
        </div>
      </div>
    </>
  );
};
