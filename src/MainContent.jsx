import React from 'react';
import Sidebar from './Sidebar';
import Search from './Search'
import Content from './Content';
import Bell from './assets/bell.png';
import Man from './assets/man.png';
import Home from './assets/home.png';



const MainContent = () => {
  return (
    
<div>
 
      <div className="relative flex  ">
        <div className=" absolute  w-24 bg-blue-500 z-40 fixed left-0 top-0 rounded-tl-3xl rounded-bl-3xl overflow-hidden">
            <Sidebar/>
        </div>
       
        <div className="h-screen w-screen ml-16  bg-gray-50 rounded-3xl z-50">
        <div className=' relative top-36 right-2 rounded-lg'><img src={Home} alt="Image" className="w-5 rounded-md"/></div>
        <div className='flex flex-row justify-between items-center max-w-screen-xl mt-3 '>
  <div className='flex justify between gap-10'>
    <div className='w-80  ml-7  '><Search/></div>
  
    <div className='flex gap-2 justify-between ml-5 '>
        <div><a href="" className='font-bold'>Feedback</a></div>
        <div><a href="" className='font-bold'>Contacts</a></div>
        <div><a href="" className='font-bold'>Help</a></div>
    </div>
    </div>

    <div className='flex gap-4 mr-8'>
        <img src={Bell} alt="Icon" className="w-5"/>
        <img src={Man} alt="Icon" className="w-10 h-5 mt-1"/>
    </div>
 
</div>
        <div><Content/></div>
        </div>
        

      </div>
    </div>
    
 
  );
};

export default MainContent;
