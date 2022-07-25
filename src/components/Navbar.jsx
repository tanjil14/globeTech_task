import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-col text-center md:text-left md:flex-row md:justify-between py-3 container mx-auto space-x-0 md:space-x-10 w-full md:w-9/12 ">
      <div className="left flex flex-col my-2">
        <h1 className="text-2xl">
          <span className="font-bold text-blue1">Globe</span>
          <span className="text-blue2">Tech</span>
        </h1>
        <small className="-mt-2 tracking-[4px] text-blue2 font-normal text-xxs">
          Company limited
        </small>
      </div>
      <div className="right my-2 md:my-5">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-6 justify-start">
          <li className="link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="link">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="link">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
