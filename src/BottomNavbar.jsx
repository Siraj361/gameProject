import React from "react";
import {
  FaHome,
  FaWallet,
  FaGift,
  FaUser,
  FaCoins,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNavbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const active = "text-cyan-300";
  const normal = "text-gray-400";


  return (
<div
  className="
  relative
  grid
  grid-cols-5
  h-full
  items-end
  px-3
  pb-2
"
>
  {/* HOME */}
  <button
    onClick={() => navigate("/")}
    className={`flex flex-col items-center justify-center ${
      location.pathname === "/" ? active : normal
    }`}
  >
    <FaHome className="text-[28px] sm:text-[30px]" />
    <span className="text-[10px] font-semibold mt-1">Home</span>
  </button>

  {/* DEPOSIT */}
  <button
    className={`flex flex-col items-center justify-center ${
      location.pathname === "/deposit" ? active : normal
    }`}
  >
    <FaWallet className="text-[28px] sm:text-[30px]" />
    <span className="text-[10px] font-semibold mt-1">Deposit</span>
  </button>

  {/* Empty space for center button */}
  <div></div>

  {/* ACTIVITY */}
  <button
    className={`flex flex-col items-center justify-center ${
      location.pathname === "/activity" ? active : normal
    }`}
  >
    <FaGift className="text-[28px] sm:text-[30px]" />
    <span className="text-[10px] font-semibold mt-1">Activity</span>
  </button>

  {/* PROFILE */}
  <button
    onClick={() => navigate("/profile")}
    className={`flex flex-col items-center justify-center ${
      location.pathname === "/profile" ? active : normal
    }`}
  >
    <FaUser className="text-[28px] sm:text-[30px]" />
    <span className="text-[10px] font-semibold mt-1">Me</span>
  </button>

  {/* Center Button */}
  <div className="absolute left-1/2 -top-8 -translate-x-1/2 -mt-5">
    <button
      className="
    
      h-[70px]
      w-[70px]
      rounded-full
      flex
      items-center
      justify-center
      border-4
      border-cyan-300
      bg-gradient-to-b
      from-cyan-300
      via-cyan-500
      to-blue-700
      shadow-[0_0_25px_rgba(0,255,255,.8)]
      
      "
    >
      <FaCoins className="text-[34px] text-white" />
    </button>

    <p className="mt-1 text-center text-[10px] font-semibold text-cyan-300">
      Agency
    </p>
  </div>
</div>
  );
}