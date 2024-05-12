import React from 'react';

const Search = () => {
  return (
    <div className="  ">
      <div className="flex items-center  h-8 rounded-lg focus-within:shadow-lg bg-gray-100 overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          className=" w-full text-md text-gray-700 bg-gray-100 "
          type="text"
          id="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
