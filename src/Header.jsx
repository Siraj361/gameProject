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
      from-[#061b3a]
      via-[#071426]
      to-[#020617]
      border-b
      border-cyan-700/50
      sticky
      top-0
      z-40
      "
    >

      <div
        className="
        max-w-[430px]
        mx-auto
        flex
        items-center
        justify-between
        px-3
        py-3
        "
      >

        {/* Left Side */}
        <div className="flex items-center gap-2">


          {/* Menu Button */}
          <div className="relative">

            <button
              onClick={() => setOpenMenu(true)}
              className="
              w-10
              h-10
              rounded-full

              bg-[#020617]

              border-2
              border-cyan-500

              flex
              items-center
              justify-center

              shadow-[0_0_15px_rgba(0,200,255,.4)]

              hover:scale-105
              duration-300
              "
            >

              <div className="space-y-1">

                <span
                  className="
                  block
                  w-5
                  h-[3px]
                  bg-cyan-300
                  rounded
                  "
                />

                <span
                  className="
                  block
                  w-4
                  h-[3px]
                  bg-cyan-300
                  rounded
                  "
                />

                <span
                  className="
                  block
                  w-5
                  h-[3px]
                  bg-cyan-300
                  rounded
                  "
                />

              </div>

            </button>


            {/* Notification */}
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

              <span
                className="
                text-cyan-400
                text-2xl
                "
              >
                33RS
              </span>


              <span
                className="
                text-white
                text-base
                "
              >
                .com
              </span>


            </h1>


            <p
              className="
              text-[8px]

              text-cyan-200

              tracking-[3px]

              uppercase
              "
            >
              Gaming Platform
            </p>


          </div>


        </div>





        {/* Right Side Buttons */}
        <div className="flex items-center gap-1.5">



          {/* Login */}
          <button
            onClick={() => setLoginOpen(true)}
            className="
            px-3
            py-2

            rounded-full

            bg-gradient-to-r

            from-cyan-400
            via-blue-500
            to-blue-700

            border
            border-cyan-300

            text-white

            font-bold

            text-xs

            shadow-[0_0_15px_rgba(0,200,255,.4)]

            hover:scale-105

            duration-300
            "
          >
            Log In
          </button>





          {/* Signup */}
          <button
            onClick={() => setSignupOpen(true)}
            className="
            px-3
            py-2

            rounded-full

            border
            border-cyan-500

            bg-[#020617]

            text-cyan-300

            font-bold

            text-xs

            hover:bg-cyan-700

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