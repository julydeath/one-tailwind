import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="text-white flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto">
      <h1 className="text-3xl font-bold text-[#00df98]">REACT.</h1>
      <ul className="sm-none md-none hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="block md:hidden">
        {menu ? (
          <AiOutlineClose size={20} onClick={() => setMenu(!menu)} />
        ) : (
          <AiOutlineMenu size={20} onClick={() => setMenu(!menu)} />
        )}
      </div>

      <div
        className={
          menu
            ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl ml-4 mt-10 text-[#00df98]">React.</h1>
        <ul className="pt-6 uppercase">
          <li className="m-4 border-b border-gray-600">Company</li>
          <li className="m-4 border-b border-gray-600">Resources</li>
          <li className="m-4 border-b border-gray-600">About</li>
          <li className="m-4 border-b border-gray-600">Contact</li>
          <li className="m-4 border-b border-gray-600">Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
