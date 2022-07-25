import Navbar from "../components/Navbar";
import plane from "../images/airplane.png";
import atom from "../images/atom.png";
const Home = () => {
  return (
    <div className="bg-bgBlue h-full mb-10 ">
      <Navbar />
      <div className="top flex flex-col lg:flex-row justify-between mt-10 md:mt-24 container mx-auto space-x-10 w-full md:w-9/12 gap-6">
        <div className="left w-full p-2 lg:w-1/2">
          <div className="plane mb-7 md:mb-14 left-0 duration-300 ease-in-out hover:translate-x-3/4">
            <img className="w-24 h-16" src={plane} alt="" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-blue1 mb-6">
            Welcome to{" "}
          </h1>
          <div className="detail">
            <h1 className="text-5xl md:text-6xl font-bold text-gold mb-2">
              Globetech
            </h1>
            <p className="text-blue2 text-lg font-normal text-justify">
              We are committed to deliver <span>best IT services</span>. Our
              consultants have experience in working with clients. We have
              extensive experience in the software application space and also
              offer a broad range and depth of technology.
            </p>
            <div className="detail-button mt-4 gap-5 flex flex-grow">
              <button className="custom-button">Support us</button>
              <button className="custom-button">Our Mission</button>
            </div>
          </div>
        </div>
        <div className="right w-1/2 duration-300 delay-200 ease-linear hover:rotate-45 hidden lg:block">
          <img className="w-full h-full" src={atom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
