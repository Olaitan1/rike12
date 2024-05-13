import React from 'react';
import Chart from './assets/chart.svg';
import Credit from './assets/credit.svg';
import Wallet from './assets/wallet.svg';
import Money from './assets/money.svg';


const Sidebar = () => {
  return (
    <div className="pb- w-64 bg-indigo-900 flex flex-col ml-2 ">
      
      <div className="p-4">
      <img src={Money} alt="Logo"className="  w-5 "/>
      </div>

      <div className='flex justify-between mt-80'>
      <div className=" mt-60">
        <div className="p-3">
        <img src={Chart} alt="Icon"className="   w-5 hover:bg-blue-600"/>
        </div>
        <div className="p-3">
        <img src={Credit} alt="Icon"className=" w-5 hover:bg-blue-600"/>
        </div>
        <div className="p-3">
        <img src={Wallet} alt="Icon"className=" w-5 hover:bg-blue-600"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
