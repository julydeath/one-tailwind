import React from "react";
import Single from "./assets/single.png";
import Double from "./assets/double.png";
import Triple from "./assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-100">
          <img
            className="w-20 mx-auto bg-white mt-[-3rem]"
            src={Single}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-2xl font-bold text-center">$149</p>
          <div className="m-4">
            <p className="text-center font-semibold p-2 border-t">
              500 GB Storage
            </p>
            <p className="text-center font-semibold p-2 border-t">
              1 Granted User
            </p>
            <p className="text-center font-semibold p-2 border-t border-b">
              Send up to 2 GB
            </p>
          </div>
          <button className="bg-[#00df98] w-[200px] mx-auto p-2 rounded-lg font-semibold">
            Start Trail
          </button>
        </div>

        {/* this is second */}

        <div className="w-full bg-green-100 shadow-xl flex flex-col p-4 my-6 md:my-0 rounded-lg hover:scale-105 duration-100">
          <img
            className="w-20 mx-auto bg-transparent mt-[-3rem]"
            src={Double}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Patnership</h2>
          <p className="text-2xl font-bold text-center">$199</p>
          <div className="m-4">
            <p className="text-center font-semibold p-2 border-t">
              1 TB Storage
            </p>
            <p className="text-center font-semibold p-2 border-t">
              3 Granted User
            </p>
            <p className="text-center font-semibold p-2 border-t border-b">
              Send up to 10 GB
            </p>
          </div>
          <button className="bg-black text-[#00df98] w-[200px] mx-auto p-2 rounded-lg font-semibold">
            Start Trail
          </button>
        </div>

        {/* this is third card */}

        <div className="w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-100">
          <img
            className="w-20 mx-auto bg-white mt-[-3rem]"
            src={Triple}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-2xl font-bold text-center">$299</p>
          <div className="m-4">
            <p className="text-center font-semibold p-2 border-t">
              5TB GB Storage
            </p>
            <p className="text-center font-semibold p-2 border-t">
              10 Granted User
            </p>
            <p className="text-center font-semibold p-2 border-t border-b">
              Send up to 20 GB
            </p>
          </div>
          <button className="bg-[#00df98] w-[200px] mx-auto p-2 rounded-lg font-semibold">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
