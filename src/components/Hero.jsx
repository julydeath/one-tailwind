import React from "react";
// import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-xl text-[#00df98] mb-1">
          Hi, This is manoj
        </p>
        <div className="bg-gradient-to-r from-green-200 to-green-500 h-0.5 w-[400px] mx-auto"></div>
        <h1 className="md:text-4xl sm:text-2xl text-xl font-bold mt-3 pt-3 ">
          Small React and Tailwind project
        </h1>
        <div className="flex mx-auto p-4 text-xl">
          <p className="text-gray-500">Tech stack used -</p>
          {/* <Typed
            className="text-[#00df98] ml-1 font-semibold"
            strings={["React", "Tailwindcss", "Vercel"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed> */}
          <p className="text-[#00df98] ml-1 font-semibold">React</p>
        </div>
        <button className="bg-[#00df98] m-4 pt-2 pb-2 rounded-md text-xl w-[300px] mx-auto text-black font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
