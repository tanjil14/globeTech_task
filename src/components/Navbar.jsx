import { Link } from "react-router-dom";
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
          <Link to="/">
            <li className="text-blue1 font-medium cursor-pointer">Home</li>
          </Link>
          <Link to="/services">
            <li className="text-blue1 font-medium pointer">Services</li>
          </Link>
          <Link to="/login">
            <li className="text-blue1 font-medium pointer">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
