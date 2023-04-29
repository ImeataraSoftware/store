import { Navbar } from "../components/Navbar";

export const LogIn = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-fit mt-16" style={{ height: "calc(100vh - 64px)" }}>
          Login
        </div>
      </div>
    </>
  );
};
