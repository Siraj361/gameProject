import React from "react";
import {
  FaCrown,
  FaGift,
  FaCoins,
  FaUserFriends,
} from "react-icons/fa";

export default function RewardCards() {
  return (
    <div className="w-full bg-[#020617] px-3 py-3">

      <div className="mx-auto grid max-w-[540px] grid-cols-3 gap-3">

        {/* LEFT */}

        <div className="col-span-2 flex flex-col gap-3">

          {/* VIP */}

          <div className="flex h-[92px] items-center rounded-2xl bg-gradient-to-r from-[#1456a0] to-[#0c8cd6] px-4">

            <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
              <FaCrown className="text-3xl text-yellow-300" />
            </div>

            <div>

              <p className="text-[11px] font-semibold tracking-wide text-cyan-100">
                VIP MONTHLY SALARY
              </p>

              <p className="mt-1 text-[10px] text-cyan-200">
                Up To
              </p>

              <h2 className="text-[24px] font-black text-white">
                Rs 5,000,000
              </h2>

            </div>

          </div>

          {/* LUCKY */}

          <div className="flex h-[92px] items-center rounded-2xl bg-gradient-to-r from-[#2547b5] to-[#1283d8] px-4">

            <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
              <FaCoins className="text-3xl text-yellow-300" />
            </div>

            <div>

              <p className="text-[11px] font-semibold tracking-wide text-cyan-100">
                LUCKY ROULETTE
              </p>

              <p className="mt-1 text-[10px] text-cyan-200">
                Win Up To
              </p>

              <h2 className="text-[24px] font-black text-white">
                Rs 1,500
              </h2>

            </div>

          </div>

        </div>

        {/* RIGHT */}
{/* INVITE REWARD */}

<div
  className="
  relative
  h-[197px]
  rounded-2xl
  bg-gradient-to-b
  from-[#1d5eb5]
  via-[#1379ca]
  to-[#0ba3dd]
  overflow-hidden
  flex
  flex-col
  items-center
  justify-between
  py-5
  px-3
  "
>

  {/* Background Circles */}

  <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/10"></div>

  <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10"></div>

  {/* Icon */}

  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20">

    <FaUserFriends className="text-[30px] text-yellow-300" />

  </div>

  {/* Text */}

  <div className="relative text-center">

    <p className="text-xs font-semibold tracking-wider text-cyan-100">
      INVITE
    </p>

    <h3 className="text-lg font-extrabold text-white">
      Reward
    </h3>

    <p className="mt-2 text-[24px] font-black text-yellow-300">
      Rs 3000
    </p>

  </div>

  {/* Button */}

  <button
    className="
    relative
    w-full
    rounded-full
    bg-white
    py-2
    text-sm
    font-bold
    text-[#1565C0]
    active:scale-95
    "
  >
    Invite Now
  </button>

</div>

      </div>

    </div>
  );
}