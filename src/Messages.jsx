import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Inbox,
} from "lucide-react";

import BonusBanner from "./assets/message1.png";

export default function Messages() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("system");
  const [expanded, setExpanded] = useState(false);

  const tabs = [
    {
      id: "system",
      title: "System",
    },
    {
      id: "deposit",
      title: "Deposit",
    },
    {
      id: "withdrawal",
      title: "Withdrawal",
    },
    {
      id: "rewards",
      title: "Rewards",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        w-full
        flex
        justify-center
        overflow-x-hidden
        bg-gradient-to-b
        from-[#031525]
        via-[#07233b]
        to-[#02111d]
      "
    >
      <div
        className="
          w-full
          max-w-[540px]
          min-h-screen
          px-4
          pb-24
        "
      >
        {/* Header */}

        <div className="relative flex h-16 items-center justify-center">

          <button
            onClick={() => navigate(-1)}
            className="
              absolute
              left-0
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-cyan-500/30
              bg-[#103b65]
            "
          >
            <ArrowLeft
              size={22}
              className="text-cyan-300"
            />
          </button>

          <h1 className="text-[30px] font-bold text-white">
            All Messages
          </h1>

        </div>

        {/* Tabs */}

        <div className="mt-6 grid grid-cols-4 gap-3">

          {tabs.map((tab) => (

            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`

                h-14
                rounded-2xl
                border
                text-lg
                font-semibold
                transition-all

                ${
                  activeTab === tab.id
                    ? "border-cyan-300 bg-gradient-to-r from-cyan-500 to-blue-700 text-white shadow-[0_0_18px_rgba(34,211,238,.45)]"
                    : "border-cyan-700/30 bg-[#0b2237] text-cyan-200"
                }

              `}
            >
              {tab.title}
            </button>

          ))}

        </div>

        {/* ===================== */}
        {/* SYSTEM TAB */}
        {/* ===================== */}

        {activeTab === "system" && (

          <div className="mt-6 space-y-6">            {/* Message Card */}

            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-cyan-500/20
                bg-[#071d32]
                shadow-xl
              "
            >
              {/* Card Header */}

              <div
                className="
                  flex
                  h-14
                  items-center
                  justify-between
                  border-b
                  border-cyan-500/20
                  px-5
                "
              >
                <h2 className="text-xl font-bold text-white">
                  System Notification
                </h2>

                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                  NEW
                </span>
              </div>

              {/* Card Body */}

              <div className="p-5">

                {/* Single Banner */}

                <img
                  src={BonusBanner}
                  alt="Banner"
                  className="w-full rounded-2xl object-cover"
                />

                {/* Expand Button */}

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="
                    mt-5
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-500/30
                    bg-gradient-to-r
                    from-cyan-600
                    to-blue-700
                    text-lg
                    font-bold
                    text-white
                    transition
                  "
                >
                  {expanded ? "Collapse" : "Expand"}

                  {expanded ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {/* Expand Content */}

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ${
                      expanded
                        ? "mt-5 max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      rounded-2xl
                      border
                      border-cyan-500/20
                      bg-[#0a2944]
                      p-5
                    "
                  >
                    <h3 className="text-2xl font-bold text-cyan-300">
                      🎉 Welcome Bonus
                    </h3>

                    <p className="mt-4 leading-8 text-cyan-100">
                      Welcome to our platform. Complete your first
                      recharge to unlock exclusive bonuses, daily
                      rewards and limited-time gifts.
                    </p>

                    <ul className="mt-5 space-y-3 text-white">
                      <li>✅ First Deposit Bonus</li>
                      <li>✅ Daily Login Rewards</li>
                      <li>✅ VIP Upgrade Gifts</li>
                      <li>✅ Invite Friends Commission</li>
                    </ul>

                    <button
                      className="
                        mt-6
                        h-12
                        w-full
                        rounded-xl
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-700
                        font-bold
                        text-white
                      "
                    >
                      Claim Reward
                    </button>
                  </div>
                </div>

                <p className="mt-5 text-sm text-cyan-300">
                  08 Aug 2026 • 12:30 AM
                </p>

              </div>
            </div>

          </div>
        )}
                {/* ========================= */}
        {/* EMPTY TABS */}
        {/* ========================= */}

        {(activeTab === "deposit" ||
          activeTab === "withdrawal" ||
          activeTab === "rewards") && (

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              pt-24
            "
          >

            {/* No Data Icon */}

            <div
              className="
                flex
                h-40
                w-40
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
              "
            >
              <Inbox
                size={80}
                className="text-cyan-300"
              />
            </div>

            <h2
              className="
                mt-8
                text-3xl
                font-bold
                text-white
              "
            >
              No Data Available
            </h2>

            <p
              className="
                mt-3
                max-w-[320px]
                text-center
                text-lg
                leading-8
                text-cyan-300
              "
            >
              There are currently no records in this
              section. Notifications will appear here
              automatically.
            </p>

            <button
              onClick={() => setActiveTab("system")}
              className="
                mt-10
                h-14
                w-full
                max-w-[300px]
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-700
                text-xl
                font-bold
                text-white
                transition
                active:scale-95
              "
            >
              Back to System
            </button>

          </div>

        )}

      </div>
    </div>
  );
}