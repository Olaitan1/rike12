import React from "react";
import Clock from "./assets/clock.png";
import Favourite from "./assets/favourite.png";
import Video from "./assets/video.png";
import Arrow from "./assets/arrow.png";
import Bar from "./Bar"

const Profile = () => {
  return (
    <div>
      <div className="mt-8 flex gap-4 mr-8 space-x-0 space-y-2 md:space-x-4 md:space-y-0">
        <div className=" bg-white pt-4 shadow rounded-lg md:w-1/2  ">
          <Bar/>
        </div>

        <div className=" bg-white pt-4 px-4 shadow rounded-lg md:w-1/2 mb-20">
          <div className="flex items-center text-sm pt-12 ml-8 ">
            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="object-cover w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                alt=""
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p className="font-semibold">Lilly Donovan</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Business trainer
              </p>
            </div>
          </div>
          <div className="ml-10">
            <p className="font-bold w-2/3 mt-8">
              How to properly manage your personal budget?
            </p>
          </div>
          <div className="flex gap-2 mt-8 mr-16 ">
            <div className="flex gap-1 ml-10">
              <img src={Video} alt="Icon" className="w-5 h-5 mt-1" />
              <p className="font-bold">Video</p>
            </div>
            <div className="flex gap-1">
              <img src={Clock} alt="Icon" className="w-5 h-5 mt-1" />
              <p className="font-bold">15 mins </p>
            </div>
            <div className="flex gap-1">
              <img src={Favourite} alt="Icon" className="w-5 h-5 mt-1" />
              <p className="font-bold">12 likes</p>
            </div>
          </div>
          <div className="flex gap-12 mt-10 ml-10 ">
            <p className="font-semibold">5 days ago</p>
            <button className=" flex gap-1 rounded-3xl bg-indigo-900 px-7 py-3 text-white">Connect <span><img src={Arrow} alt="Icon" className="w-5 h-5 mt-1" /></span></button>

            </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
