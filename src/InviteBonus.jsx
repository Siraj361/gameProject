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

import banner from "./assets/INVITEBANNER1.png";
import qr from "./assets/qrcode.png";
import chest from "./assets/chest.png";

export default function Invite({ hideHeader = false }) {
  const navigate = useNavigate();

  const inviteLink = "https://66rs2fs.com/s/x";

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
        w-full
        bg-gradient-to-b
        from-[#021b3a]
        via-[#064b87]
        to-[#020617]
        text-white
      "
    >
      {/* =====================================================
          HEADER
          Agency ke andar hide rahega
      ====================================================== */}

      {!hideHeader && (
        <div
          className="
            sticky
            top-0
            z-50
            flex
            h-[70px]
            w-full
            items-center
            border-b
            border-cyan-400/20
            bg-[#042446]/95
            px-5
            backdrop-blur-xl
          "
        >
          {/* Back Button */}

          <button
            onClick={() => navigate(-1)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              transition
              hover:bg-cyan-500/20
              active:scale-90
            "
          >
            <FaArrowLeft className="text-2xl" />
          </button>

          {/* Title */}

          <h1 className="flex-1 text-center text-xl font-bold">
            Invitation Bonus
          </h1>

          {/* Right Empty Space */}

          <div className="w-10" />
        </div>
      )}

      {/* =====================================================
          BANNER
      ====================================================== */}

      <img
        src={banner}
        alt="Invite Banner"
        className="
          block
          h-auto
          w-full
          rounded-b-3xl
          object-cover
        "
      />

      {/* =====================================================
          SHARE CARD
      ====================================================== */}

      <div
        className="
          mx-4
          mt-5
          rounded-3xl
          border
          border-cyan-400/20
          bg-[#03182f]
          p-5
        "
      >
        <h2 className="text-xl font-bold">
          Share Link
        </h2>

        {/* Invite Link */}

        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-cyan-400/20
            bg-[#020b18]
            px-4
            py-4
          "
        >
          <p className="min-w-0 flex-1 truncate text-sm text-gray-300">
            {inviteLink}
          </p>

          <button
            onClick={copyLink}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-b
              from-cyan-400
              to-blue-700
              transition
              active:scale-95
            "
          >
            <FaCopy />
          </button>
        </div>

        {/* Social Media */}

        <h3 className="mt-8 text-center text-lg font-bold">
          Share to Social Media
        </h3>

        <div className="mt-6 grid grid-cols-5 gap-3">
          <Social
            icon={<FaFacebookF />}
            name="Facebook"
          />

          <Social
            icon={<FaWhatsapp />}
            name="Whatsapp"
          />

          <Social
            icon={<FaTelegramPlane />}
            name="Telegram"
          />

          <Social
            icon={<FaInstagram />}
            name="Instagram"
          />

          <Social
            icon={<FaXTwitter />}
            name="Twitter"
          />
        </div>

        {/* QR */}

        <img
          src={qr}
          alt="QR Code"
          className="
            mx-auto
            mt-8
            h-[120px]
            w-[120px]
            rounded-xl
            border
            border-cyan-300/20
            bg-white
            p-1
          "
        />

        {/* Direct Subordinates */}

        <div
          className="
            mt-6
            flex
            h-[65px]
            items-center
            justify-between
            rounded-2xl
            bg-gradient-to-r
            from-blue-500
            to-blue-900
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

      {/* =====================================================
          TREASURE CHEST
      ====================================================== */}

      <div className="mt-8 px-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[2px] flex-1 rounded-full bg-cyan-400/30" />

          <h2 className="whitespace-nowrap text-xl font-bold">
            Treasure Chest
          </h2>

          <div className="h-[2px] flex-1 rounded-full bg-cyan-400/30" />
        </div>

        {/* Reward Grid */}

        <div className="grid grid-cols-4 gap-3">
          {rewards.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-cyan-400/10
                bg-[#03182f]
                p-3
                text-center
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-400/40
                active:scale-95
              "
            >
              <img
                src={chest}
                alt="Chest"
                className="
                  mx-auto
                  h-[62px]
                  w-[62px]
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

      {/* =====================================================
          ACTIVITY DESCRIPTION
      ====================================================== */}

      <div className="mt-10 px-4">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-[2px] flex-1 rounded-full bg-cyan-400/30" />

          <h2 className="whitespace-nowrap text-xl font-bold">
            Activity Description
          </h2>

          <div className="h-[2px] flex-1 rounded-full bg-cyan-400/30" />
        </div>

        <div
          className="
            rounded-3xl
            border
            border-cyan-400/20
            bg-[#03182f]
            p-5
            text-[14px]
            leading-8
            text-gray-200
          "
        >
          <p>
            <span className="font-bold text-cyan-300">
              1.
            </span>{" "}
            Invite friends to register and complete the
            required recharge to unlock treasure chest
            rewards.
          </p>

          <p className="mt-4">
            <span className="font-bold text-cyan-300">
              2.
            </span>{" "}
            Invited users must recharge at least{" "}
            <span className="text-yellow-300">
              Rs 700
            </span>{" "}
            and complete betting of{" "}
            <span className="text-yellow-300">
              Rs 5000
            </span>
            .
          </p>

          <p className="mt-4">
            <span className="font-bold text-cyan-300">
              3.
            </span>{" "}
            Rewards require a 1× turnover before
            withdrawal.
          </p>

          <p className="mt-4">
            <span className="font-bold text-cyan-300">
              4.
            </span>{" "}
            Multiple accounts, bots, scripts and unfair
            activity are strictly prohibited.
          </p>

          <p className="mt-4">
            <span className="font-bold text-cyan-300">
              5.
            </span>{" "}
            The platform reserves the final right of
            interpretation for this promotion.
          </p>
        </div>
      </div>

      {/* Bottom Space */}

      <div className="h-[120px]" />

      {/* =====================================================
          HIDE SCROLLBAR
      ====================================================== */}

      <style>{`
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        *::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function Social({ icon, name }) {
  return (
    <div className="min-w-0 text-center">
      <button
        className="
          mx-auto
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gradient-to-b
          from-cyan-400
          to-blue-700
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
          truncate
          text-[11px]
          font-medium
          text-gray-300
        "
      >
        {name}
      </p>
    </div>
  );
}