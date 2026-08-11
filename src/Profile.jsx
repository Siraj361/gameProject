import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUserCircle,
  FaWallet,
  FaMoneyBillWave,
  FaHeadset,
  FaBell,
  FaLock,
  FaGlobe,
  FaSignOutAlt,
  FaChevronRight,
  FaChartBar,
} from "react-icons/fa";

export default function Profile() {
  const navigate = useNavigate();

  /* ================= USER ================= */

  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Guest User",
      phone: "00000000",
    };

  /* ================= BALANCE ================= */

  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance")) || 0
  );

  /*
    Deposit page se balance change hone ke baad
    profile par latest balance show hoga.
  */
  useEffect(() => {
    const updateBalance = () => {
      const currentBalance =
        Number(localStorage.getItem("balance")) || 0;

      setBalance(currentBalance);
    };

    updateBalance();

    window.addEventListener("storage", updateBalance);

    const interval = setInterval(updateBalance, 500);

    return () => {
      window.removeEventListener("storage", updateBalance);
      clearInterval(interval);
    };
  }, []);

  /* ================= LANGUAGE ================= */

  const [language, setLanguage] = useState("English");
  const [showLanguage, setShowLanguage] = useState(false);

  /* ================= LOGOUT ================= */

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  /* ================= DEPOSIT ================= */

  const openDeposit = () => {
    navigate("/deposit");
  };

  /* ================= WITHDRAW ================= */

  const openWithdraw = () => {
    navigate("/withdraw");
  };

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        overflow-y-auto
        bg-gradient-to-b
        from-[#061d3b]
        via-[#082e58]
        to-[#020617]
        pb-[110px]
        text-white
      "
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {/* =====================================================
          540px PROFILE CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          min-h-screen
          w-full
          max-w-[540px]
          overflow-x-hidden
        "
      >
        {/* =====================================================
            PROFILE HEADER
        ====================================================== */}

        <div className="px-4 pt-6">
          <div className="flex items-start justify-between gap-3">

            {/* ================= USER INFO ================= */}

            <div className="flex min-w-0 items-center gap-3">

              {/* AVATAR */}

              <div
                className="
                  flex
                  h-[82px]
                  w-[82px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-cyan-300
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-700
                  shadow-[0_0_20px_rgba(0,255,255,.25)]
                "
              >
                <FaUserCircle className="text-[70px] text-white" />
              </div>

              {/* USER DETAILS */}

              <div className="min-w-0">

                <h2
                  className="
                    truncate
                    text-[22px]
                    font-bold
                    text-white
                  "
                >
                  {user.name}
                </h2>

                <div className="mt-1 flex items-center gap-2">

                  <span className="text-[13px] font-semibold text-cyan-300">
                    Number:
                  </span>

                  <span className="truncate text-[13px] text-white/80">
                    {user.phone}
                  </span>

                </div>

                {/* ================= BALANCE CAPSULE ================= */}

                <div
                  className="
                    mt-3
                    flex
                    h-[43px]
                    items-center
                    rounded-full
                    border
                    border-cyan-400/60
                    bg-[#07294b]
                    px-1
                    shadow-[0_0_12px_rgba(0,200,255,.12)]
                  "
                >

                  <div
                    className="
                      flex
                      h-[35px]
                      w-[35px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-cyan-400
                      to-blue-700
                      text-[18px]
                    "
                  >
                    💰
                  </div>

                  <span
                    className="
                      mx-2
                      whitespace-nowrap
                      text-[16px]
                      font-bold
                      text-cyan-200
                    "
                  >
                    Rs {balance.toFixed(2)}
                  </span>

                  {/* PLUS = DEPOSIT */}

                  <button
                    onClick={openDeposit}
                    className="
                      ml-auto
                      flex
                      h-[34px]
                      w-[34px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-600
                      text-[21px]
                      font-bold
                      text-white
                      shadow-[0_0_10px_rgba(0,200,255,.25)]
                      transition
                      active:scale-90
                    "
                  >
                    +
                  </button>

                </div>
              </div>
            </div>

            {/* ================= MESSAGE ================= */}

            <button
              onClick={() => navigate("/messages")}
              className="
                flex
                h-[55px]
                w-[55px]
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-300/60
                bg-[#0c3765]
                text-[27px]
                shadow-[0_0_15px_rgba(0,255,255,.18)]
                transition
                active:scale-90
              "
            >
              ✉️
            </button>

          </div>
        </div>

        {/* =====================================================
            DEPOSIT / WITHDRAW
        ====================================================== */}

        <div className="mt-6 px-4">

          <div className="grid grid-cols-2 gap-3">

            {/* DEPOSIT */}

            <button
              onClick={openDeposit}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-600
                py-4
                font-bold
                text-white
                shadow-[0_5px_15px_rgba(0,180,255,.18)]
                transition
                hover:brightness-110
                active:scale-[.97]
              "
            >
              <FaWallet />
              Deposit
            </button>

            {/* WITHDRAW */}

            <button
              onClick={openWithdraw}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-blue-700
                to-indigo-900
                py-4
                font-bold
                text-white
                transition
                hover:brightness-110
                active:scale-[.97]
              "
            >
              <FaMoneyBillWave />
              Withdraw
            </button>

          </div>

        </div>

        {/* =====================================================
            MENU
        ====================================================== */}

        <div className="mt-6 px-4">

          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-cyan-500/30
              bg-[#061426]
              shadow-[0_0_20px_rgba(0,180,255,.06)]
            "
          >

            {/* CUSTOMER SERVICE */}

            <Menu
              icon={<FaHeadset />}
              title="Customer Service"
              onClick={() => navigate("/customer-service")}
            />

            {/* NOTIFICATIONS */}

            <Menu
              icon={<FaBell />}
              title="Notifications"
              badge="3"
              onClick={() => navigate("/messages")}
            />

            {/* DAILY STATISTICS */}

            <Menu
              icon={<FaChartBar />}
              title="Daily Statistics"
              onClick={() => navigate("/daily-statistics")}
            />

            {/* EDIT PASSWORD */}

            <Menu
              icon={<FaLock />}
              title="Edit Password"
              onClick={() => navigate("/edit-password")}
            />

            {/* =================================================
                LANGUAGE
            ================================================== */}

            <div
              onClick={() =>
                setShowLanguage(!showLanguage)
              }
              className="
                flex
                cursor-pointer
                items-center
                justify-between
                border-b
                border-cyan-900
                px-5
                py-5
                text-white
                transition
                hover:bg-cyan-500/10
              "
            >

              <div className="flex items-center gap-4">

                <FaGlobe className="text-xl text-cyan-400" />

                <span className="font-semibold">
                  Language
                </span>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-cyan-300">
                  {language}
                </span>

                <FaChevronRight
                  className={`
                    text-cyan-400
                    transition-transform
                    ${
                      showLanguage
                        ? "rotate-90"
                        : ""
                    }
                  `}
                />

              </div>

            </div>

            {/* LANGUAGE OPTIONS */}

            {showLanguage && (
              <div
                className="
                  flex
                  gap-3
                  border-b
                  border-cyan-900
                  bg-[#041d34]
                  p-4
                "
              >

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage("English");
                    setShowLanguage(false);
                  }}
                  className={`
                    flex-1
                    rounded-xl
                    py-2.5
                    font-semibold
                    transition
                    ${
                      language === "English"
                        ? "bg-cyan-500 text-white"
                        : "bg-[#073454] text-white/70"
                    }
                  `}
                >
                  English
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage("Urdu");
                    setShowLanguage(false);
                  }}
                  className={`
                    flex-1
                    rounded-xl
                    py-2.5
                    font-semibold
                    transition
                    ${
                      language === "Urdu"
                        ? "bg-blue-700 text-white"
                        : "bg-[#073454] text-white/70"
                    }
                  `}
                >
                  اردو
                </button>

              </div>
            )}

            {/* =================================================
                LOGOUT
            ================================================== */}

            <div
              onClick={logout}
              className="
                flex
                cursor-pointer
                items-center
                justify-between
                px-5
                py-5
                text-red-400
                transition
                hover:bg-red-500/10
                active:scale-[.99]
              "
            >

              <div className="flex items-center gap-4">

                <FaSignOutAlt />

                <span className="font-semibold">
                  Logout
                </span>

              </div>

              <FaChevronRight />

            </div>

          </div>
        </div>

        {/* BOTTOM SPACE */}

        <div className="h-[120px]" />

      </div>

      {/* =====================================================
          HIDE SCROLLBAR
      ====================================================== */}

      <style>{`
        div::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }

        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

    </div>
  );
}


/* =========================================================
   MENU COMPONENT
========================================================= */

function Menu({
  icon,
  title,
  badge,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        flex
        cursor-pointer
        items-center
        justify-between
        border-b
        border-cyan-900
        px-5
        py-5
        text-white
        transition
        hover:bg-cyan-500/10
        active:scale-[0.98]
      "
    >

      {/* LEFT */}

      <div className="flex items-center gap-4">

        <span className="text-xl text-cyan-400">
          {icon}
        </span>

        <span className="font-semibold">
          {title}
        </span>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-3">

        {badge && (
          <div
            className="
              flex
              h-6
              min-w-6
              items-center
              justify-center
              rounded-full
              bg-red-500
              px-1
              text-xs
              font-bold
              text-white
            "
          >
            {badge}
          </div>
        )}

        <FaChevronRight className="text-cyan-400" />

      </div>

    </div>
  );
}