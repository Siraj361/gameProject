import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaCopy,
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import banner from "./assets/invitebanner.png";
import qr from "./assets/qrcode.png";
import chest from "./assets/chest.png";

export default function Invite() {
  const navigate = useNavigate();

  const inviteLink = "https://33rs2fs.com/s/x";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      alert("Invite link copied!");
    } catch {
      alert("Copy failed");
    }
  };

  const rewards = [
    { p: "1", r: "800.00" },
    { p: "2", r: "800.00" },
    { p: "3", r: "800.00" },
    { p: "4", r: "800.00" },
    { p: "5", r: "800.00" },
    { p: "6", r: "800.00" },
    { p: "7", r: "800.00" },
    { p: "8", r: "800.00" },
    { p: "9", r: "800.00" },
    { p: "10", r: "800.00" },
    { p: "20", r: "8,000.00" },
    { p: "30", r: "8,000.00" },
    { p: "40", r: "8,000.00" },
    { p: "50", r: "8,000.00" },
    { p: "60", r: "8,000.00" },
    { p: "70", r: "8,000.00" },
  ];

  return (
    <div
      className="
        h-full
        w-full
        overflow-y-auto
        hide-scrollbar
        bg-gradient-to-b
        from-[#021b3a]
        via-[#064b87]
        to-[#020617]
        text-white
        pb-[120px]
      "
    >
      {/* Header */}

      <div
        className="
          sticky
          top-0
          z-20
          h-[70px]
          flex
          items-center
          px-5
          bg-[#042446]/95
          backdrop-blur-xl
          border-b
          border-cyan-400/20
        "
      >
        <button
          onClick={() => navigate(-1)}
          className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            hover:bg-cyan-500/20
            transition
          "
        >
          <FaArrowLeft className="text-2xl" />
        </button>

        <h1 className="flex-1 text-center text-xl font-bold">
          Invitation Bonus
        </h1>

        <div className="w-10" />
      </div>

      {/* Banner */}

      <img
        src={banner}
        alt="Invite Banner"
        className="
          w-full
          h-auto
          object-cover
          rounded-b-3xl
        "
      />

      {/* Share Card */}

      <div
        className="
          mx-4
          mt-5
          rounded-3xl
          bg-[#03182f]
          border
          border-cyan-400/20
          p-5
        "
      >
        <h2 className="text-xl font-bold">
          Share Link
        </h2>

        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            rounded-2xl
            bg-[#020b18]
            border
            border-cyan-400/20
            px-4
            py-4
          "
        >
          <p className="flex-1 truncate text-sm text-gray-300">
            {inviteLink}
          </p>

          <button
            onClick={copyLink}
            className="
              h-11
              w-11
              rounded-xl
              bg-cyan-500
              flex
              items-center
              justify-center
              active:scale-95
              transition
            "
          >
            <FaCopy />
          </button>
        </div>

        <h3 className="mt-8 text-center text-lg font-bold">
          Share to Social Media
        </h3>

        <div className="grid grid-cols-5 gap-4 mt-6">
          <Social icon={<FaFacebookF />} name="Facebook" />
          <Social icon={<FaWhatsapp />} name="Whatsapp" />
          <Social icon={<FaTelegramPlane />} name="Telegram" />
          <Social icon={<FaInstagram />} name="Instagram" />
          <Social icon={<FaXTwitter />} name="Twitter" />
        </div>

        <img
          src={qr}
          alt="QR Code"
          className="
            w-[120px]
            h-[120px]
            mx-auto
            mt-8
            rounded-xl
            border
            border-cyan-300/20
          "
        />

        <div
          className="
            mt-6
            h-[65px]
            rounded-2xl
            bg-gradient-to-r
            from-blue-500
            to-blue-900
            flex
            items-center
            justify-between
            px-5
          "
        >
          <h3 className="font-bold">
            My Direct Subordinates
          </h3>

          <span className="font-bold text-yellow-300">
            0 People 〉
          </span>
        </div>
      </div>
            {/* Treasure Chest */}

      <div className="px-4 mt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-[2px] rounded-full bg-cyan-400/30" />

          <h2 className="text-xl font-bold whitespace-nowrap">
            Treasure Chest
          </h2>

          <div className="flex-1 h-[2px] rounded-full bg-cyan-400/30" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {rewards.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                bg-[#03182f]
                border
                border-cyan-400/10
                p-3
                text-center
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-400/40
              "
            >
              <img
                src={chest}
                alt="Chest"
                className="
                  w-[62px]
                  h-[62px]
                  mx-auto
                  object-contain
                "
              />

              <p className="mt-2 text-xs font-semibold">
                {item.p} People
              </p>

              <p className="mt-1 text-[13px] font-bold text-yellow-300">
                Rs {item.r}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Description */}

      <div className="px-4 mt-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-[2px] rounded-full bg-cyan-400/30" />

          <h2 className="text-xl font-bold whitespace-nowrap">
            Activity Description
          </h2>

          <div className="flex-1 h-[2px] rounded-full bg-cyan-400/30" />
        </div>

        <div
          className="
            rounded-3xl
            bg-[#03182f]
            border
            border-cyan-400/20
            p-5
            text-[14px]
            leading-8
            text-gray-200
          "
        >
          <p>
            <span className="font-bold text-cyan-300">1.</span>{" "}
            Invite friends to register and complete the
            required recharge to unlock treasure chest
            rewards.
          </p>

          <p className="mt-4">
            <span className="font-bold text-cyan-300">2.</span>{" "}
            Invited users must recharge at least
            <span className="text-yellow-300">
              {" "}Rs 700
            </span>{" "}
            and complete betting of
            <span className="text-yellow-300">
              {" "}Rs 5000
            </span>.
          </p>

          <p className="mt-4">
            <span className="font-bold text-cyan-300">3.</span>{" "}
            Rewards require a 1× turnover before
            withdrawal.
          </p>

          <p className="mt-4">
            <span className="font-bold text-cyan-300">4.</span>{" "}
            Multiple accounts, bots, scripts and unfair
            activity are strictly prohibited.
          </p>

          <p className="mt-4">
            <span className="font-bold text-cyan-300">5.</span>{" "}
            The platform reserves the final right of
            interpretation for this promotion.
          </p>
        </div>
      </div>
            <div className="h-[120px]" />
    </div>
  );
}

function Social({ icon, name }) {
  return (
    <div className="text-center">
      <button
        className="
          w-12
          h-12
          mx-auto
          rounded-full
          bg-gradient-to-b
          from-cyan-400
          to-blue-700
          flex
          items-center
          justify-center
          text-lg
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
        "
      >
        {icon}
      </button>

      <p
        className="
          mt-2
          text-[11px]
          text-gray-300
          font-medium
          truncate
        "
      >
        {name}
      </p>
    </div>
  );
}