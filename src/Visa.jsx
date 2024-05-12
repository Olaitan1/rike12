import React, { useState } from "react";
import Chip from "./assets/chip.png";

const CreditCard2 = () => {
  return (
    <div className=" shadow-7xl transition duration-400  hover:scale-105 px-7 py-5   flex flex-col justify-between h-48 w-64 ml-6  rounded-lg bg-gradient-to-tr from-blue-600 from-20% to-skyblue-500  from-30% to-yellow-200 to-70%">
      <div className="flex justify-between leading-3 items-center ">
        <img src={Chip} alt="Icon" className="w-5" />
        <h1 className="font-bold text-white">VISA</h1>
      </div>
      <div className="flex justify-around">
        <p>**** </p>
        <p>**** </p>
        <p>**** </p>
        <p>9546</p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold text-white">Alex Smith</p>
        <p className="font-bold text-white">07/21</p>
      </div>
    </div>
  );
};

export default CreditCard2;


