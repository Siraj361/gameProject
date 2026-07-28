import React from "react";

const Header = ({ setOpenMenu }) => {
  return (
    <header className="w-full bg-gradient-to-r from-[#02152d] via-[#062f63] to-[#02152d] border-b border-blue-500/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div className="relative">

            <button
              onClick={() => setOpenMenu(true)}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-cyan-400 bg-[#08244a] flex items-center justify-center hover:scale-105 duration-300 shadow-lg"
            >
              <div className="space-y-1">
                <span className="block w-6 h-1 bg-cyan-300 rounded"></span>
                <span className="block w-4 h-1 bg-cyan-300 rounded"></span>
                <span className="block w-6 h-1 bg-cyan-300 rounded"></span>
              </div>
            </button>

            <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
              1
            </span>

          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold">
              <span className="text-cyan-400">33RS</span>
              <span className="text-white text-xl md:text-3xl">.com</span>
            </h1>

            <p className="text-cyan-200 text-[10px] md:text-xs tracking-[5px] uppercase">
              Gaming Platform
            </p>
          </div>

        </div>

        {/* Right */}

        <div className="flex gap-3">

          <button className="px-5 md:px-10 py-2 md:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold">
            Log In
          </button>

          <button className="px-5 md:px-10 py-2 md:py-3 rounded-full border-2 border-cyan-400 text-cyan-300 font-bold">
            Sign Up
          </button>

        </div>

      </div>

    </header>
  );
};

export default Header;