import { MdOutlineSmokingRooms } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiHamburgerBold } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { FaTrophy } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
  
    return (
       
<div className="min-h-[20px] bg-gray-100">
{/* Navbar */}
          <div className="navbar ">
          <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1" onClick={() => navigate('/')}>
      <a className="btn btn-ghost text-xl">study.eat.repeat</a>
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
   
           
          <li><a>Login/Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
          </div>
    
          
        </div>
      );
  
      
     
  }
  
  export default Navbar
  