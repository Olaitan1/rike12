import React from 'react';
import Card from './Card';
import Visa from './Visa';
import Bag from './assets/bag.png';
import Netflix from './assets/netflix.png';
import Plus from './assets/plus.png';
import Taxi from './assets/taxi.png';
import Progress from 'react-circle-progress-bar'




const Side = () => {
    return (

    
   <div >
  <div className='mt-20 ml-10 mb-16 transform' style={{  top: '0', left: '0', borderRadius: '100%', width:'65%', height:'100%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)',  backgroundColor: '#FFFFFF',  }}>
  <Progress
    progress={38}
    strokeWidth={2}
    reduction={0.05}
    paddingTop={30}
    strokeColor={"#312E81"}
    
  />
</div>
    
    <div className='mt-30 mb-34'>
    <Visa/>
    </div>
    <div class="col-span-6 md:col-span-2 lg:col-span-1 xl:col-span-4 mt-36 ">
  <div class="container  ">
    
    <div className='flex justify-between mt-14 mb-7 '>
        <p><a href="#" class="font-bold ml-5 text-2xl">Transaction</a> </p>
        <div className='border border-2 rounded-lg bg-red-500 p-3 mr-7'><img src={Plus} alt="Icon" className="w-4  " /></div>
        
    </div>
    <div className=''>
    <div className='flex justify-between  mt-14'>
            
        <div className='flex gap-4'>
        <span className='border border-2 rounded-xl bg-white p-4 ml-5'><img src={Taxi} alt="Icon" className="w-4  " /></span>
           
    <div className="flex flex-col ">
              <span className="font-bold mr-6">Taxi</span>
              <span className="text-gray-400">01:21 PM</span>
            </div>
            </div> 
        <span class="mr-7">-$9.20</span>
        
    </div>
    
    <div className='flex justify-between  mt-10'>
            
        <div className='flex gap-4'>
        <span className='border border-2 rounded-xl bg-white p-3 ml-5'><img src={Bag} alt="Icon" className="w-4  " /></span>
           
    <div className="flex flex-col ">
              <span className="font-bold mr-6">Shopping</span>
              <span className="text-gray-400">11:15 AM</span>
            </div>
            </div> 
        <span class="mr-7">-$142.00</span>
        
    </div>
    <div className='flex justify-between  mt-10 '>
            
        <div className='flex gap-4 '>
        <span className='border border-2 rounded-xl bg-white p-3 ml-5'><img src={Netflix} alt="Icon" className="w-4  " /></span>
           
    <div className="flex flex-col ">
              <span className="font-bold mr-6">Netflix</span>
              <span className="text-gray-400">Jan 10, 2020</span>
            </div>
            </div> 
        <span class="mr-7">-$24.99</span>
        
    </div>
    </div>
  </div>
</div>

    </div>
    );
};
export default Side;
