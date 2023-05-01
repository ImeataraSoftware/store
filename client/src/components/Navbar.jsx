import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="h-[64px] fixed left-0 top-0 right-0">
        <div className="p-5 flex justify-between">
          <div>logo</div>
          <div>Login</div>
        </div>
      </div>
    </>
  );
};
