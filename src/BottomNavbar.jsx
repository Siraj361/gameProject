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
        max-w-[540px]
        mx-auto
        h-[82px]
        sm:h-[92px]
        border-t
        border-cyan-400/20
        bg-gradient-to-b
        from-[#123b6a]
        via-[#0b2b52]
        to-[#061729]
        backdrop-blur-xl
        shadow-[0_-6px_18px_rgba(0,120,255,.18)]
        overflow-visible
      "
    >
      {/* Top Border Glow */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-[1px]
          bg-cyan-300/30
        "
      />

      {/* ================= NAV ITEMS ================= */}

      <div
        className="
          grid
          grid-cols-5
          h-full
          items-center
          px-2
          sm:px-4
        "
      >
        {/* ================= HOME ================= */}

        <button
          onClick={() => navigate("/")}
          className={`
            flex
            flex-col
            items-center
            justify-center
            min-w-0
            ${
              location.pathname === "/"
                ? active
                : normal
            }
          `}
        >
          <FaHome
            className="
              text-[25px]
              sm:text-[31px]
            "
          />

          <span
            className="
              mt-0.5
              sm:mt-1
              text-[10px]
              sm:text-[12px]
              font-semibold
            "
          >
            Home
          </span>
        </button>

        {/* ================= DEPOSIT ================= */}

        <button
          onClick={() => navigate("/deposit")}
          className={`
            flex
            flex-col
            items-center
            justify-center
            min-w-0
            ${
              location.pathname === "/deposit"
                ? active
                : normal
            }
          `}
        >
          <FaWallet
            className="
              text-[25px]
              sm:text-[31px]
            "
          />

          <span
            className="
              mt-0.5
              sm:mt-1
              text-[10px]
              sm:text-[12px]
              font-semibold
            "
          >
            Deposit
          </span>
        </button>

        {/* ================= CENTER SPACE ================= */}

        <div />

        {/* ================= ACTIVITY ================= */}

        <button
          onClick={() => navigate("/limited-time-activities")}
          className={`
            flex
            flex-col
            items-center
            justify-center
            min-w-0
            ${
              location.pathname === "/limited-time-activities"
                ? active
                : normal
            }
          `}
        >
          <FaGift
            className="
              text-[25px]
              sm:text-[31px]
            "
          />

          <span
            className="
              mt-0.5
              sm:mt-1
              text-[10px]
              sm:text-[12px]
              font-semibold
            "
          >
            Activity
          </span>
        </button>

        {/* ================= PROFILE ================= */}

        <button
          onClick={() => navigate("/profile")}
          className={`
            flex
            flex-col
            items-center
            justify-center
            min-w-0
            ${
              location.pathname === "/profile"
                ? active
                : normal
            }
          `}
        >
          <FaUser
            className="
              text-[25px]
              sm:text-[31px]
            "
          />

          <span
            className="
              mt-0.5
              sm:mt-1
              text-[10px]
              sm:text-[12px]
              font-semibold
            "
          >
            Me
          </span>
        </button>
      </div>

      {/* ================= CENTER AGENCY BUTTON ================= */}

      <div
        className="
          absolute
          left-1/2
          -top-7
          sm:-top-9
          -translate-x-1/2
          flex
          flex-col
          items-center
          z-10
        "
      >
        <button
          onClick={() => navigate("/agency")}
          className="
            flex
            h-[66px]
            w-[66px]
            sm:h-[82px]
            sm:w-[82px]
            items-center
            justify-center
            rounded-full
            border-[4px]
            sm:border-[5px]
            border-[#123b6a]
            bg-gradient-to-b
            from-cyan-300
            via-sky-500
            to-blue-700
            shadow-lg
            transition-transform
            hover:scale-105
            active:scale-95
          "
        >
          <FaCoins
            className="
              text-[32px]
              sm:text-[40px]
              text-white
            "
          />
        </button>

        <p
          className="
            mt-0.5
            sm:mt-1
            text-center
            text-[10px]
            sm:text-[12px]
            font-bold
            text-cyan-300
            whitespace-nowrap
          "
        >
          Agency
        </p>
      </div>
    </div>
  );
}
