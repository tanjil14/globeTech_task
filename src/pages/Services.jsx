import Navbar from "../components/Navbar";
import plane from "../images/airplane.png";
const Services = () => {
  return (
    <div className="h-full p-2">
      <Navbar />
      <div className="planeBox w-full left-0 duration-1000 ease-in-out hover:translate-x-full container mx-auto space-x-10  md:w-9/12 gap-6 mt-10">
        <img className="w-24 h-16" src={plane} alt="" />
      </div>
      <div className="services container mx-auto w-full md:w-9/12 mt-12">
        <div className="top text-center mb-5">
          <h1 className="text-white font-medium text-3xl uppercase tracking-widest">Services</h1>
          <h1 className="text-white font-semibold text-4xl tracking-widest my-5">We provides services to our clients</h1>
        </div>
        <div className="serviceCart">
            
        </div>
      </div>
    </div>
  );
};

export default Services;
