import React from "react";
import laptop from "./assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto">
        <img src={laptop} alt="/" />
        <div className="mt-24">
          <p className="font-bold text-[#00df98]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-3xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="font-medium mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ut
            omnis doloribus dolorum, ipsum est cupiditate! Ipsum facilis eum,
            vitae doloribus voluptate aliquam unde vero quisquam odit aperiam.
            Quos, sequi!
          </p>
          <button className="bg-black text-[#00df98] pl-8 pr-8 pt-2 pb-2 mt-4 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
