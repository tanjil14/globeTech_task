const Login = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row mx-auto p-2 md:p-0 w-full py-10 h-screen bg-bgBlue">
      <div className="left text-center w-full md:w-[45%] mt-10">
        <h1 className="text-blue2 font-semibold text-3xl uppercase tracking-widest my-5">
          <span className="text-4xl">G</span>lobetech <br />
          <span className="text-4xl">C</span>ompany{" "}
          <span className="text-4xl">L</span>imited
        </h1>
        <p className="my-10 text-white text-[12px] tracking-widest">
          Make yourself digitalized & more efficient.
        </p>
      </div>
      <div className="right w-full bg-blue-300 flex flex-col items-center justify-center">
        <div className="form text-center bg-white py-5 px-2 w-full  md:w-4/5 lg:w-4/12">
          <h1 className="text-3xl text-gray-700 font-light">Welcome</h1>
          <p className="font-light text-[12px] mt-5">Sign in to your account</p>
          <form className="flex flex-col my-4 p-1 gap-5 ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="border-[1px] p-3 rounded-md border-gray-400 outline-none"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="border-[1px] p-3 rounded-md border-gray-400 outline-none"
            />
            <button className="bg-blue1 p-3 rounded-md text-white cursor-pointer" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
