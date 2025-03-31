import React from "react";
import dashboardIcon from "../assets/dashboard.png";
import profileIcon from "../assets/public_profile.png";
import availabilityIcon from "../assets/Calendar.png";
import interviewsIcon from "../assets/interviews.png";
import userImage from "../assets/Alden.png";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white flex flex-col fixed p-5 font-poppins shadow-md">
      {/* Logo Section */}
      <div className="bg-[#F1F2FD] p-3 flex justify-center items-center w-full h-[60px] border-b border-gray-300">
        <h2 className="font-sixtyfour text-base font-bold text-black tracking-wide">OpportunityHub</h2>
      </div>

      {/* Navigation Menu */}
      <ul className="mt-5 space-y-1">
        <li className="flex items-center p-3 rounded-md text-gray-600 hover:bg-gray-100 transition">
          <img src={dashboardIcon} alt="Dashboard" className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Dashboard</span>
        </li>
        <li className="flex items-center p-3 rounded-md text-gray-600 hover:bg-gray-100 transition">
          <img src={profileIcon} alt="My Public Profile" className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">My Public Profile</span>
        </li>
        <li className="flex items-center p-3 rounded-md text-gray-600 hover:bg-gray-100 transition">
          <img src={availabilityIcon} alt="My Availability" className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">My Availability</span>
        </li>
        
        <li className="flex items-center p-3 rounded-md bg-[#E9EBFD] text-[#3F51B5] font-semibold border-l-4 border-[#3F51B5] shadow-sm">
          <img src={interviewsIcon} alt="Interviews" className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Interviews</span>
        </li>
      </ul>

      {/* User Profile Section */}
      <div className="absolute bottom-4 left-4 right-4 bg-[#F1F2FD] p-3 flex items-center rounded-md border border-gray-200">
        <img src={userImage} alt="User" className="w-8 h-8 rounded-full mr-2" />
        <div className="flex flex-col">
          <h4 className="text-xs font-semibold text-black">Alden Olivero</h4>
          <p className="text-[10px] text-gray-500">aldenolivero12@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
