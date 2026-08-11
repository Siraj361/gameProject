import React from "react";
import { useNavigate } from "react-router-dom";

import Activity1 from "./assets/Activity1.png";
import Activity2 from "./assets/Activity2.png";
import Activity3 from "./assets/Activity3.png";

export default function LimitedTimeActivities() {
  const navigate = useNavigate();

  const activities = [
    {
      title: "Invitation bonus",
      image: Activity1,
      icon: Activity1,
    },
    {
      title: "Invitation bonus",
      image: Activity2,
      icon: Activity2,
    },
    {
      title: "Invitation bonus",
      image: Activity3,
      icon: Activity3,
    },
    {
      title: "Lucky Wheel",
      image: Activity1,
      icon: Activity1,
      badge: "4",
    },
    {
      title: "VIP bonus",
      image: Activity2,
      icon: Activity2,
    },
    {
      title: "Site-wide rebate",
      image: Activity3,
      icon: Activity3,
    },
    {
      title: "Sign-in bonus",
      image: Activity1,
      icon: Activity1,
    },
    {
      title: "Daily relief fund",
      image: Activity2,
      icon: Activity2,
    },
    {
      title: "Agent commission",
      image: Activity3,
      icon: Activity3,
    },
    {
      title: "Redemption code",
      image: Activity1,
      icon: Activity1,
    },
  ];

  return (
    <>
      {/* =====================================================
          PAGE
      ====================================================== */}

      <div className="fixed inset-0 z-40 w-full bg-[#020B18] text-white">
        {/* 540px Container */}
        <div className="mx-auto flex h-full w-full max-w-[540px] flex-col bg-gradient-to-b from-[#020B18] via-[#041A34] to-[#020817]">

          {/* =================================================
              HEADER
          ================================================= */}

          <header
            className="
              relative
              z-50
              flex
              h-[74px]
              min-h-[74px]
              shrink-0
              items-center
              justify-center
              border-b
              border-cyan-400/25
              bg-[#031426]
            "
          >
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="
                absolute
                left-4
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-cyan-300/40
                bg-[#083053]
                text-[30px]
                font-light
                leading-none
                text-cyan-100
                shadow-[0_0_15px_rgba(0,200,255,0.15)]
                transition
                duration-150
                active:scale-90
              "
            >
              ‹
            </button>

            {/* Title */}
            <h1
              className="
                px-14
                text-center
                text-[22px]
                font-bold
                tracking-wide
                text-white
              "
            >
              Limited-Time Activities
            </h1>
          </header>

          {/* =================================================
              SCROLL AREA
          ================================================= */}

          <div
            className="
              activities-scroll
              min-h-0
              flex-1
              overflow-x-hidden
              overflow-y-auto
              overscroll-contain
              px-3
              pt-4
              pb-[125px]
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Cards */}
            <div className="flex w-full flex-col gap-5">
              {activities.map((item, index) => (
                <ActivityCard
                  key={index}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          HIDE SCROLLBAR
      ====================================================== */}

      <style>{`
        .activities-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .activities-scroll::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .activities-scroll::-webkit-scrollbar-track {
          display: none;
        }

        .activities-scroll::-webkit-scrollbar-thumb {
          display: none;
        }
      `}</style>
    </>
  );
}

/* =========================================================
   ACTIVITY CARD
========================================================= */

function ActivityCard({ item }) {
  return (
    <div
      className="
        w-full
        shrink-0
        overflow-hidden
        rounded-[22px]
        border
        border-cyan-300/40
        bg-gradient-to-b
        from-[#08213B]
        via-[#061729]
        to-[#03101C]
        shadow-[0_0_16px_rgba(0,180,255,0.12)]
      "
    >
      {/* =================================================
          BANNER
      ================================================= */}

      <div
        className="
          relative
          m-[2px]
          h-[150px]
          overflow-hidden
          rounded-[18px]
          border
          border-cyan-300/20
          bg-gradient-to-r
          from-[#0668A8]
          via-[#1395D6]
          to-[#06406E]
        "
      >
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="
              h-full
              w-full
              object-cover
            "
          />
        )}
      </div>

      {/* =================================================
          BOTTOM ROW
      ================================================= */}

      <div
        className="
          flex
          min-h-[84px]
          w-full
          items-center
          gap-3
          px-3
          py-3
        "
      >
        {/* =================================================
            ICON
        ================================================= */}

        <div className="relative shrink-0">
          <div
            className="
              flex
              h-[62px]
              w-[62px]
              items-center
              justify-center
              overflow-hidden
              rounded-[14px]
              border
              border-cyan-300/40
              bg-gradient-to-br
              from-[#0C6DA6]
              to-[#06355A]
              shadow-[inset_0_0_12px_rgba(0,200,255,0.12)]
            "
          >
            {item.icon ? (
              <img
                src={item.icon}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            ) : (
              <span
                className="
                  text-[27px]
                  text-cyan-200
                  drop-shadow-[0_0_7px_rgba(0,220,255,0.35)]
                "
              >
                ✦
              </span>
            )}
          </div>

          {/* =================================================
              BADGE
          ================================================= */}

          {item.badge && (
            <div
              className="
                absolute
                -right-2
                -top-2
                flex
                h-[25px]
                min-w-[25px]
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                bg-red-600
                px-1
                text-[12px]
                font-bold
                text-white
                shadow-[0_0_8px_rgba(255,0,0,0.45)]
              "
            >
              {item.badge}
            </div>
          )}
        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <div className="min-w-0 flex-1">
          <h2
            className="
              truncate
              text-[19px]
              font-bold
              text-white
            "
          >
            {item.title}
          </h2>
        </div>

        {/* =================================================
            BUTTON
        ================================================= */}

        <button
          className="
            shrink-0
            rounded-[14px]
            border
            border-cyan-200/40
            bg-gradient-to-b
            from-[#11A4F2]
            via-[#0A7CC0]
            to-[#07548B]
            px-4
            py-3
            text-[15px]
            font-semibold
            text-white
            shadow-[0_4px_12px_rgba(0,160,240,0.20)]
            transition
            duration-150
            active:scale-95
          "
        >
          In Progress
        </button>
      </div>
    </div>
  );
}