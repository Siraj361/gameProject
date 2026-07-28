import React from "react";
import { FaCrown, FaGift, FaCoins, FaUserFriends } from "react-icons/fa";

export default function RewardCards() {
  const cards = [
    {
      title: "VIP MONTHLY SALARY",
      sub: "UP TO",
      amount: "5,000,000",
      icon: <FaCrown />,
      bg: "from-yellow-500 to-orange-600",
    },
    {
      title: "LUCKY ROULETTE",
      sub: "Get",
      amount: "1500",
      icon: <FaCoins />,
      bg: "from-green-500 to-yellow-500",
    },
    {
      title: "INVITE FRIEND",
      sub: "REWARD",
      amount: "RS 3000",
      icon: <FaUserFriends />,
      bg: "from-red-600 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#120500] p-5">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">

        {/* Left Side */}
        <div className="space-y-3">

          {cards.slice(0,2).map((item,index)=>(
            <div
              key={index}
              className={`
              relative overflow-hidden h-28 rounded-2xl
              bg-gradient-to-r ${item.bg}
              border border-yellow-300
              shadow-[0_0_20px_rgba(255,200,0,0.5)]
              flex items-center px-5
              `}
            >

              {/* Glow */}
              <div className="absolute w-20 h-20 bg-yellow-300 opacity-20 blur-2xl rounded-full left-5"></div>


              <div className="text-yellow-200 text-5xl mr-5">
                {item.icon}
              </div>


              <div className="text-white">

                <h2 className="font-black text-xl tracking-wide">
                  {item.title}
                </h2>

                <p className="text-sm font-bold">
                  {item.sub}
                </p>

                <h1 className="text-3xl font-extrabold text-yellow-300">
                  {item.amount}
                </h1>

              </div>


            </div>
          ))}


        </div>



        {/* Right Large Card */}

        <div
        className="
        relative overflow-hidden
        rounded-2xl
        h-[235px]
        bg-gradient-to-r from-red-700 via-orange-500 to-yellow-500
        border border-yellow-300
        shadow-[0_0_25px_rgba(255,200,0,0.6)]
        flex items-center
        p-6
        "
        >

          <div className="absolute top-0 right-0 text-yellow-200 opacity-30 text-9xl">
            <FaGift/>
          </div>


          <div>

            <div className="text-yellow-200 text-6xl mb-3">
              <FaGift/>
            </div>


            <h1 className="text-white text-3xl font-black">
              INVITE FRIEND
            </h1>

            <p className="text-white text-xl font-bold">
              REWARD
            </p>

            <h2 className="text-yellow-300 text-5xl font-black">
              RS 3000
            </h2>


          </div>


        </div>


      </div>


    </div>
  );
}