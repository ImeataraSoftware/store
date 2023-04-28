import { Navbar } from "../components/Navbar";

import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-fit mt-16" style={{ height: "calc(100vh - 64px)" }}>
          <Sidebar />
        </div>
      </div>
    </>
  );
};
