import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaWallet,
  FaMoneyBillWave,
  FaHeadset,
  FaBell,
  FaLock,
  FaGlobe,
  FaGift,
  FaSignOutAlt,
  FaChevronRight,
  FaChartBar,
} from "react-icons/fa";
import Messages from "./Messages";


export default function Profile() {
  const navigate = useNavigate();
  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Guest User",
      phone: "00000000",
    };

  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance")) || 0
  );

  const [language, setLanguage] = useState("English");
  const [showLanguage, setShowLanguage] = useState(false);

  const deposit = () => {
    const amount = balance + 1000;
    setBalance(amount);
    localStorage.setItem("balance", amount);
  };

  const withdraw = () => {
    if (balance <= 0) {
      alert("Insufficient Balance");
      return;
    }

    setBalance(0);
    localStorage.setItem("balance", 0);
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-gradient-to-b from-[#061d3b] via-[#082e58] to-[#020617] pb-24">

      {/* ================= HEADER ================= */}

      <div className="px-4 pt-5">

        <div className="flex items-start justify-between">

          {/* LEFT */}

          <div className="flex items-center gap-3">

            {/* Avatar */}

            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-cyan-300 bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_20px_rgba(0,255,255,.35)]">

              <FaUserCircle className="text-[82px] text-white" />

            </div>

            {/* INFO */}

            <div>

              <h2 className="text-[28px] font-bold text-white">
                {user.name}
              </h2>

              <div className="mt-1 flex items-center gap-2">

                <span className="text-cyan-300 font-semibold">
                  Number :
                </span>

                <span className="text-white">
                  {user.phone}
                </span>

              </div>

              {/* Wallet Capsule */}

              <div className="mt-4 flex items-center rounded-full border border-cyan-400 bg-[#07294b] px-2 py-1 shadow-lg">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600">
                  💰
                </div>

                <span className="mx-3 text-xl font-bold text-cyan-300">
                  Rs {balance}.00
                </span>

                <button
                  onClick={deposit}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-lg font-bold text-white"
                >
                  +
                </button>

              </div>

            </div>

          </div>

          {/* MAIL */}

       <button
  onClick={() => navigate("/messages")}
  className="
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-2xl
    border
    border-cyan-300
    bg-[#0c3765]
    text-3xl
    shadow-[0_0_15px_rgba(0,255,255,.25)]
  "
>
  ✉️
</button>

        </div>

      </div>

      {/* Deposit / Withdraw */}

      <div className="mt-6 px-4">

        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={deposit}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 py-4 font-bold text-white"
          >
            <FaWallet />
            Deposit
          </button>

          <button
            onClick={withdraw}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-900 py-4 font-bold text-white"
          >
            <FaMoneyBillWave />
            Withdraw
          </button>

        </div>

      </div>

      {/* ========= PART 2 YAHAN SE START HOGA ========= */}
            {/* MENU */}
{/* MENU */}

<div className="mt-6 px-4">

  <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#061426]">
<Menu
  icon={<FaHeadset />}
  title="Customer Service"
  onClick={() => navigate("/customer-service")}
/>
<Menu
  icon={<FaBell />}
  title="Notifications"
  badge="3"
  onClick={() => navigate("/messages")}
/>

<Menu
  icon={<FaChartBar />}
  title="Daily Statistics"
  onClick={() => navigate("/daily-statistics")}
/>

<Menu
  icon={<FaLock />}
  title="Edit Password"
  onClick={() => navigate("/edit-password")}
/>
    {/* Language */}

    <div
      onClick={() => setShowLanguage(!showLanguage)}
      className="flex cursor-pointer items-center justify-between border-b border-cyan-900 px-5 py-5 text-white hover:bg-cyan-500/10 transition"
    >
      <div className="flex items-center gap-4">

        <FaGlobe className="text-xl text-cyan-400" />

        <span className="font-semibold">
          Language
        </span>

      </div>

      <span className="text-cyan-300">
        {language}
      </span>

    </div>

    {showLanguage && (

      <div className="flex gap-3 border-b border-cyan-900 p-4">

        <button
          onClick={() => {
            setLanguage("English");
            setShowLanguage(false);
          }}
          className="flex-1 rounded-xl bg-cyan-500 py-2 font-semibold text-white"
        >
          English
        </button>

        <button
          onClick={() => {
            setLanguage("Urdu");
            setShowLanguage(false);
          }}
          className="flex-1 rounded-xl bg-blue-700 py-2 font-semibold text-white"
        >
          اردو
        </button>

      </div>

    )}

    {/* Logout */}

    <div
      onClick={logout}
      className="flex cursor-pointer items-center justify-between px-5 py-5 text-red-400 hover:bg-red-500/10 transition"
    >
      <div className="flex items-center gap-4">
        <FaSignOutAlt />
        <span className="font-semibold">Logout</span>
      </div>

      <FaChevronRight />
    </div>

  </div>

</div>
</div>
  );
}
function Menu({ icon, title, badge, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center justify-between border-b border-cyan-900 px-5 py-5 text-white transition hover:bg-cyan-500/10 active:scale-[0.98]"
    >
      <div className="flex items-center gap-4">
        <span className="text-xl text-cyan-400">{icon}</span>

        <span className="font-semibold">{title}</span>
      </div>

      <div className="flex items-center gap-3">
        {badge && (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            {badge}
          </div>
        )}

        <FaChevronRight className="text-cyan-400" />
      </div>
    </div>
  
  );
}