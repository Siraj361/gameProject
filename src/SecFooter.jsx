import React from "react";
import { Send, Phone, ShieldCheck } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const BRAND = "33RS.COM";

const ABOUT_TEXT = `
33RS.COM is one of the most trusted and popular online slot websites in Pakistan,
and the top choice for slot enthusiasts.

As a leading slot website, 33RS.COM offers an exciting, convenient, and lucrative
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
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Phone, href: "#", label: "Contact" },
];

export default function SecFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#061b3a] via-[#073b73] to-[#02172f] text-white border-t border-blue-400/20">
      <div className="max-w-5xl mx-auto px-5 py-12">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://s3.cdnpk688.com/uploads/30004/f1f3d3b87aa1fe1d2e6ed61c1dd0ef9e.png"
            alt="33RS Logo"
            className="w-32 h-auto object-contain"
          />
        </div>


        {/* Brand */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <h2 className="text-3xl font-bold text-cyan-300">
            {BRAND}
          </h2>

          <p className="text-sm text-blue-200">
            Trusted Online Slot Gaming Platform
          </p>
        </div>


        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="
              w-11 h-11 rounded-full
              flex items-center justify-center
              bg-blue-900/60
              border border-blue-300/30
              hover:bg-cyan-500
              hover:text-black
              transition
              "
            >
              <Icon size={20} />
            </a>
          ))}
        </div>


        {/* About */}
        <div className="bg-blue-950/40 rounded-2xl p-5 mb-8 border border-blue-400/20">
          <p className="text-sm leading-7 text-blue-100 text-center whitespace-pre-line">
            {ABOUT_TEXT}
          </p>
        </div>


        {/* Rules */}
        <div className="bg-blue-950/40 rounded-2xl p-5 mb-8 border border-blue-400/20">

          <div className="flex items-center gap-2 mb-4 justify-center">
            <ShieldCheck className="text-cyan-300" size={20}/>
            <h3 className="font-semibold text-cyan-300">
              Important Notice
            </h3>
          </div>


          <ul className="space-y-3 text-sm text-blue-100">
            {RULES.map((rule,index)=>(
              <li key={index}>
                {index + 1}. {rule}
              </li>
            ))}
          </ul>

        </div>


        {/* Copyright */}
        <div className="
          border-t border-blue-300/20 
          pt-6 
          text-center 
          text-sm 
          text-blue-200
        ">
          Copyright © 2026 66RS.com
        </div>


      </div>
    </footer>
  );
}