import React from "react";
import { Send, Phone, ShieldCheck } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

import Markhor from "./assets/Markhor.png";

const BRAND = "66RS.COM";

const ABOUT_TEXT = `
33RS.COM is one of the most trusted and popular online slot websites in Pakistan,
and the top choice for slot enthusiasts.

As a leading slot website, 66RS.COM offers an exciting, convenient, and lucrative
online slot gaming experience.

We provide official and trusted login links to ensure members enjoy a high-quality,
safe, and comfortable online slot gaming experience.
`;

const RULES = [
  "This product is for users aged 18 and over only.",
  "This game contains in-app purchases.",
  "Winnings in social casino games are not guaranteed to win in real-money gambling and related games.",
];

const SOCIAL_LINKS = [
  {
    icon: FaFacebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Send,
    href: "#",
    label: "Telegram",
  },
  {
    icon: Phone,
    href: "#",
    label: "Contact",
  },
];

export default function SecFooter() {
  return (
    <footer
      className="
        w-full
        border-t
        border-blue-400/20
        bg-gradient-to-b
        from-[#061b3a]
        via-[#073b73]
        to-[#02172f]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[540px]
          px-4
          pb-10
          pt-9
        "
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <div className="flex justify-center">
          <img
            src={Markhor}
            alt="66RS Logo"
            className="
              h-auto
              w-[110px]
              object-contain
              drop-shadow-[0_0_15px_rgba(0,210,255,.25)]
            "
          />
        </div>

        {/* =====================================================
            BRAND
        ====================================================== */}

        <div
          className="
            mt-5
            flex
            flex-col
            items-center
            text-center
          "
        >
          <h2
            className="
              text-[28px]
              font-extrabold
              tracking-wide
              text-cyan-300
            "
          >
            {BRAND}
          </h2>

          <p
            className="
              mt-2
              text-[13px]
              font-medium
              text-blue-200/80
            "
          >
            Trusted Online Slot Gaming Platform
          </p>
        </div>

        {/* =====================================================
            SOCIAL ICONS
        ====================================================== */}

        <div
          className="
            mt-7
            flex
            justify-center
            gap-4
          "
        >
          {SOCIAL_LINKS.map(
            ({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-300/30
                  bg-blue-950/60
                  text-blue-100
                  transition-all
                  duration-200
                  hover:border-cyan-300/60
                  hover:bg-cyan-500
                  hover:text-black
                  active:scale-90
                "
              >
                <Icon size={19} />
              </a>
            )
          )}
        </div>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <div
          className="
            mt-8
            rounded-[20px]
            border
            border-blue-400/20
            bg-blue-950/40
            p-5
          "
        >
          <h3
            className="
              mb-4
              text-center
              text-[19px]
              font-bold
              text-cyan-300
            "
          >
            About {BRAND}
          </h3>

          <p
            className="
              text-center
              text-[13px]
              leading-7
              text-blue-100/90
              whitespace-pre-line
            "
          >
            {ABOUT_TEXT}
          </p>
        </div>

        {/* =====================================================
            IMPORTANT NOTICE
        ====================================================== */}

        <div
          className="
            mt-6
            rounded-[20px]
            border
            border-blue-400/20
            bg-blue-950/40
            p-5
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <ShieldCheck
              className="text-cyan-300"
              size={21}
            />

            <h3
              className="
                text-[18px]
                font-bold
                text-cyan-300
              "
            >
              Important Notice
            </h3>
          </div>

          <ul className="space-y-4">
            {RULES.map((rule, index) => (
              <li
                key={index}
                className="
                  flex
                  gap-3
                  text-[13px]
                  leading-6
                  text-blue-100/90
                "
              >
                <span
                  className="
                    shrink-0
                    font-bold
                    text-cyan-300
                  "
                >
                  {index + 1}.
                </span>

                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}

        <div
          className="
            mt-8
            border-t
            border-blue-300/20
            pt-6
            text-center
          "
        >
          <p
            className="
              text-[12px]
              text-blue-200/70
            "
          >
            Copyright © 2026 66RS.com
          </p>
        </div>

        {/* Extra bottom breathing space */}
        <div className="h-25" />
      </div>
    </footer>
  );
}