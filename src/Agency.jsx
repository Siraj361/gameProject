import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InviteBonus from "./InviteBonus";
import MyData from "./MyData";
import DateModal from "./DateModal";
import Invite from "./Invite";

export default function Agency() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("invitation");

  const tabs = [
    {
      id: "invitation",
      name: "Invitation bonus",
    },
    {
      id: "wheel",
      name: "Spinning Wheel",
      badge: "4",
    },
    {
      id: "invite",
      name: "Invite",
    },
    {
      id: "data",
      name: "My Data",
    },
    {
      id: "reward",
      name: "Reward",
    },
    {
      id: "team",
      name: "Team",
    },
    {
      id: "faq",
      name: "FAQ",
    },
  ];

  return (
    <div
      className="
        h-screen
        w-full
        overflow-hidden
        bg-[#020B18]
        text-white
      "
    >
      {/* =====================================================
          540px AGENCY CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          h-screen
          w-full
          max-w-[540px]
          flex-col
          overflow-hidden
          bg-gradient-to-b
          from-[#020B18]
          via-[#031B35]
          to-[#020817]
        "
      >

        {/* =====================================================
            TOP HEADER
        ====================================================== */}

        <header
          className="
            relative
            z-50
            flex
            h-[76px]
            min-h-[76px]
            w-full
            shrink-0
            items-center
            justify-center
            border-b
            border-cyan-400/25
            bg-[#031426]
          "
        >

          {/* BACK BUTTON */}

          <button
            onClick={() => navigate(-1)}
            className="
              absolute
              left-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-cyan-300/40
              bg-[#073154]
              text-[31px]
              font-light
              leading-none
              text-white
              shadow-[0_0_15px_rgba(0,200,255,.18)]
              transition
              active:scale-90
            "
          >
            ‹
          </button>


          {/* TITLE */}

          <h1
            className="
              text-[24px]
              font-bold
              tracking-wide
              text-white
              drop-shadow-[0_0_8px_rgba(0,210,255,.3)]
            "
          >
            Agency
          </h1>

        </header>


        {/* =====================================================
            TABS
            ONE LINE + HORIZONTAL SCROLL
        ====================================================== */}

        <div
          className="
            z-40
            h-[58px]
            min-h-[58px]
            w-full
            shrink-0
            overflow-x-auto
            overflow-y-hidden
            border-b
            border-cyan-400/30
            bg-[#061522]
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          <div
            className="
              flex
              h-full
              w-max
              min-w-full
              items-stretch
            "
          >

            {tabs.map((tab) => {
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative
                    flex
                    h-full
                    shrink-0
                    items-center
                    justify-center
                    whitespace-nowrap
                    px-5
                    text-[17px]
                    font-bold
                    transition-all
                    duration-200

                    ${
                      active
                        ? `
                          border-x
                          border-t
                          border-cyan-200/60
                          bg-gradient-to-b
                          from-[#0B76B8]
                          via-[#075A91]
                          to-[#06365A]
                          text-white
                          shadow-[0_0_15px_rgba(0,180,255,.18)]
                        `
                        : `
                          text-white/90
                          hover:bg-[#063254]
                        `
                    }
                  `}
                >

                  {tab.name}


                  {/* BADGE */}

                  {tab.badge && (
                    <span
                      className="
                        absolute
                        right-1
                        top-[-3px]
                        flex
                        h-[25px]
                        min-w-[25px]
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-white
                        bg-red-600
                        px-1
                        text-[12px]
                        font-bold
                        text-white
                        shadow-[0_0_8px_rgba(255,0,0,.5)]
                      "
                    >
                      {tab.badge}
                    </span>
                  )}


                  {/* ACTIVE LINE */}

                  {active && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-[3px]
                        bg-cyan-300
                        shadow-[0_0_10px_rgba(0,220,255,.8)]
                      "
                    />
                  )}

                </button>
              );
            })}

          </div>
        </div>


        {/* =====================================================
            SCROLLABLE CONTENT
            ONLY THIS AREA SCROLLS
        ====================================================== */}

        <main
          className="
            min-h-0
            w-full
            flex-1
            overflow-x-hidden
            overflow-y-auto
            overscroll-contain
            pb-[135px]
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >

          {/* =================================================
              INVITATION BONUS
          ================================================= */}

        {activeTab === "invitation" && (
  <div className="w-full">
    <InviteBonus hideHeader={true} />
  </div>
)}


          {/* =================================================
              SPINNING WHEEL
          ================================================= */}

          {activeTab === "wheel" && (
            <SpinningWheelPage />
          )}


          {/* =================================================
              INVITE
          ================================================= */}

          {activeTab === "invite" && (
            <Invite />
          )}


          {/* =================================================
              MY DATA
          ================================================= */}

          {activeTab === "data" && (
            <MyData />
          )}


          {/* =================================================
              REWARD
          ================================================= */}

          {activeTab === "reward" && (
            <RewardPage />
          )}


          {/* =================================================
              TEAM
          ================================================= */}

          {activeTab === "team" && (
            <TeamPage />
          )}


          {/* =================================================
              FAQ
          ================================================= */}

          {activeTab === "faq" && (
            <FaqPage />
          )}

        </main>

      </div>


      {/* =====================================================
          HIDE SCROLLBARS
          SCROLLING REMAINS ENABLED
      ====================================================== */}

      <style>{`

        main::-webkit-scrollbar {
          width: 0px;
          height: 0px;
          display: none;
        }

        main {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        div::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }

      `}</style>

    </div>
  );
}


/* =========================================================
   SPINNING WHEEL
========================================================= */

function SpinningWheelPage() {
  return (
    <div className="w-full px-3 pb-8 pt-4">

      <div
        className="
          flex
          min-h-[600px]
          flex-col
          items-center
          justify-center
          rounded-[22px]
          border
          border-cyan-300/40
          bg-gradient-to-b
          from-[#082B49]
          via-[#062039]
          to-[#03101D]
          p-6
        "
      >

        {/* Wheel */}

        <div
          className="
            flex
            h-[220px]
            w-[220px]
            items-center
            justify-center
            rounded-full
            border-[8px]
            border-cyan-300/50
            bg-[conic-gradient(#087FBE,#0BC5FF,#07568D,#0BC5FF,#087FBE)]
            shadow-[0_0_30px_rgba(0,200,255,.3)]
          "
        >

          <div
            className="
              flex
              h-[160px]
              w-[160px]
              items-center
              justify-center
              rounded-full
              border
              border-cyan-200/40
              bg-[#031A30]
              text-center
              text-[21px]
              font-bold
            "
          >
            Lucky
            <br />
            Wheel
          </div>

        </div>


        <h2 className="mt-8 text-[24px] font-bold">
          Spinning Wheel
        </h2>


        <p className="mt-3 text-center text-white/60">
          Spin the wheel and get exciting rewards.
        </p>


        <button
          className="
            mt-7
            rounded-[15px]
            border
            border-cyan-200/50
            bg-gradient-to-b
            from-[#0EA8F0]
            via-[#087DC0]
            to-[#064A78]
            px-10
            py-3
            text-[17px]
            font-bold
            shadow-[0_5px_15px_rgba(0,180,255,.18)]
            transition
            active:scale-95
          "
        >
          Spin Now
        </button>

      </div>

    </div>
  );
}


/* =========================================================
   REWARD
========================================================= */

function RewardPage() {
  const [dateModalOpen, setDateModalOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    "11 Aug 2026 00:00 - 12 Aug 2026 00:00"
  );

  return (
    <>

      <div className="w-full px-3 pb-6 pt-4">

        <div
          className="
            rounded-[22px]
            border
            border-cyan-300/45
            bg-gradient-to-b
            from-[#082B49]
            via-[#061C31]
            to-[#03101C]
            p-5
            shadow-[0_0_18px_rgba(0,180,255,.08)]
          "
        >

          {/* TITLE */}

          <h2 className="text-center text-[26px] font-bold text-white">
            Reward
          </h2>


          {/* DATE */}

          <button
            onClick={() => setDateModalOpen(true)}
            className="
              mt-6
              flex
              min-h-[85px]
              w-full
              items-center
              gap-4
              rounded-[18px]
              border
              border-cyan-300/40
              bg-gradient-to-r
              from-[#073454]
              via-[#062A46]
              to-[#041A2E]
              px-4
              text-left
              transition
              active:scale-[.98]
            "
          >

            <span className="text-[34px] text-cyan-200">
              ↗
            </span>


            <div className="min-w-0 flex-1">

              <p className="text-[12px] text-cyan-200/70">
                Selected Date
              </p>

              <p className="mt-1 truncate text-[17px] font-bold text-white">
                {selectedDate}
              </p>

            </div>


            <span className="text-[28px] text-cyan-300">
              ›
            </span>

          </button>


          {/* REWARD BOXES */}

          <div className="mt-5 space-y-3">

            <RewardBox
              title="Invitation Reward"
              value="0.00"
            />

            <RewardBox
              title="Team Reward"
              value="0.00"
            />

            <RewardBox
              title="Commission Reward"
              value="0.00"
            />

            <RewardBox
              title="Total Reward"
              value="0.00"
            />

          </div>

        </div>


        <div className="h-[100px]" />

      </div>


      {/* DATE MODAL */}

      <DateModal
        open={dateModalOpen}
        onClose={() => setDateModalOpen(false)}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

    </>
  );
}


/* =========================================================
   TEAM
========================================================= */

function TeamPage() {
  return (
    <div className="w-full px-3 pb-8 pt-4">

      <div
        className="
          min-h-[600px]
          rounded-[22px]
          border
          border-cyan-300/40
          bg-gradient-to-b
          from-[#082B49]
          via-[#061C31]
          to-[#03101C]
          p-5
        "
      >

        <h2 className="text-center text-[25px] font-bold">
          Team
        </h2>


        <div className="mt-6 space-y-4">

          <DataBox
            title="Team Members"
            value="0"
          />

          <DataBox
            title="Active Members"
            value="0"
          />

          <DataBox
            title="Today Members"
            value="0"
          />

          <DataBox
            title="Total Team"
            value="0"
          />

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   FAQ
========================================================= */

function FaqPage() {

  const faqs = [
    {
      question: "How can I invite friends?",
      answer:
        "You can invite your friends by sharing your invitation link. When your invited friends register and complete the required activities, you can receive the corresponding rewards.",
    },

    {
      question: "How can I get commission?",
      answer:
        "You can earn commission through your team activity. The commission amount depends on the eligible activity and the applicable commission rules.",
    },

    {
      question: "How does the team reward work?",
      answer:
        "Team rewards are based on the eligible activity of your invited members and team. You can check your team information and rewards from the My Data section.",
    },

    {
      question: "When can I receive my reward?",
      answer:
        "Rewards are credited after the required conditions are completed and verified. The exact reward time may depend on the specific activity.",
    },

    {
      question: "How can I check my team data?",
      answer:
        "Open the My Data section from the Agency menu. There you can view your team information, commission, rebate and rewards.",
    },
  ];


  const [openIndex, setOpenIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  };


  return (
    <div className="w-full px-3 pb-8 pt-4">

      <div
        className="
          overflow-hidden
          rounded-[22px]
          border
          border-cyan-300/40
          bg-gradient-to-b
          from-[#082B49]
          via-[#061C31]
          to-[#03101C]
          p-4
          shadow-[0_0_20px_rgba(0,180,255,.08)]
        "
      >

        {/* FAQ HEADER */}

        <div className="mb-6 text-center">

          <div
            className="
              mx-auto
              flex
              h-[55px]
              w-[55px]
              items-center
              justify-center
              rounded-full
              border
              border-cyan-300/40
              bg-[#073454]
              text-[27px]
              font-bold
              text-cyan-200
            "
          >
            ?
          </div>


          <h2 className="mt-3 text-[25px] font-bold text-white">
            Frequently Asked Questions
          </h2>


          <p className="mt-1 text-[13px] text-cyan-100/60">
            Find answers to common questions
          </p>

        </div>


        {/* FAQ ITEMS */}

        <div className="space-y-3">

          {faqs.map((item, index) => {

            const isOpen =
              openIndex === index;

            return (
              <div
                key={index}
                className={`
                  overflow-hidden
                  rounded-[17px]
                  border
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "border-cyan-300/60 bg-[#07304D]"
                      : "border-cyan-300/20 bg-[#06223A]"
                  }
                `}
              >

                {/* QUESTION */}

                <button
                  onClick={() =>
                    toggleFaq(index)
                  }
                  className="
                    flex
                    min-h-[65px]
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4
                    text-left
                  "
                >

                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >

                    <span
                      className={`
                        flex
                        h-[30px]
                        w-[30px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[13px]
                        font-bold

                        ${
                          isOpen
                            ? "bg-cyan-400 text-[#032039]"
                            : "bg-[#0A3A5D] text-cyan-200"
                        }
                      `}
                    >
                      {index + 1}
                    </span>


                    <span
                      className={`
                        text-[15px]
                        font-semibold

                        ${
                          isOpen
                            ? "text-cyan-100"
                            : "text-white"
                        }
                      `}
                    >
                      {item.question}
                    </span>

                  </div>


                  <span
                    className={`
                      flex
                      h-[30px]
                      w-[30px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-cyan-300/25
                      text-[21px]
                      text-cyan-300
                      transition-transform
                      duration-300

                      ${
                        isOpen
                          ? "rotate-90"
                          : ""
                      }
                    `}
                  >
                    ›
                  </span>

                </button>


                {/* ANSWER */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="min-h-0 overflow-hidden">

                    <div
                      className="
                        mx-4
                        mb-4
                        border-t
                        border-cyan-300/15
                        pt-4
                      "
                    >

                      <p
                        className="
                          text-[14px]
                          leading-6
                          text-white/70
                        "
                      >
                        {item.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>


      <div className="h-[100px]" />

    </div>
  );
}


/* =========================================================
   DATA BOX
========================================================= */

function DataBox({
  title,
  value,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-[15px]
        border
        border-cyan-300/25
        bg-[#06223A]
        px-4
        py-4
      "
    >

      <span className="text-[16px] text-white/80">
        {title}
      </span>

      <span className="text-[18px] font-bold text-cyan-200">
        {value}
      </span>

    </div>
  );
}


/* =========================================================
   REWARD BOX
========================================================= */

function RewardBox({
  title,
  value,
}) {
  return (
    <div
      className="
        flex
        min-h-[72px]
        items-center
        justify-between
        rounded-[16px]
        border
        border-cyan-300/25
        bg-[#06223A]
        px-5
      "
    >

      <span className="text-[18px] font-semibold text-white/90">
        {title}
      </span>

      <span className="text-[20px] font-bold text-cyan-200">
        {value}
      </span>

    </div>
  );
}