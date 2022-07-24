import Navbar from "../components/Navbar";
import plane from "../images/airplane.png";
import atom from "../images/atom.png";
const Home = () => {
  return (
    <div className="bg-bgBlue h-[820px]">
      <Navbar />
      <div className="top flex justify-between mt-24 container mx-auto space-x-10 w-full md:w-9/12 gap-6">
        <div className="left w-1/2">
          <div className="plane mb-14">
            <img className="w-24 h-16" src={plane} alt="" />
          </div>
          <h1 className="text-6xl font-bold text-blue1 mb-6">Welcome to </h1>
          <div className="detail">
            <h1 className="text-6xl font-bold text-gold mb-2">Globetech</h1>
            <p className="text-blue2 text-lg font-normal text-justify">
              We are committed to deliver <span>best IT services</span>. Our
              consultants have experience in working with clients. We have
              extensive experience in the software application space and also
              offer a broad range and depth of technology.
            </p>
            <div className="detail-button mt-4 space-x-8">
              <button className="border-2 border-btnBlueText rounded-sm font-semibold text-lg text-btnBlueText py-3 px-7 hover:border-none hover:bg-goldBtn hover:text-btnBlackText">Support us</button>
              <button className="border-2 border-btnBlueText rounded-sm font-semibold text-lg text-btnBlueText py-3 px-7 hover:border-none hover:bg-goldBtn hover:text-btnBlackText">Our Mission</button>
            </div>
          </div>
        </div>
        <div className="right w-1/2">
          <img className="w-full h-full" src={atom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
