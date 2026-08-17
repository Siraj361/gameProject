import {
  FaChevronRight,
  FaGlobe,
  FaGift,
  FaGem,
  FaWallet,
  FaHeadset,
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({
  open,
  setOpen,
  setLoginOpen,
  setSignupOpen,
}) {
  const navigate = useNavigate();

  /* =========================================================
     USER
  ========================================================= */

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  /* =========================================================
     UPDATE USER
  ========================================================= */

  useEffect(() => {
    const updateUser = () => {
      try {
        setUser(
          JSON.parse(localStorage.getItem("user")) || null
        );
      } catch {
        setUser(null);
      }
    };

    window.addEventListener("userLogin", updateUser);
    window.addEventListener("userLogout", updateUser);

    return () => {
      window.removeEventListener("userLogin", updateUser);
      window.removeEventListener("userLogout", updateUser);
    };
  }, []);

  /* =========================================================
     BALANCE
  ========================================================= */

  const [balance, setBalance] = useState(() => {
    return Number(localStorage.getItem("balance")) || 0;
  });

  useEffect(() => {
    const updateBalance = () => {
      setBalance(
        Number(localStorage.getItem("balance")) || 0
      );
    };

    updateBalance();

    const interval = setInterval(updateBalance, 500);

    window.addEventListener("storage", updateBalance);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", updateBalance);
    };
  }, []);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const goTo = (path) => {
    setOpen(false);

    // React Router automatically handles /gameProject
    // because BrowserRouter has basename="/gameProject".
    navigate(path);
  };

  /* =========================================================
     MENU
  ========================================================= */

  const menu = [
    {
      name: "Language",
      icon: <FaGlobe />,
      action: () => {
        setOpen(false);
        // Language functionality can be added here later.
      },
    },

    {
      name: "Invite Bonus",
      icon: <FaGift />,
      path: "/invite-bonus",
    },

    {
      name: "Lucky Wheel",
      icon: <FaGem />,
      action: () => {
        setOpen(false);
      },
    },

    {
      name: "VIP",
      icon: <FaWallet />,
      path: "/vip",
    },

    {
      name: "Reward",
      icon: <FaGift />,
      action: () => {
        setOpen(false);
      },
    },

    {
      name: "Wallet",
      icon: <FaWallet />,
      path: "/balance",
    },
  ];

  /* =========================================================
     LOGOUT
  ========================================================= */

  const logout = () => {
    localStorage.removeItem("user");

    setUser(null);
    setOpen(false);

    window.dispatchEvent(new Event("userLogout"));
  };

  /* =========================================================
     DEPOSIT
  ========================================================= */

  const handleDeposit = () => {
    goTo("/deposit");
  };

  /* =========================================================
     WITHDRAW
  ========================================================= */

  const handleWithdraw = () => {
    // No /withdraw route currently exists in App.jsx.
    // Keep sidebar closed instead of navigating to an invalid route.
    setOpen(false);
  };

  /* =========================================================
     CUSTOMER SERVICE
  ========================================================= */

  const handleCustomerService = () => {
    goTo("/customer-service");
  };

  return (
    <div
      className={`
        absolute
        inset-0
        z-[9998]
        overflow-hidden
        flex
        justify-center

        ${
          open
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
      `}
    >
      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        onClick={() => setOpen(false)}
        className={`
          absolute
          top-0
          left-0
          w-[540px]
          max-w-full
          h-full
          bg-black/50
          backdrop-blur-sm
          transition-opacity
          duration-300

          ${
            open
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <div
        className={`
          absolute
          top-0
          left-0
          h-full
          w-[340px]
          sm:w-[360px]

          bg-gradient-to-b
          from-[#021b3a]
          via-[#064b87]
          to-[#020617]

          text-white

          transition-transform
          duration-300
          ease-out

          overflow-y-auto
          hide-scrollbar

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            h-[75px]
            flex
            items-center
            justify-between
            px-5
            border-b
            border-cyan-400/30
            bg-[#021b3a]
            sticky
            top-0
            z-50
          "
        >
          <h1
            className="
              text-3xl
              font-black
              text-cyan-400
              tracking-wide
            "
          >
            66RS
            <span
              className="
                text-3xl
                font-black
                text-white
                tracking-wide
              "
            >
              .com
            </span>
          </h1>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
              h-10
              w-10
              rounded-full
              flex
              items-center
              justify-center
              border
              border-cyan-400/40
              bg-[#03182f]
            "
          >
            <FaChevronRight
              className="
                text-3xl
                text-cyan-300
              "
            />
          </button>
        </div>

        {/* =================================================
            USER
        ================================================= */}

        {user ? (
          <div
            className="
              mx-5
              mt-5
              rounded-3xl
              border
              border-cyan-300/40
              bg-[#03182f]
              p-4
            "
          >
            {/* PROFILE */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-16
                  w-16
                  rounded-full
                  bg-gradient-to-b
                  from-cyan-300
                  to-blue-700
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                👤
              </div>

              <div>
                <h2
                  className="
                    font-bold
                    text-lg
                  "
                >
                  {user.name}
                </h2>

                <p
                  className="
                    text-cyan-300
                    text-sm
                  "
                >
                  {user.phone}
                </p>
              </div>
            </div>

            {/* BALANCE */}

            <div
              className="
                mt-5
                rounded-2xl
                bg-black/40
                p-4
                text-center
              "
            >
              <p className="text-gray-300">
                Balance
              </p>

              <h1
                className="
                  text-3xl
                  font-black
                  text-cyan-300
                "
              >
                Rs {balance}.00
              </h1>
            </div>

            {/* DEPOSIT / WITHDRAW */}

            <div
              className="
                grid
                grid-cols-2
                gap-3
                mt-4
              "
            >
              <button
                type="button"
                onClick={handleDeposit}
                className="
                  h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-green-400
                  to-green-700
                  font-bold
                  active:scale-95
                  transition
                "
              >
                Deposit
              </button>

              <button
                type="button"
                onClick={handleWithdraw}
                className="
                  h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-orange-400
                  to-red-600
                  font-bold
                  active:scale-95
                  transition
                "
              >
                Withdraw
              </button>
            </div>

            {/* LOGOUT */}

            <button
              type="button"
              onClick={logout}
              className="
                w-full
                mt-4
                h-10
                rounded-xl
                border
                border-red-400
                text-red-300
                font-bold
                active:scale-95
                transition
              "
            >
              Logout
            </button>
          </div>
        ) : (
          /* =================================================
             LOGIN / SIGNUP
          ================================================= */

          <div
            className="
              grid
              grid-cols-2
              gap-3
              p-5
            "
          >
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setLoginOpen(true);
              }}
              className="
                h-[60px]
                rounded-2xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-700
                font-bold
                text-xl
              "
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setSignupOpen(true);
              }}
              className="
                h-[60px]
                rounded-2xl
                border
                border-cyan-300
                bg-[#031b35]
                text-cyan-200
                font-bold
                text-xl
              "
            >
              Sign Up
            </button>
          </div>
        )}

        {/* =================================================
            MENU GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-3
            gap-5
            px-5
            mt-5
          "
        >
          {menu.map((item, index) => (
            <button
              type="button"
              key={index}
              onClick={() => {
                if (item.path) {
                  goTo(item.path);
                  return;
                }

                if (item.action) {
                  item.action();
                }
              }}
              className={`
                text-center
                ${
                  item.path || item.action
                    ? "cursor-pointer active:scale-95 transition"
                    : ""
                }
              `}
            >
              <div
                className="
                  h-[70px]
                  w-[70px]
                  mx-auto
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  bg-gradient-to-b
                  from-[#1475c9]
                  to-[#03204b]
                  border
                  border-cyan-300/40
                "
              >
                {item.icon}
              </div>

              <p
                className="
                  text-xs
                  font-bold
                  mt-2
                "
              >
                {item.name}
              </p>
            </button>
          ))}
        </div>

        {/* =================================================
            CUSTOMER SERVICE
        ================================================= */}

        <button
          type="button"
          onClick={handleCustomerService}
          className="
            block
            w-[calc(100%-40px)]
            mx-5
            mt-10
            text-left
            rounded-3xl
            border
            border-cyan-300/40
            bg-[#03182f]
            p-5
            active:scale-[0.99]
            transition
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                h-12
                w-12
                rounded-full
                bg-cyan-500
                flex
                items-center
                justify-center
                text-xl
              "
            >
              <FaHeadset />
            </div>

            <div>
              <h2 className="font-bold">
                Customer Service
              </h2>

              <p
                className="
                  text-xs
                  text-cyan-300
                "
              >
                24 / 7 Online Support
              </p>
            </div>
          </div>
        </button>

        {/* =================================================
            SOCIAL
        ================================================= */}

        <div
          className="
            mx-5
            mt-5
            mb-6
            rounded-3xl
            border
            border-cyan-300/40
            p-5
          "
        >
          <div
            className="
              flex
              justify-around
              text-2xl
            "
          >
            <FaFacebookF
              className="
                cursor-pointer
                hover:text-cyan-300
                transition
              "
            />

            <FaWhatsapp
              className="
                cursor-pointer
                hover:text-cyan-300
                transition
              "
            />

            <FaTelegramPlane
              className="
                cursor-pointer
                hover:text-cyan-300
                transition
              "
            />

            <FaInstagram
              className="
                cursor-pointer
                hover:text-cyan-300
                transition
              "
            />

            <FaXTwitter
              className="
                cursor-pointer
                hover:text-cyan-300
                transition
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}