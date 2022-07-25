import plane from "../images/airplane.png"
const Service = ({title}) => {
  return (
    <div className="cart bg-white w-full md:w-[45%] lg:w-[30%] xl:w-[31%] rounded-2xl p-5">
      <img className="w-full " src={plane} alt="" />
      <h1 className="text-center mt-7 mb-3 text-xl tracking-widest text-blue1">
        {title}
      </h1>
      <p className="text-[12px] text-justify my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, porro?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, porro?
      </p>
      <div className="text-center mb-2">
        <button className="uppercase tracking-widest text-white font-medium text-lg bg-blue1 my-2 px-12 py-2 border rounded-3xl cursor-pointer">
          More
        </button>
      </div>
    </div>
  );
};

export default Service;
