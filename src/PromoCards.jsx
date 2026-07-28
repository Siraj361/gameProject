import React from "react";
import { FaCrown, FaGift, FaCoins, FaUserFriends } from "react-icons/fa";

export default function RewardCards() {
  return (
    <div className="bg-[#020617] p-3">

      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">


        {/* LEFT SIDE */}
        <div className="col-span-2 space-y-2">


          {/* VIP */}
          <div className="
          h-20
          rounded-xl
          bg-gradient-to-r from-blue-700 to-cyan-500
          border border-cyan-300
          flex items-center
          px-2
          overflow-hidden
          ">

            <FaCrown 
            className="text-yellow-300 text-3xl mr-2"
            />

            <div className="text-white">

              <h2 className="text-[10px] font-black">
                VIP MONTHLY SALARY
              </h2>

              <p className="text-[9px]">
                UP TO
              </p>

              <h1 className="text-lg font-black text-yellow-300">
                5,000,000
              </h1>

            </div>

          </div>




          {/* LUCKY */}

          <div className="
          h-20
          rounded-xl
          bg-gradient-to-r from-indigo-700 to-blue-500
        border border-cyan-300
          
          flex items-center
          px-2
          ">


            <FaCoins
            className="text-yellow-300 text-3xl mr-2"
            />


            <div className="text-white">

              <h2 className="text-[10px] font-black">
                LUCKY ROULETTE
              </h2>

              <p className="text-[9px]">
                GET
              </p>

              <h1 className="text-lg font-black text-yellow-300">
                1500
              </h1>

            </div>


          </div>


        </div>






        {/* RIGHT CARD */}

        <div className="
        col-span-1
        h-[164px]
        rounded-xl
        bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-400
        border border-cyan-300
        
        flex items-center
        justify-center
        text-center
        p-2
        relative
        overflow-hidden
        ">


          <FaGift
          className="
          absolute
          text-white/10
          text-8xl
          "
          />


          <div className="relative">

            <FaUserFriends
            className="
            text-yellow-300 
            text-3xl 
            mx-auto mb-2
            "
            />


            <h1 className="
            text-white
            text-xs
            font-black
            ">
              INVITE
            </h1>


            <h2 className="
            text-white
            text-xs
            font-bold
            ">
              REWARD
            </h2>


            <h3 className="
            text-yellow-300
            text-xl
            font-black
            ">
              RS 3000
            </h3>


          </div>


        </div>


      </div>

    </div>
  );
}