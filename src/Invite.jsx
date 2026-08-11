import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Copy, Users, Coins, Gift } from "lucide-react";
import Qrcode from "./assets/qrcode.png"

export default function Invite() {
  const inviteLink = "https://33rs3fk.com/s/x";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      alert("Invitation link copied!");
    } catch (error) {
      console.log(error);
    }
  };

  const shareSocial = (type) => {
    const url = encodeURIComponent(inviteLink);

    const links = {
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      Whatsapp: `https://wa.me/?text=${url}`,
      Telegram: `https://t.me/share/url?url=${url}`,
      Twitter: `https://twitter.com/intent/tweet?url=${url}`,
    };

    if (links[type]) {
      window.open(
        links[type],
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="w-full px-3 pb-24 pt-4">

      {/* =================================================
          SHARE LINK
      ================================================= */}

      <section
        className="
          rounded-[22px]
          border
          border-cyan-200/70
          bg-gradient-to-b
          from-[#092C4A]
          via-[#061E32]
          to-[#03111E]
          p-5
          shadow-[0_0_20px_rgba(0,190,255,.10)]
        "
      >

        <h2 className="text-[24px] font-bold text-white">
          Share Link:
        </h2>


        {/* Link Box */}

        <div
          className="
            mt-5
            flex
            h-[70px]
            w-full
            items-center
            gap-3
            rounded-[20px]
            border
            border-cyan-300/25
            bg-[#020B14]
            pl-5
            pr-3
          "
        >

          <span
            className="
              min-w-0
              flex-1
              truncate
              text-[18px]
              text-white/70
            "
          >
            {inviteLink}
          </span>


          <button
            onClick={copyLink}
            className="
              flex
              h-[52px]
              w-[52px]
              shrink-0
              items-center
              justify-center
              rounded-[15px]
              border
              border-cyan-200/60
              bg-gradient-to-b
              from-cyan-400
              via-sky-600
              to-blue-800
              text-white
              shadow-[0_5px_15px_rgba(0,180,255,.25)]
              transition
              active:scale-90
            "
          >
            <Copy size={27} />
          </button>

        </div>


        {/* Social Title */}

        <h3
          className="
            mt-6
            text-center
            text-[23px]
            font-bold
            text-white
          "
        >
          Share to Social Media:
        </h3>


        {/* Social + QR */}

        <div className="mt-5 flex items-center gap-5">

          {/* QR */}

          <div className="shrink-0">

            <div
              className="
                h-[115px]
                w-[115px]
                overflow-hidden
                rounded-[10px]
               
               
              "
            >
              <img
                src={Qrcode}
                alt="Invitation QR"
                className="h-full w-full object-cover"
              />
            </div>

          </div>


          {/* Social Icons */}

          <div
            className="
              grid
              flex-1
              grid-cols-4
              gap-3
            "
          >

            <SocialButton
              icon={<FaFacebookF />}
              title="Facebook"
              onClick={() => shareSocial("Facebook")}
              color="bg-[#1877F2]"
            />

            <SocialButton
              icon={<FaWhatsapp />}
              title="Whatsapp"
              onClick={() => shareSocial("Whatsapp")}
              color="bg-[#25D366]"
            />

            <SocialButton
              icon={<FaTelegramPlane />}
              title="Telegram"
              onClick={() => shareSocial("Telegram")}
              color="bg-[#29A9EA]"
            />

            <SocialButton
              icon={<FaInstagram />}
              title="Instagram"
              onClick={() => {}}
              color="bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400"
            />

          </div>

        </div>


        {/* Twitter / X */}

        <div className="mt-4 flex justify-center">

          <SocialButton
            icon={<FaXTwitter />}
            title="Twitter"
            onClick={() => shareSocial("Twitter")}
            color="bg-black"
          />

        </div>

      </section>


      {/* =================================================
          UNLIMITED EXPANSION
      ================================================= */}

      <section
        className="
          mt-5
          min-h-[510px]
          overflow-hidden
          rounded-[22px]
          border
          border-cyan-200/60
          bg-gradient-to-b
          from-[#082B49]
          via-[#061B2E]
          to-[#020C17]
          p-5
          shadow-[0_0_20px_rgba(0,190,255,.08)]
        "
      >

        <h2
          className="
            text-center
            text-[22px]
            font-bold
            text-white
          "
        >
          Unlimited Expansion of Subordinates
        </h2>


        {/* Diagram */}

        <div className="relative mt-8 h-[380px]">

          {/* YOU */}

          <div
            className="
              absolute
              left-1/2
              top-2
              -translate-x-1/2
              text-center
            "
          >

            <div
              className="
                mx-auto
                flex
                h-[88px]
                w-[88px]
                items-center
                justify-center
                rounded-full
                border
                border-cyan-300/40
                bg-gradient-to-br
                from-[#12649A]
                to-[#031727]
                text-[42px]
              "
            >
              👨🏻
            </div>

            <div
              className="
                mx-auto
                -mt-1
                w-[75px]
                rounded-full
                bg-[#155074]
                py-1
                text-[13px]
                font-bold
                text-white
              "
            >
              YOU
            </div>

          </div>


          {/* Connection Lines */}

          <div
            className="
              absolute
              left-[25%]
              right-[25%]
              top-[120px]
              h-[2px]
              bg-cyan-300/50
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-[88px]
              h-[70px]
              w-[2px]
              -translate-x-1/2
              bg-cyan-300/50
            "
          />


          {/* L1 */}

          <div
            className="
              absolute
              left-0
              top-[155px]
              rounded-lg
              bg-[#0B5682]
              px-4
              py-2
              text-[17px]
              font-bold
              text-white
            "
          >
            L1
          </div>


          {/* Members */}

          <TeamPerson
            position="left-[20%]"
            emoji="👨🏿"
          />

          <TeamPerson
            position="left-1/2"
            emoji="👨🏻"
          />

          <TeamPerson
            position="left-[80%]"
            emoji="👩🏽"
          />

        </div>

      </section>


      {/* =================================================
          L1 REWARD
      ================================================= */}

      <section
        className="
          mt-5
          rounded-[22px]
          border
          border-cyan-200/60
          bg-gradient-to-b
          from-[#082B49]
          via-[#061B2E]
          to-[#020C17]
          p-5
        "
      >

        {/* Reward Header */}

        <div
          className="
            flex
            h-[58px]
            items-center
            justify-center
            rounded-[17px]
            border
            border-cyan-300/50
            bg-gradient-to-r
            from-[#087FC0]
            via-[#09649A]
            to-[#06446D]
            text-[21px]
            font-bold
            text-white
            shadow-[0_5px_15px_rgba(0,180,255,.18)]
          "
        >
          <Users
            size={24}
            className="mr-2"
          />

          L1 Reward
        </div>


        {/* Table */}

        <div
          className="
            mt-4
            overflow-hidden
            rounded-[20px]
            border
            border-cyan-300/20
            bg-[#061724]
          "
        >

          {/* Header */}

          <div
            className="
              grid
              grid-cols-3
              border-b
              border-cyan-300/15
              bg-[#0A2D46]
              px-3
              py-4
              text-center
              text-[17px]
              font-bold
              text-white
            "
          >
            <span>Grade</span>
            <span>Team Amount</span>
            <span>Proportion</span>
          </div>


          <RewardRow
            grade="1"
            amount="1"
            percent="1%"
          />

          <RewardRow
            grade="2"
            amount="100,000,000"
            percent="1.2%"
          />

          <RewardRow
            grade="3"
            amount="500,000,000"
            percent="1.5%"
          />

          <RewardRow
            grade="4"
            amount="2,000,000,000"
            percent="3%"
          />

          <RewardRow
            grade="5"
            amount="5,000,000,000"
            percent="5%"
            last
          />

        </div>

      </section>


      {/* =================================================
          ACTIVITY DESCRIPTION
      ================================================= */}

      <section className="mt-7 px-2">

        <div className="flex items-center gap-3">

          <div className="h-[2px] flex-1 bg-cyan-300/30" />

          <h2
            className="
              shrink-0
              text-[21px]
              font-bold
              text-white
            "
          >
            Activity Description
          </h2>

          <div className="h-[2px] flex-1 bg-cyan-300/30" />

        </div>


        <div
          className="
            mt-5
            space-y-4
            text-[16px]
            leading-7
            text-white/80
          "
        >

          <p>
            <span className="font-bold text-cyan-300">
              1.
            </span>{" "}
            Invite friends to register via Facebook,
            Instagram, Telegram, WhatsApp, etc. Share
            your referral link to join your agency.
          </p>

          <p>
            <span className="font-bold text-cyan-300">
              2.
            </span>{" "}
            Earn up to 5% lifetime commission on every
            bet. Commissions are credited the next morning.
          </p>

          <p>
            <span className="font-bold text-cyan-300">
              3.
            </span>{" "}
            If your agency has a large team and the total
            daily betting volume reaches 100 million, you
            can earn 100 million × 0.8% = 800,000 in
            commission. Over a month, this could bring
            you a profit of 24 million.
          </p>

          <p>
            <span className="font-bold text-cyan-300">
              4.
            </span>{" "}
            Claim your bonus and withdraw immediately
            without completing bonus withdrawal
            requirements.
          </p>

        </div>

      </section>


      {/* Bottom spacing */}

      <div className="h-[80px]" />

    </div>
  );
}


/* =====================================================
   SOCIAL BUTTON
===================================================== */

function SocialButton({
  icon,
  title,
  onClick,
  color,
}) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-1
        text-white
        transition
        active:scale-90
      "
    >

      <span
        className={`
          flex
          h-[42px]
          w-[42px]
          items-center
          justify-center
          rounded-full
          text-[22px]
          ${color}
          shadow-[0_4px_10px_rgba(0,0,0,.3)]
        `}
      >
        {icon}
      </span>

      <span className="text-[10px] text-white/70">
        {title}
      </span>

    </button>
  );
}


/* =====================================================
   TEAM PERSON
===================================================== */

function TeamPerson({ position, emoji }) {
  return (
    <div
      className={`
        absolute
        top-[180px]
        -translate-x-1/2
        ${position}
        text-center
      `}
    >

      <div
        className="
          flex
          h-[78px]
          w-[78px]
          items-center
          justify-center
          rounded-full
          border
          border-cyan-300/40
          bg-gradient-to-br
          from-[#125579]
          to-[#061725]
          text-[38px]
        "
      >
        {emoji}
      </div>

    </div>
  );
}


/* =====================================================
   REWARD ROW
===================================================== */

function RewardRow({
  grade,
  amount,
  percent,
  last,
}) {
  return (
    <div
      className={`
        grid
        min-h-[60px]
        grid-cols-3
        items-center
        px-3
        text-center
        text-[16px]
        text-white
        ${
          !last
            ? "border-b border-cyan-300/10"
            : ""
        }
      `}
    >
      <span>{grade}</span>
      <span>{amount}</span>
      <span>{percent}</span>
    </div>
  );
}