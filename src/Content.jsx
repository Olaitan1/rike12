import React from 'react';
import Card from './Card';
import Visa from './Visa';
import Side from './Side';
import Home from './assets/home.png'


const Content = () => {
  return (
    <div className="grid grid-cols-3 m-7 gap-2 max-w-100 ">
    <div className="col-span-2  max-w-70 ">

      <Card />
       
    </div>
  
    
    <div className="col-span-1 bg-gray-500 rounded-md  py-6  ">
    
   
      <Side/>
    </div>
    

    <div className=' absolute top-36 right-1 z-30 rounded-lg'>    <button className='bg-blue-700 p-2 rounded-md'>$10,600</button></div>
  </div>
 
  );
};

export default Content;
