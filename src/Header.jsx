import React from "react";

const Header = ({
  setOpenMenu,
  setLoginOpen,
  setSignupOpen,
}) => {
  return (
    <header
      className="
      w-full
      bg-gradient-to-b
      from-[#2b1609]
      via-[#1d1007]
      to-[#130905]
      border-b
      border-yellow-700/50
      sticky
      top-0
      z-40
    "
    >
      <div className="w-full flex items-center justify-between px-3 py-3">

        {/* Left */}
        <div className="flex items-center gap-3">

          {/* Menu */}
          <div className="relative">

            <button
              onClick={() => setOpenMenu(true)}
              className="
              w-12
              h-12
              md:w-14
              md:h-14
              rounded-full
              bg-[#3b2209]
              border-2
              border-yellow-600
              flex
              items-center
              justify-center
              shadow-lg
              hover:scale-105
              duration-300
            "
            >
              <div className="space-y-1">
                <span className="block w-5 h-[3px] bg-yellow-300 rounded"></span>
                <span className="block w-4 h-[3px] bg-yellow-300 rounded"></span>
                <span className="block w-5 h-[3px] bg-yellow-300 rounded"></span>
              </div>
            </button>

            <span
              className="
              absolute
              -top-1
              -right-1
              w-5
              h-5
              rounded-full
              bg-red-600
              text-white
              text-[10px]
              font-bold
              flex
              items-center
              justify-center
              border
              border-white
            "
            >
              1
            </span>

          </div>

          {/* Logo */}

          <div>

            <h1 className="leading-none font-black">

              <span className="text-yellow-400 text-3xl md:text-4xl">
                33RS
              </span>

              <span className="text-white text-lg md:text-xl">
                .com
              </span>

            </h1>

            <p className="text-[9px] text-yellow-200 tracking-[3px] uppercase">
              Gaming Platform
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-2">

          <button
            onClick={() => setLoginOpen(true)}
            className="
            px-4
            md:px-6
            py-2
            rounded-full
            bg-gradient-to-r
            from-[#ffb347]
            via-[#ff8c00]
            to-[#b85d00]
            border
            border-yellow-300
            text-white
            font-bold
            text-sm
            md:text-base
            hover:scale-105
            duration-300
          "
          >
            Log In
          </button>

          <button
            onClick={() => setSignupOpen(true)}
            className="
            px-4
            md:px-6
            py-2
            rounded-full
            border
            border-yellow-500
            bg-[#2d1a0d]
            text-yellow-300
            font-bold
            text-sm
            md:text-base
            hover:bg-[#5a3412]
            hover:text-white
            duration-300
          "
          >
            Sign Up
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;