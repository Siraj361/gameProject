import React from "react";

const BottomNavbar = ({ setLoginOpen }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">

      <div
        className="bg-gradient-to-t
        from-[#3b2209]
        via-[#5b320d]
        to-[#7d4b14]
        border-t
        border-yellow-700
        rounded-t-3xl
        shadow-[0_-5px_25px_rgba(255,170,0,.4)]"
      >
        <div className="relative flex justify-around items-end h-24">

          {/* Home */}

          <div className="flex flex-col items-center text-yellow-300 pt-3 cursor-pointer hover:text-white duration-300">
            <span className="text-3xl">🏠</span>
            <p className="text-sm font-semibold mt-1">Home</p>
          </div>

          {/* Deposit */}

          <div className="flex flex-col items-center text-yellow-700 pt-3 cursor-pointer hover:text-white duration-300">
            <span className="text-3xl">👛</span>
            <p className="text-sm mt-1">Deposit</p>
          </div>

          {/* Agency */}

          <div className="relative -mt-10 cursor-pointer">

            <div
              className="w-24 h-24 rounded-full
              bg-gradient-to-b
              from-yellow-300
              to-orange-600
              border-4
              border-yellow-600
              shadow-[0_0_30px_rgba(255,180,0,.8)]
              flex
              items-center
              justify-center
              hover:scale-105
              duration-300"
            >
              <span className="text-5xl">💸</span>
            </div>

            <span
              className="absolute top-0 right-2
              w-7 h-7
              rounded-full
              bg-red-600
              text-white
              text-sm
              flex
              items-center
              justify-center
              border-2
              border-white"
            >
              1
            </span>

            <p className="text-center text-yellow-300 font-semibold mt-1">
              Agency
            </p>

          </div>

          {/* Activity */}

          <div className="relative flex flex-col items-center text-yellow-700 pt-3 cursor-pointer hover:text-white duration-300">

            <span className="text-3xl">🎁</span>

            <span
              className="absolute top-2 right-3
              w-6 h-6
              rounded-full
              bg-red-600
              text-white
              text-xs
              flex
              items-center
              justify-center
              border
              border-white"
            >
              1
            </span>

            <p className="text-sm mt-1">Activity</p>

          </div>

          {/* Me */}

          <div
            onClick={() => setLoginOpen(true)}
            className="flex flex-col items-center text-yellow-700 pt-3 cursor-pointer hover:text-white duration-300"
          >
            <span className="text-3xl">👤</span>
            <p className="text-sm mt-1">Me</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BottomNavbar;