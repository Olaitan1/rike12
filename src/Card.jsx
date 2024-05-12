import React from 'react';
import Bell from './assets/bell.png';


const SimpleCard = () => {
  return (
    <div>
      <section className="grid md:grid-cols-4 lg:grid-cols-3 gap-5 ">

          <div className="flex items-center bg-white shadow rounded-lg max-w-50   h-28 ">
            
              <img src={Bell} alt="Icon" className="w-5" />
            
            <div className="flex flex-col">
              <span className="text-gray-300">VISITORS</span>
              <span className="font-bold">10,320</span>
            </div>
          </div>
          <div className="flex items-center bg-white shadow rounded-lg w-50 h-28">
            
              <img src={Bell} alt="Icon" className="w-5 " />
            
            <div className="flex flex-col">
              <span className="text-gray-300 ">CUSTOMERS</span>
              <span className="font-bold">4,628</span>
            </div>
          </div>
          <div className="flex items-center bg-red-500 shadow rounded-lg w-50 h-28">
            
              <img src={Bell} alt="Icon" className="w-5" />
            
            <div className="flex flex-col ">
              <span className="text-gray-300">ORDERS</span>
              <span className="font-bold">2,980</span>
            </div>
          </div>
        
      </section>
    </div>
  );
};

export default SimpleCard;
