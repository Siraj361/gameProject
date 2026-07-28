import React from "react";


const BottomNavbar = ({ setLoginOpen }) => {

  return (

    <div
      className="
      absolute
      bottom-0
      left-0
      w-full
      z-50
      "
    >


      <div
        className="
        bg-gradient-to-t
        from-[#020617]
        via-[#071426]
        to-[#061b3a]

        border-t
        border-cyan-700

        rounded-t-3xl

        shadow-[0_-5px_25px_rgba(0,200,255,.4)]
        "
      >


        <div
          className="
          flex
          justify-around
          items-end
          h-24
          "
        >




          {/* HOME */}

          <div
            className="
            flex
            flex-col
            items-center
            text-cyan-300
            cursor-pointer
            "
          >

            <span className="text-3xl">
              🏠
            </span>

            <p className="text-sm">
              Home
            </p>

          </div>







          {/* DEPOSIT */}

          <div
            className="
            flex
            flex-col
            items-center
            text-blue-400
            cursor-pointer
            "
          >

            <span className="text-3xl">
              👛
            </span>

            <p className="text-sm">
              Deposit
            </p>

          </div>








          {/* CENTER BUTTON */}

          <div
            className="
            relative
            -mt-10
            "
          >

            <div
              className="
              w-20
              h-20

              rounded-full

              bg-gradient-to-b
              from-cyan-300
              via-blue-500
              to-blue-800

              border-4
              border-cyan-400

              flex
              items-center
              justify-center

              shadow-[0_0_30px_rgba(0,200,255,.8)]
              "
            >

              <span className="text-4xl">
                💸
              </span>


            </div>



            <p
              className="
              text-center
              text-cyan-300
              text-sm
              "
            >
              Agency
            </p>


          </div>







          {/* ACTIVITY */}

          <div
            className="
            flex
            flex-col
            items-center
            text-blue-400
            cursor-pointer
            "
          >

            <span className="text-3xl">
              🎁
            </span>


            <p className="text-sm">
              Activity
            </p>


          </div>







          {/* ME */}

          <div

            onClick={() => setLoginOpen(true)}

            className="
            flex
            flex-col
            items-center
            text-blue-400
            cursor-pointer
            "
          >

            <span className="text-3xl">
              👤
            </span>


            <p className="text-sm">
              Me
            </p>


          </div>





        </div>


      </div>


    </div>

  );

};


export default BottomNavbar;