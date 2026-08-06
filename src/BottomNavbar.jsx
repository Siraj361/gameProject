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
  const normal =
    "text-slate-400 hover:text-cyan-200 transition-colors";

  return (
    <div
      className="
        relative
        w-full
        h-[92px]
        
        border-t
        border-cyan-400/20
        bg-gradient-to-b
        from-[#123b6a]
        via-[#0b2b52]
        to-[#061729]
        backdrop-blur-xl
        shadow-[0_-6px_18px_rgba(0,120,255,.18)]
      "
    >
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-300/30" />

      <div className="grid grid-cols-5 h-full items-center px-4">

        {/* Home */}
        <button
          onClick={() => navigate("/")}
          className={`flex flex-col items-center justify-center ${
            location.pathname === "/" ? active : normal
          }`}
        >
          <FaHome className="text-[31px]" />
          <span className="mt-1 text-[12px] font-semibold">
            Home
          </span>
        </button>

        {/* Deposit */}
        <button
          className={`flex flex-col items-center justify-center ${
            location.pathname === "/deposit"
              ? active
              : normal
          }`}
        >
          <FaWallet className="text-[31px]" />
          <span className="mt-1 text-[12px] font-semibold">
            Deposit
          </span>
        </button>

        {/* Center Space */}
        <div />

        {/* Activity */}
        <button
          className={`flex flex-col items-center justify-center ${
            location.pathname === "/activity"
              ? active
              : normal
          }`}
        >
          <FaGift className="text-[31px]" />
          <span className="mt-1 text-[12px] font-semibold">
            Activity
          </span>
        </button>

        {/* Profile */}
        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center justify-center ${
            location.pathname === "/profile"
              ? active
              : normal
          }`}
        >
          <FaUser className="text-[31px]" />
          <span className="mt-1 text-[12px] font-semibold">
            Me
          </span>
        </button>
      </div>

      {/* Center Agency Button */}
      <div className="absolute left-1/2 -top-9 -translate-x-1/2">

        <button
          className="
            flex
            h-[82px]
            w-[82px]
            items-center
            justify-center
            rounded-full
            border-[5px]
            border-[#123b6a]
            bg-gradient-to-b
            from-cyan-300
            via-sky-500
            to-blue-700
            shadow-lg
            hover:scale-105
            transition-transform
          "
        >
          <FaCoins className="text-[40px] text-white" />
        </button>

        <p className="mt-1 text-center text-[12px] font-bold text-cyan-300">
          Agency
        </p>

      </div>
    </div>
  );
}