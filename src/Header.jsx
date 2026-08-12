import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({
  setOpenMenu,
  setLoginOpen,
  setSignupOpen,
  user,
  balance,
}) => {
  const navigate = useNavigate();

  // ================= DEPOSIT =================

  const openDeposit = () => {
    navigate("/deposit");
  };

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
          max-w-[540px]
          w-full
          mx-auto
          flex
          items-center
          justify-between
          gap-2
          px-3
          py-2.5
          sm:px-4
          sm:py-3
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <div className="flex items-center gap-2 min-w-0">
          {/* MENU BUTTON */}

          <button
            onClick={() => setOpenMenu(true)}
            className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              shrink-0
              rounded-full
              bg-[#020617]
              border-2
              border-cyan-500
              flex
              items-center
              justify-center
              transition
              active:scale-95
            "
          >
            <div className="space-y-1">
              <span
                className="
                  block
                  w-5
                  sm:w-6
                  h-[3px]
                  bg-cyan-300
                  rounded
                "
              />

              <span
                className="
                  block
                  w-3.5
                  sm:w-4
                  h-[3px]
                  bg-cyan-300
                  rounded
                "
              />

              <span
                className="
                  block
                  w-5
                  sm:w-6
                  h-[3px]
                  bg-cyan-300
                  rounded
                "
              />
            </div>
          </button>

          {/* LOGO */}

          <div className="min-w-0">
            <h1 className="leading-none font-black whitespace-nowrap">
              <span
                className="
                  text-cyan-400
                  text-2xl
                  sm:text-3xl
                "
              >
                66RS
              </span>

              <span
                className="
                  text-white
                  text-base
                  sm:text-lg
                "
              >
                .com
              </span>
            </h1>

            <p
              className="
                text-[7px]
                sm:text-[9px]
                text-cyan-200
                tracking-[2px]
                sm:tracking-[3px]
                uppercase
                whitespace-nowrap
              "
            >
              Gaming Platform
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {user ? (
            /* ================= LOGGED USER ================= */

            <div
              onClick={openDeposit}
              className="
                flex
                items-center
                rounded-full
                border
                border-cyan-400
                bg-[#07294b]
                px-1.5
                sm:px-2
                py-1
                cursor-pointer
                transition
                hover:border-cyan-300
                hover:bg-[#0a385f]
                active:scale-[.97]
              "
            >
              {/* WALLET ICON */}

              <div
                className="
                  flex
                  h-8
                  w-8
                  sm:h-10
                  sm:w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-green-600
                  text-base
                  sm:text-xl
                  shrink-0
                "
              >
                💰
              </div>

              {/* BALANCE */}

              <span
                className="
                  mx-1.5
                  sm:mx-2
                  text-xs
                  sm:text-sm
                  font-bold
                  text-cyan-300
                  whitespace-nowrap
                "
              >
                Rs {Number(balance || 0).toFixed(2)}
              </span>

              {/* PLUS = DEPOSIT */}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openDeposit();
                }}
                className="
                  h-8
                  w-8
                  sm:h-9
                  sm:w-9
                  shrink-0
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-600
                  text-white
                  text-lg
                  sm:text-xl
                  font-bold
                  transition
                  hover:brightness-110
                  active:scale-90
                  flex
                  items-center
                  justify-center
                "
              >
                +
              </button>
            </div>
          ) : (
            /* ================= GUEST ================= */

            <>
              {/* LOGIN */}

              <button
                onClick={() => setLoginOpen(true)}
                className="
                  px-3
                  sm:px-4
                  py-2
                  sm:py-2.5
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
                  sm:text-sm
                  whitespace-nowrap
                  transition
                  hover:brightness-110
                  active:scale-95
                "
              >
                Log In
              </button>

              {/* SIGN UP */}

              <button
                onClick={() => setSignupOpen(true)}
                className="
                  px-3
                  sm:px-4
                  py-2
                  sm:py-2.5
                  rounded-full
                  border
                  border-cyan-500
                  bg-[#020617]
                  text-cyan-300
                  font-bold
                  text-xs
                  sm:text-sm
                  whitespace-nowrap
                  transition
                  hover:bg-cyan-500/10
                  active:scale-95
                "
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
