const Service = ({ title, img }) => {
  return (
    <div className="cart bg-white w-full md:w-[45%] lg:w-[30%] xl:w-[31%] rounded-2xl p-5">
      <img className="w-full h-1/2" src={img} alt="" />
      <h1 className="text-center mt-7 mb-3 text-xl tracking-widest text-blue1">
        {title}
      </h1>
      <p className="text-[12px] text-justify my-3">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that has a more or less normal distribution of
        letters, as opposed to using 'Content here, content here',
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
