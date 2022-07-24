import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-around py-3 bg-bgBlue">
      <div className="left flex flex-col my-2">
        <h1 className="text-2xl">
          <span className="font-bold text-blue1">Globe</span>
          <span className="text-blue2">Tech</span>
        </h1>
        <small className="-mt-2 tracking-[4px] text-blue2 font-normal text-xxs">
          Company limited
        </small>
      </div>
      <div className="right my-5 ">
        <ul className="flex gap-6">
          <Link to="/">
            <li className="text-blue1 font-medium">Home</li>
          </Link>
          <Link to="/services">
            <li className="text-blue1 font-medium">Services</li>
          </Link>
          <Link to="/login">
            <li className="text-blue1 font-medium">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
