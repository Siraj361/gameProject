import { useState } from "react";
import "./vip.css";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ClipboardClock,
  Coins,
  Crown,
  HandCoins,
} from "lucide-react";

/* =========================================================
   VIP LEVELS
========================================================= */

const levels = [
  { grade: "VIP1", points: "500", upgrade: "10", monthly: "5", weekly: "0" },
  { grade: "VIP2", points: "1000", upgrade: "15", monthly: "10", weekly: "5" },
  { grade: "VIP3", points: "3000", upgrade: "30", monthly: "15", weekly: "10" },
  { grade: "VIP4", points: "10000", upgrade: "50", monthly: "30", weekly: "15" },
  { grade: "VIP5", points: "30000", upgrade: "80", monthly: "45", weekly: "20" },
  { grade: "VIP6", points: "50000", upgrade: "120", monthly: "60", weekly: "25" },
  { grade: "VIP7", points: "100000", upgrade: "200", monthly: "80", weekly: "30" },
  { grade: "VIP8", points: "300000", upgrade: "500", monthly: "120", weekly: "50" },
  { grade: "VIP9", points: "600000", upgrade: "1000", monthly: "180", weekly: "100" },
  { grade: "VIP10", points: "800000", upgrade: "1200", monthly: "220", weekly: "120" },
  { grade: "VIP11", points: "1000000", upgrade: "1500", monthly: "260", weekly: "140" },
  { grade: "VIP12", points: "1200000", upgrade: "1800", monthly: "300", weekly: "160" },
  { grade: "VIP13", points: "1500000", upgrade: "2200", monthly: "350", weekly: "180" },
  { grade: "VIP14", points: "1800000", upgrade: "2600", monthly: "400", weekly: "200" },
  { grade: "VIP15", points: "2200000", upgrade: "3000", monthly: "450", weekly: "230" },
  { grade: "VIP16", points: "2600000", upgrade: "3500", monthly: "500", weekly: "260" },
  { grade: "VIP17", points: "3000000", upgrade: "4000", monthly: "550", weekly: "300" },
  { grade: "VIP18", points: "3500000", upgrade: "4600", monthly: "620", weekly: "340" },
  { grade: "VIP19", points: "4000000", upgrade: "5200", monthly: "700", weekly: "380" },
  { grade: "VIP20", points: "5000000", upgrade: "6000", monthly: "800", weekly: "450" },
  { grade: "VIP21", points: "6000000", upgrade: "7000", monthly: "900", weekly: "520" },
  { grade: "VIP22", points: "7000000", upgrade: "8000", monthly: "1000", weekly: "600" },
  { grade: "VIP23", points: "8000000", upgrade: "9000", monthly: "1100", weekly: "700" },
  { grade: "VIP24", points: "9000000", upgrade: "10000", monthly: "1200", weekly: "800" },
  { grade: "VIP25", points: "10000000", upgrade: "12000", monthly: "1500", weekly: "1000" },
];

/* =========================================================
   TABS
========================================================= */

const tabs = [
  {
    id: "upgrade",
    name: "Upgrade Rewards",
  },
  {
    id: "monthly",
    name: "Monthly Reward",
  },
  {
    id: "weekly",
    name: "Weekly Reward",
  },
  {
    id: "relegation",
    name: "Relegation Points",
  },
];

/* =========================================================
   TABLE CONFIG
========================================================= */

const tableConfig = {
  upgrade: {
    headers: [
      "Grade",
      "Required Points",
      "Upgrade Rewards",
    ],
    cells: (r) => [r.points, r.upgrade],
  },

  monthly: {
    headers: [
      "Grade",
      "Required Points",
      "Monthly Rewards",
      "Monthly Recharge",
    ],
    cells: (r) => [r.points, r.monthly, "0"],
  },

  weekly: {
    headers: [
      "Grade",
      "Required Points",
      "Weekly Rewards",
      "Weekly Recharge",
    ],
    cells: (r) => [r.points, r.weekly, "0"],
  },

  relegation: {
    headers: [
      "Grade",
      "Required Points",
      "Relegation Points",
      "Downgrade",
    ],
    cells: (r) => [r.points, "0", "1"],
  },
};

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    title: "Weekly\nRewards",
    icon: Coins,
  },
  {
    title: "Monthly\nRewards",
    icon: HandCoins,
  },
  {
    title: "Upgrade\nRewards",
    icon: Crown,
  },
];

/* =========================================================
   VIP PAGE
========================================================= */

export default function VipPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("upgrade");

  const config = tableConfig[activeTab];

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#071321]
      "
    >
      {/* =====================================================
          MOBILE CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[540px]
          overflow-x-hidden
          bg-[#071321]
          pb-8
        "
        style={{
          background: "var(--gradient-page)",
        }}
      >

        {/* =====================================================
            HEADER
        ====================================================== */}

        <header
          className="
            fixed
            left-1/2
            top-0
            z-50
            grid
            h-16
            w-full
            max-w-[540px]
            -translate-x-1/2
            grid-cols-[52px_1fr_52px]
            items-center
            border-b
            border-cyan-500/20
            bg-[#071321]/95
            px-3
            shadow-lg
            backdrop-blur-xl
          "
        >

          {/* BACK BUTTON */}

          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/5
              text-white
              transition
              hover:bg-cyan-500/20
              active:scale-90
            "
          >
            <ArrowLeft size={23} />
          </button>

          {/* TITLE */}

          <h1
            className="
              overflow-hidden
              text-center
              text-[24px]
              font-extrabold
              tracking-[7px]
              text-cyan-300
              drop-shadow-[0_0_15px_rgba(34,211,238,.8)]
              sm:text-[27px]
              sm:tracking-[9px]
            "
          >
            VIP
          </h1>

          {/* HISTORY */}

          <button
            aria-label="VIP history"
            className="
              ml-auto
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/5
              text-cyan-300
              transition
              hover:bg-cyan-500/20
              active:scale-90
            "
          >
            <ClipboardClock size={22} />
          </button>

        </header>

        {/* =====================================================
            TOP SPACER FOR FIXED HEADER
        ====================================================== */}

        <div className="h-16" />

        {/* =====================================================
            VIP BANNER
        ====================================================== */}

        <section
          className="
            relative
            flex
            min-h-[180px]
            w-full
            items-center
            overflow-hidden
            px-4
            py-5
            sm:min-h-[195px]
            sm:px-5
          "
          style={{
            background: "var(--gradient-vip)",
          }}
        >

          {/* LEFT */}

          <div
            className="
              flex
              w-[30%]
              min-w-0
              flex-col
              justify-center
            "
          >

            <h2
              className="
                text-[40px]
                font-black
                italic
                leading-none
                sm:text-5xl
              "
              style={{
                background: "var(--gradient-cyan)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              VIP
            </h2>

            <span
              className="
                mt-2
                max-w-[100px]
                text-[11px]
                leading-4
                text-white/70
                sm:text-sm
              "
            >
              Welcome to VIP Center
            </span>

          </div>

          {/* CENTER */}

          <div
            className="
              flex
              w-[40%]
              justify-center
            "
          >

            <div
              className="
                relative
                flex
                h-[125px]
                w-[125px]
                items-center
                justify-center
                sm:h-36
                sm:w-36
              "
            >

              {/* GLOW */}

              <span
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-cyan-400/30
                  blur-3xl
                "
              />

              {/* OUTER RING */}

              <span
                className="
                  absolute
                  inset-0
                  rounded-full
                  border-[4px]
                  border-cyan-300
                  sm:border-[5px]
                "
              />

              {/* DASHED RING */}

              <span
                className="
                  absolute
                  inset-[9px]
                  rounded-full
                  border-2
                  border-dashed
                  border-cyan-200
                  sm:inset-[10px]
                "
              />

              {/* LEVEL */}

              <div
                className="
                  relative
                  flex
                  h-[78px]
                  w-[78px]
                  items-center
                  justify-center
                  rounded-full
                  text-[30px]
                  font-bold
                  text-white
                  sm:h-24
                  sm:w-24
                  sm:text-4xl
                "
                style={{
                  background: "var(--gradient-cyan)",
                }}
              >
                0
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              w-[30%]
              flex-col
              items-end
              justify-center
              text-right
            "
          >

            <span
              className="
                text-[12px]
                text-cyan-100
                sm:text-base
              "
            >
              Current
            </span>

            <h2
              className="
                text-[24px]
                font-extrabold
                text-cyan-300
                sm:text-3xl
              "
            >
              Level
            </h2>

          </div>

        </section>

        {/* =====================================================
            PROGRESS
        ====================================================== */}

        <section className="px-4 pt-5">

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-[#102542]/70
              p-3
              shadow-lg
            "
          >

            {/* CUMULATIVE BETS */}

            <div
              className="
                rounded-xl
                bg-[#0d2038]
                p-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >

                <span
                  className="
                    text-sm
                    font-medium
                    sm:text-base
                  "
                >
                  Cumulative Bets
                </span>

                <span
                  className="
                    shrink-0
                    text-lg
                    font-bold
                    sm:text-xl
                  "
                >
                  0.00
                </span>

              </div>

              <div
                className="
                  mt-3
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-[#071321]
                "
              >

                <div
                  className="
                    h-full
                    rounded-full
                  "
                  style={{
                    width: "2%",
                    background: "var(--gradient-cyan)",
                  }}
                />

              </div>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-between
                  gap-3
                  text-xs
                  sm:text-sm
                "
              >

                <span className="text-gray-400">
                  0.00
                </span>

                <span className="text-right text-cyan-300">
                  500.00 (VIP1)
                </span>

              </div>

            </div>

            {/* MONTHLY BETS */}

            <div
              className="
                mt-3
                rounded-xl
                bg-[#0d2038]
                p-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >

                <span
                  className="
                    text-sm
                    font-medium
                    sm:text-base
                  "
                >
                  Monthly Bets
                </span>

                <span
                  className="
                    shrink-0
                    text-lg
                    font-bold
                    sm:text-xl
                  "
                >
                  0.00
                </span>

              </div>

              <div
                className="
                  mt-3
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-[#071321]
                "
              >

                <div
                  className="
                    h-full
                    rounded-full
                  "
                  style={{
                    width: "2%",
                    background: "var(--gradient-cyan)",
                  }}
                />

              </div>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-between
                  gap-3
                  text-xs
                  sm:text-sm
                "
              >

                <span className="text-gray-400">
                  0.00
                </span>

                <span className="text-right text-cyan-300">
                  Relegation Points : 0.00
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            VIP BENEFITS
        ====================================================== */}

        <section className="px-4 pt-7">

          <h2
            className="
              mb-4
              flex
              items-center
              gap-2
              text-lg
              font-bold
            "
          >

            <Crown
              size={20}
              className="shrink-0 text-cyan-300"
            />

            VIP Level Benefits

          </h2>

          <div
            className="
              grid
              grid-cols-3
              gap-2
              sm:gap-3
            "
          >

            {benefits.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    min-w-0
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#102542]/70
                    px-2
                    py-4
                    text-center
                    transition
                    hover:scale-[1.02]
                  "
                >

                  <div
                    className="
                      mx-auto
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-500/10
                      sm:h-12
                      sm:w-12
                    "
                  >

                    <Icon
                      size={23}
                      className="text-cyan-300 sm:size-[26px]"
                    />

                  </div>

                  <p
                    className="
                      mt-3
                      whitespace-pre-line
                      text-[11px]
                      font-semibold
                      leading-4
                      sm:text-sm
                    "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-bold
                      text-cyan-300
                      sm:text-base
                    "
                  >
                    +0.00
                  </p>

                  <button
                    disabled
                    className="
                      mt-3
                      w-full
                      rounded-lg
                      border
                      border-white/10
                      bg-[#1b3558]
                      py-2
                      text-[11px]
                      text-gray-400
                      sm:text-sm
                    "
                  >
                    Receive
                  </button>

                </div>
              );

            })}

          </div>

        </section>

        {/* =====================================================
            TABS
        ====================================================== */}

        <section className="pt-7">

          <div
            className="
              hide-scrollbar
              flex
              w-full
              overflow-x-auto
              overscroll-x-contain
              border-b
              border-white/10
              px-2
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            {tabs.map((tab) => (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative
                  shrink-0
                  px-4
                  py-3
                  text-xs
                  font-semibold
                  transition
                  sm:px-5
                  sm:text-sm

                  ${
                    activeTab === tab.id
                      ? "text-cyan-300"
                      : "text-white/70"
                  }
                `}
              >

                {tab.name}

                {activeTab === tab.id && (

                  <span
                    className="
                      absolute
                      bottom-0
                      left-2
                      right-2
                      h-1
                      rounded-full
                    "
                    style={{
                      background: "var(--gradient-cyan)",
                    }}
                  />

                )}

              </button>

            ))}

          </div>

        </section>

        {/* =====================================================
            REWARDS TABLE
        ====================================================== */}

        <section className="px-4 pt-5">

          <div
            className="
              w-full
              overflow-x-auto
              rounded-2xl
              border
              border-white/10
              bg-[#102542]/70
            "
            style={{
              scrollbarWidth: "thin",
              WebkitOverflowScrolling: "touch",
            }}
          >

            <table
              className="
                min-w-[560px]
                w-full
                text-sm
              "
            >

              <thead
                style={{
                  background: "var(--gradient-vip)",
                }}
              >

                <tr>

                  {config.headers.map((head) => (

                    <th
                      key={head}
                      className="
                        whitespace-nowrap
                        px-4
                        py-3
                        text-center
                        text-xs
                        font-bold
                        text-white
                        sm:text-sm
                      "
                    >
                      {head}
                    </th>

                  ))}

                </tr>

              </thead>

              <tbody>

                {levels.map((row, index) => (

                  <tr
                    key={row.grade}
                    className={`
                      border-t
                      border-white/10
                      ${
                        index % 2 === 0
                          ? "bg-white/0"
                          : "bg-white/5"
                      }
                    `}
                  >

                    <td
                      className="
                        whitespace-nowrap
                        px-4
                        py-4
                        text-center
                        font-bold
                        text-cyan-300
                      "
                    >
                      {row.grade}
                    </td>

                    {config.cells(row).map(
                      (cell, i) => (

                        <td
                          key={i}
                          className="
                            whitespace-nowrap
                            px-4
                            py-4
                            text-center
                            text-white/90
                          "
                        >
                          {cell}
                        </td>

                      )
                    )}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* =====================================================
            ACTIVITY DESCRIPTION
        ====================================================== */}

        <section className="px-4 pt-7">

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-[#102542]/70
              p-4
              sm:p-5
            "
          >

            <h2
              className="
                mb-5
                text-center
                text-lg
                font-bold
              "
            >
              Activity Description
            </h2>

            <ol
              className="
                list-decimal
                space-y-3
                pl-5
                text-[13px]
                leading-6
                text-white/80
                sm:text-sm
                sm:leading-7
              "
            >

              <li>
                Reach the required turnover points to claim
                the Upgrade Reward.
              </li>

              <li>
                Monthly Rewards can be claimed at{" "}
                <span className="font-semibold text-cyan-300">
                  4:00 AM (GMT+5)
                </span>{" "}
                on the first day of every month.
              </li>

              <li>
                Weekly Rewards can be claimed every Monday at{" "}
                <span className="font-semibold text-cyan-300">
                  4:00 AM (GMT+5).
                </span>
              </li>

              <li>
                A 1x turnover is required before withdrawal.
              </li>

              <li>
                To ensure fairness, the platform reserves the
                right to cancel, suspend, freeze or modify this
                promotion at any time if abnormal betting, fraud
                or cheating is detected.
              </li>

            </ol>

          </div>

        </section>

        {/* =====================================================
            BOTTOM SPACE
        ====================================================== */}

        <div className="h-6" />

      </div>

      {/* =====================================================
          GLOBAL MOBILE STYLES
      ====================================================== */}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

    </div>
  );
}