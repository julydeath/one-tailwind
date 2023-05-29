import React from "react";

const NewLetter = () => {
  return (
    <div className="w-full text-white py-4">
      <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto">
        <div className="m-14">
          <h1 className="text-xl md:text-2xl font-bold">
            Want tips & trick to optimize your flow?
          </h1>
          <p>signup to our newletter any stay update</p>
        </div>
        <div className="m-14">
          <input
            className="rounded-md border border-slate-300 py-1.5 px-4 text-black"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-[#00df98] rounded-md py-1.5 px-6 mt-2 md:ml-2 md:mt-0 text-black">
            Notify me
          </button>
          <p className="mt-2 text-xs">
            we care the protection of your data.Read our
            <div className="text-[#00df98] underline">Privacy Policy</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
