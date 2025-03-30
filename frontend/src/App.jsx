import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MdOutlineSmokingRooms } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiHamburgerBold } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { FaTrophy } from "react-icons/fa";

function App() {
  
  return (
     
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <div className="navbar ">
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <MdOutlineSmokingRooms />
        </div>
        
      </div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <FaBook />
        </div>
        
      </div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <PiHamburgerBold />
        </div>
        
      </div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <CiTimer />
        </div>
        
      </div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
<FaTrophy />
        </div>
        
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
  
        {/* Main Layout */}
        <div className="grid grid-cols-3 gap-4 p-8">
          {/* Left Side - Classes, Projects, Assignments */}
          <div className="col-span-1 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Today's Classes</h2>
              <p>Math - 10:00 AM</p>
              <p>Science - 1:00 PM</p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Upcoming Projects</h2>
              <p>Project A - Due April 5</p>
              <p>Project B - Due April 10</p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Assignments</h2>
              <p>Assignment 1 - Due March 30</p>
              <p>Assignment 2 - Due April 2</p>
            </div>
          </div>
  
          {/* Right Side - Image */}
          <div className="col-span-2 flex justify-center items-center">
            <img src="https://via.placeholder.com/500" alt="Placeholder" className="rounded-lg shadow" />
          </div>
        </div>
  
        {/* Form at Bottom */}
        <div className="p-8 bg-white shadow mt-4">
          <h2 className="text-lg font-semibold mb-4">Add Project or Assignment</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="date" className="input input-bordered w-full" />
            <button className="btn btn-primary w-full">Add</button>
          </form>
        </div>
      </div>
    );

    
   
}

export default App
