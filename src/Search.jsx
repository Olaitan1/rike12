import React from 'react';
import Look from './assets/search.png'

const Search = () => {
  return (
    <div >
      <div className="flex items-center w-96 gap-4  h-8 rounded-lg focus-within:shadow-lg bg-gray-100 overflow-hidden">
     <div>
      <img src={Look} alt="Icon" className="w-10 h-5 mt-1 ml-3"/>
        </div>

        <input
          className=" w-96 text-md text-gray-700 bg-gray-100 py-3"
          type="text"
          id="search"
          placeholder="Search"
        />
      </div>
      </div>
  );
};

export default Search;
