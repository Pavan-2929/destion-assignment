import React from "react";
import { CgProfile } from "react-icons/cg";
import { GrDashboard } from "react-icons/gr";
import { SlSettings } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {/* Large Screen Sidebar */}
      <div className="hidden md:block">
        <div className="flex">
          <div className="min-h-screen bg-gray-700 w-[18vw] text-white space-y-8 text-xl font-bold py-6">
            {/* Left-Side Navigation */}
            <div className="space-y-2">
              <NavLink
                to="/"
                className="flex items-center gap-x-2 pl-6 hover:bg-gray-600 py-3"
              >
                <GrDashboard className="size-5 mt-[2px]" />
                <p>Dashboard</p>
              </NavLink>
              <NavLink
                to="/setting"
                className="flex items-center gap-x-2 pl-6 hover:bg-gray-600 py-3"
              >
                <SlSettings className="size-5 mt-[2px]" />
                <p>Settings</p>
              </NavLink>
              <NavLink
                to="/profile"
                className="flex items-center gap-x-2 pl-6 hover:bg-gray-600 py-3"
              >
                <CgProfile className="size-5 mt-[2px]" />
                <p>Profile</p>
              </NavLink>
            </div>
          </div>
          <div className="bg-white min-h-screen min-w-[82vw]">
            {/* Header  */}
            <div className="flex h-[10vh]  justify-between items-center px-10 py-4 bg-gray-200 border-b border-gray-500">
              <p className="text-2xl font-bold">Assignment</p>
              <p className="font-bold text-zinc-700">
                Logged In as @{user && user.username}
              </p>
            </div>
            {/* Protected Pages */}

            <div className="px-10 bg-gray-200 h-[90vh] py-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen Sidebar */}
      <div className="md:hidden block relative">
        {/* Header  */}
        <div className="flex h-[10vh] w-[100vw] justify-between items-center px-4 py-4 bg-gray-200 border-b border-gray-500">
          <p className="text-2xl font-bold">Assignment</p>
          <p className="font-bold text-zinc-700">@{user && user.username}</p>
        </div>
        {/* Left-Side Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-400 border-t border-gray-500 flex justify-around items-center py-3 shadow-md">
          <NavLink to="/" className="flex flex-col items-center">
            <GrDashboard className="text-xl" />
          </NavLink>
          <NavLink to="/setting" className="flex flex-col items-center">
            <SlSettings className="text-xl" />
          </NavLink>
          <NavLink to="/profile" className="flex flex-col items-center">
            <CgProfile className="text-xl" />
          </NavLink>
        </div>
        {/* Protected Pages */}
        <div className="px-4 bg-gray-200 pb-20 py-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
