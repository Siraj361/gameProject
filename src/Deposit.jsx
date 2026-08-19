import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaHistory,
  FaTimes,
  FaChevronDown,
  FaCheckCircle,
  FaClock,
  FaBan,
  FaWallet,
} from "react-icons/fa";

export default function Deposit() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("jazzcash");
  const [channel, setChannel] = useState("S4");
  const [amount, setAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    "11 Aug 2026 00:00 - 12 Aug 2026 00:00"
  );

  const [historyFilter, setHistoryFilter] = useState("All");
  const [message, setMessage] = useState("");

  /* =========================================================
     PAYMENT METHODS
  ========================================================= */

  const methods = [
    {
      id: "jazzcash",
      name: "JazzCash",
      icon: "JC",
    },
    {
      id: "easypaisa",
      name: "EasyPaisa",
      icon: "EP",
    },
  ];

  /* =========================================================
     CHANNELS
  ========================================================= */

  const channels = {
    jazzcash: [
      {
        id: "S4",
        name: "JazzCash",
        code: "S4",
      },
      {
        id: "S8",
        name: "JazzCash",
        code: "S8",
      },
      {
        id: "S12",
        name: "JazzCash",
        code: "S12",
      },
    ],

    easypaisa: [
      {
        id: "E1",
        name: "EasyPaisa",
        code: "E1",
      },
      {
        id: "E2",
        name: "EasyPaisa",
        code: "E2",
      },
      {
        id: "E3",
        name: "EasyPaisa",
        code: "E3",
      },
    ],
  };

  /* =========================================================
     AMOUNTS
  ========================================================= */

  const amounts = [
    100,
    300,
    500,
    1000,
    3000,
    5000,
    10000,
    30000,
    50000,
  ];

  /* =========================================================
     HISTORY DATA
  ========================================================= */

  const historyData = [];

  /* =========================================================
     DATE DATA
  ========================================================= */

  const dates = [
    "11 Aug 2026 00:00 - 12 Aug 2026 00:00",
    "10 Aug 2026 00:00 - 11 Aug 2026 00:00",
    "09 Aug 2026 00:00 - 10 Aug 2026 00:00",
    "08 Aug 2026 00:00 - 09 Aug 2026 00:00",
    "07 Aug 2026 00:00 - 08 Aug 2026 00:00",
  ];

  /* =========================================================
     CURRENT AMOUNT
  ========================================================= */

  const finalAmount =
    customAmount !== "" ? Number(customAmount) : amount;

  /* =========================================================
     DEPOSIT FUNCTION
  ========================================================= */

  const handleDeposit = () => {
    if (!finalAmount || finalAmount <= 0) {
      setMessage("Please select or enter a deposit amount.");
      return;
    }

    setMessage(
      `${method === "jazzcash" ? "JazzCash" : "EasyPaisa"} ${
        channel
      } selected — Rs ${finalAmount}`
    );

    // Yahan baad mein API/payment page connect kar sakte ho.
  };

  /* =========================================================
     METHOD CHANGE
  ========================================================= */

  const handleMethodChange = (id) => {
    setMethod(id);

    const firstChannel = channels[id][0];

    setChannel(firstChannel.id);
    setAmount(null);
    setCustomAmount("");
    setMessage("");
  };

  /* =========================================================
     AMOUNT SELECT
  ========================================================= */

  const handleAmount = (value) => {
    setAmount(value);
    setCustomAmount("");
    setMessage("");
  };

  /* =========================================================
     FILTER HISTORY
  ========================================================= */

  const filteredHistory = useMemo(() => {
    if (historyFilter === "All") {
      return historyData;
    }

    return historyData.filter(
      (item) => item.status === historyFilter
    );
  }, [historyFilter]);

  return (
    <div
      className="
        h-screen
        w-full
        overflow-hidden
        bg-[#020817]
        text-white
      "
    >
      {/* =====================================================
          540 WIDTH CONTAINER
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
            HEADER
        ====================================================== */}

        <header
          className="
            relative
            z-50
            flex
            h-[76px]
            min-h-[76px]
            shrink-0
            items-center
            justify-center
            border-b
            border-cyan-400/20
            bg-[#031426]
          "
        >
          {/* BACK */}

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
              border-cyan-300/30
              bg-[#073154]
              text-[22px]
              transition
              active:scale-90
            "
          >
            <FaArrowLeft />
          </button>

          {/* TITLE */}

          <h1
            className="
              text-[25px]
              font-bold
              tracking-wide
              text-white
              drop-shadow-[0_0_8px_rgba(0,220,255,.3)]
            "
          >
            Deposit
          </h1>

          {/* HISTORY */}

          <button
            onClick={() => setShowHistory(true)}
            className="
              absolute
              right-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-300/30
              bg-[#073154]
              text-[21px]
              text-cyan-200
              transition
              active:scale-90
            "
          >
            <FaHistory />
          </button>
        </header>

        {/* =====================================================
            MAIN SCROLL
        ====================================================== */}

        <main
          className="
            min-h-0
            flex-1
            overflow-x-hidden
            overflow-y-auto
            px-4
            pb-5
            pt-5
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* =================================================
              RECHARGE METHOD
          ================================================= */}

          <SectionTitle title="Recharge Method" />

          <div className="mt-4 grid grid-cols-2 gap-4">
            {methods.map((item) => {
              const active = method === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMethodChange(item.id)}
                  className={`
                    relative
                    h-[125px]
                    overflow-hidden
                    rounded-[22px]
                    border
                    transition-all
                    duration-300
                    active:scale-[.97]

                    ${
                      active
                        ? `
                          border-cyan-200/80
                          bg-gradient-to-b
                          from-[#0B8DCC]
                          via-[#075E99]
                          to-[#06365B]
                          shadow-[0_0_25px_rgba(0,200,255,.35)]
                        `
                        : `
                          border-cyan-300/20
                          bg-[#061C30]
                          hover:border-cyan-300/50
                          hover:bg-[#073254]
                        `
                    }
                  `}
                >
                  {active && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-[-60px]
                        h-[150px]
                        w-[150px]
                        -translate-x-1/2
                        rounded-full
                        bg-cyan-300/20
                        blur-[35px]
                      "
                    />
                  )}

                  <div
                    className={`
                      relative
                      mx-auto
                      flex
                      h-[58px]
                      w-[58px]
                      items-center
                      justify-center
                      rounded-2xl
                      text-[18px]
                      font-black

                      ${
                        active
                          ? "bg-white text-[#075B92]"
                          : "bg-[#0A3656] text-cyan-200"
                      }
                    `}
                  >
                    {item.icon}
                  </div>

                  <p className="relative mt-3 text-[17px] font-bold">
                    {item.name}
                  </p>

                  {active && (
                    <span
                      className="
                        absolute
                        right-3
                        top-3
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-cyan-300
                        text-[#032039]
                      "
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* =================================================
              CHANNEL
          ================================================= */}

          <div className="mt-7">
            <SectionTitle
              title={
                method === "jazzcash"
                  ? "JazzCash Channel"
                  : "EasyPaisa Channel"
              }
            />
          </div>

          <div
            className="
              mt-4
              flex
              gap-4
              overflow-x-auto
              pb-2
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {channels[method].map((item) => {
              const active = channel === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setChannel(item.id);
                    setMessage("");
                  }}
                  className={`
                    relative
                    h-[96px]
                    min-w-[220px]
                    shrink-0
                    rounded-[20px]
                    border
                    px-5
                    transition-all
                    duration-300
                    active:scale-[.98]

                    ${
                      active
                        ? `
                          border-cyan-200/80
                          bg-gradient-to-r
                          from-[#0B8DCC]
                          via-[#086DA8]
                          to-[#06446F]
                          shadow-[0_0_25px_rgba(0,200,255,.3)]
                        `
                        : `
                          border-cyan-300/20
                          bg-[#061C30]
                          hover:border-cyan-300/50
                        `
                    }
                  `}
                >
                  <div className="flex h-full items-center justify-between">
                    <div className="text-left">
                      <p className="text-[17px] font-bold">
                        {item.name}
                      </p>

                      <p className="mt-2 text-[15px] font-bold text-cyan-200">
                        {item.code}
                      </p>
                    </div>

                    {active && (
                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-cyan-300
                          text-[#032039]
                        "
                      >
                        ✓
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* =================================================
              AMOUNT
          ================================================= */}

          <div className="mt-7">
            <SectionTitle title="Recharge Amount" />
          </div>

          {/* AMOUNT GRID */}

          <div className="mt-4 grid grid-cols-3 gap-3">
            {amounts.map((value) => {
              const active = amount === value;

              return (
                <button
                  key={value}
                  onClick={() => handleAmount(value)}
                  className={`
                    h-[75px]
                    rounded-[20px]
                    border
                    text-[17px]
                    font-bold
                    transition-all
                    duration-300
                    active:scale-[.96]

                    ${
                      active
                        ? `
                          border-cyan-200
                          bg-gradient-to-b
                          from-[#0CA9ED]
                          via-[#087DC0]
                          to-[#064A78]
                          text-white
                          shadow-[0_0_25px_rgba(0,210,255,.45)]
                        `
                        : `
                          border-cyan-300/20
                          bg-[#061C30]
                          text-white
                          hover:border-cyan-300/60
                          hover:bg-[#073254]
                          hover:shadow-[0_0_18px_rgba(0,200,255,.2)]
                        `
                    }
                  `}
                >
                  Rs {value.toLocaleString()}
                </button>
              );
            })}
          </div>

          {/* =================================================
              CUSTOM AMOUNT
          ================================================= */}

          <div
            className="
              mt-5
              flex
              h-[65px]
              items-center
              rounded-[32px]
              border
              border-cyan-300/30
              bg-[#020B18]
              px-5
              transition
              focus-within:border-cyan-300/70
              focus-within:shadow-[0_0_20px_rgba(0,200,255,.15)]
            "
          >
            <span className="text-[22px] font-bold text-white">
              Rs
            </span>

            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount(null);
                setMessage("");
              }}
              placeholder="100 ~ 50000"
              className="
                ml-3
                min-w-0
                flex-1
                bg-transparent
                text-[18px]
                font-semibold
                text-white
                outline-none
                placeholder:text-white/35
              "
            />

            {customAmount && (
              <button
                onClick={() => setCustomAmount("")}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  text-white
                "
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* =================================================
              SELECTED INFO
          ================================================= */}

          <div
            className="
              mt-5
              rounded-[18px]
              border
              border-cyan-300/20
              bg-[#061C30]
              p-4
            "
          >
            <div className="flex items-center justify-between">
              <span className="text-white/60">
                Payment Method
              </span>

              <span className="font-bold text-cyan-200">
                {method === "jazzcash"
                  ? "JazzCash"
                  : "EasyPaisa"}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-white/60">
                Channel
              </span>

              <span className="font-bold text-cyan-200">
                {channel}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-cyan-300/10 pt-3">
              <span className="text-white/60">
                Amount
              </span>

              <span className="text-[20px] font-bold text-cyan-300">
                Rs{" "}
                {finalAmount
                  ? Number(finalAmount).toLocaleString()
                  : "0"}
              </span>
            </div>
          </div>

          {/* =================================================
              MESSAGE
          ================================================= */}

          {message && (
            <div
              className="
                mt-4
                rounded-xl
                border
                border-cyan-300/25
                bg-cyan-400/10
                px-4
                py-3
                text-center
                text-[14px]
                text-cyan-200
              "
            >
              {message}
            </div>
          )}

          {/* =================================================
              DEPOSIT BUTTON
          ================================================= */}

          <button
            onClick={handleDeposit}
            className="
              mt-6
              h-[65px]
              w-full
              rounded-[18px]
              border
              border-cyan-200/60
              bg-gradient-to-r
              from-[#0EA8F0]
              via-[#087DC0]
              to-[#064A78]
              text-[21px]
              font-bold
              text-white
              shadow-[0_0_22px_rgba(0,200,255,.25)]
              transition-all
              duration-300
              hover:scale-[1.01]
              hover:shadow-[0_0_30px_rgba(0,220,255,.4)]
              active:scale-[.97]
            "
          >
            Deposit
          </button>
        </main>
      </div>

      {/* =====================================================
          HISTORY MODAL
      ====================================================== */}

      {showHistory && (
        <HistoryModal
          filter={historyFilter}
          setFilter={setHistoryFilter}
          data={filteredHistory}
          selectedDate={selectedDate}
          onDate={() => setShowDateModal(true)}
          onClose={() => setShowHistory(false)}
        />
      )}

      {/* =====================================================
          DATE MODAL
      ====================================================== */}

      {showDateModal && (
        <DatePickerModal
          dates={dates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onClose={() => setShowDateModal(false)}
        />
      )}

      {/* =====================================================
          HIDE SCROLLBARS
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
   SECTION TITLE
========================================================= */

function SectionTitle({ title }) {
  return (
    <div>
      <h2
        className="
          text-[24px]
          font-bold
          text-white
        "
      >
        {title}
      </h2>

      <div
        className="
          mt-3
          h-px
          w-full
          bg-gradient-to-r
          from-cyan-300/50
          via-cyan-300/20
          to-transparent
        "
      />
    </div>
  );
}

/* =========================================================
   HISTORY MODAL
========================================================= */

function HistoryModal({
  filter,
  setFilter,
  data,
  selectedDate,
  onDate,
  onClose,
}) {
  const filters = [
    {
      name: "All",
      icon: <FaWallet />,
    },
    {
      name: "Paid",
      icon: <FaCheckCircle />,
    },
    {
      name: "Unpaid",
      icon: <FaClock />,
    },
    {
      name: "Cancel",
      icon: <FaBan />,
    },
    {
      name: "Complete",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div className="fixed inset-0 z-[1000] flex justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="
          relative
          flex
          h-full
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
        {/* HEADER */}

        <header
          className="
            flex
            h-[76px]
            min-h-[76px]
            items-center
            justify-center
            border-b
            border-cyan-300/20
            bg-[#031426]
          "
        >
          <button
            onClick={onClose}
            className="
              absolute
              left-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#073154]
              text-[20px]
            "
          >
            <FaArrowLeft />
          </button>

          <h2 className="text-[23px] font-bold">
            Deposit History
          </h2>
        </header>

        {/* CONTENT */}

        <div
          className="
            flex-1
            overflow-y-auto
            px-4
            pb-10
            pt-5
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* DATE */}

          <button
            onClick={onDate}
            className="
              flex
              min-h-[78px]
              w-full
              items-center
              gap-4
              rounded-[18px]
              border
              border-cyan-300/25
              bg-[#061C30]
              px-4
              text-left
              transition
              hover:border-cyan-300/60
            "
          >
            <span className="text-[27px] text-cyan-300">
              ↗
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[12px] text-cyan-200/60">
                Date
              </p>

              <p className="mt-1 truncate text-[15px] font-bold">
                {selectedDate}
              </p>
            </div>

            <FaChevronDown className="text-cyan-300" />
          </button>

          {/* FILTERS */}

          <div
            className="
              mt-5
              grid
              grid-cols-5
              gap-2
            "
          >
            {filters.map((item) => {
              const active = filter === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setFilter(item.name)}
                  className={`
                    flex
                    min-h-[72px]
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    rounded-[15px]
                    border
                    text-[11px]
                    font-bold
                    transition

                    ${
                      active
                        ? `
                          border-cyan-200
                          bg-gradient-to-b
                          from-[#0EA8F0]
                          to-[#064A78]
                          text-white
                          shadow-[0_0_18px_rgba(0,200,255,.25)]
                        `
                        : `
                          border-cyan-300/15
                          bg-[#061C30]
                          text-white/60
                        `
                    }
                  `}
                >
                  <span className="text-[16px]">
                    {item.icon}
                  </span>

                  {item.name}
                </button>
              );
            })}
          </div>

          {/* NO DATA */}

          {data.length === 0 ? (
            <div
              className="
                mt-8
                flex
                min-h-[360px]
                flex-col
                items-center
                justify-center
                rounded-[22px]
                border
                border-cyan-300/15
                bg-[#061C30]/70
                text-center
              "
            >
              <div
                className="
                  flex
                  h-[90px]
                  w-[90px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-300/20
                  bg-[#073154]
                  text-[40px]
                  text-cyan-300/50
                "
              >
                <FaHistory />
              </div>

              <h3 className="mt-5 text-[20px] font-bold">
                No Data
              </h3>

              <p className="mt-2 px-8 text-[14px] text-white/40">
                No deposit records available for this period.
              </p>
            </div>
          ) : (
            <div className="mt-5 space-y-3">
              {data.map((item, index) => (
                <HistoryCard
                  key={index}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HISTORY CARD
========================================================= */

function HistoryCard({ item }) {
  const statusClass =
    item.status === "Complete"
      ? "text-cyan-300 bg-cyan-400/10"
      : item.status === "Cancel"
      ? "text-red-300 bg-red-400/10"
      : item.status === "Paid"
      ? "text-green-300 bg-green-400/10"
      : "text-yellow-300 bg-yellow-400/10";

  return (
    <div
      className="
        rounded-[18px]
        border
        border-cyan-300/20
        bg-[#061C30]
        p-4
      "
    >
      <div className="flex items-center justify-between">
        <span className="font-bold">
          {item.method}
        </span>

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-[11px]
            font-bold
            ${statusClass}
          `}
        >
          {item.status}
        </span>
      </div>

      <div className="mt-4 flex justify-between">
        <span className="text-white/50">
          Amount
        </span>

        <span className="font-bold text-cyan-300">
          Rs {item.amount}
        </span>
      </div>

      <div className="mt-2 flex justify-between">
        <span className="text-white/50">
          Channel
        </span>

        <span>{item.channel}</span>
      </div>
    </div>
  );
}

/* =========================================================
   DATE PICKER MODAL
========================================================= */

function DatePickerModal({
  dates,
  selectedDate,
  setSelectedDate,
  onClose,
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[1100]
        flex
        items-end
        justify-center
        bg-black/65
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-[540px]
          overflow-hidden
          rounded-t-[28px]
          border
          border-cyan-300/20
          bg-gradient-to-b
          from-[#082B49]
          via-[#061C31]
          to-[#020B18]
          shadow-[0_-10px_40px_rgba(0,180,255,.15)]
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            h-[70px]
            items-center
            justify-center
            border-b
            border-cyan-300/15
          "
        >
          <h2 className="text-[21px] font-bold">
            Select Date
          </h2>
        </div>

        {/* DATE LIST */}

        <div
          className="
            max-h-[400px]
            overflow-y-auto
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {dates.map((date) => {
            const active = selectedDate === date;

            return (
              <button
                key={date}
                onClick={() => {
                  setSelectedDate(date);
                  onClose();
                }}
                className={`
                  flex
                  min-h-[68px]
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-cyan-300/10
                  px-5
                  text-left
                  transition

                  ${
                    active
                      ? "bg-cyan-400/10 text-cyan-200"
                      : "text-white"
                  }
                `}
              >
                <span
                  className={`
                    text-[15px]

                    ${
                      active
                        ? "font-bold"
                        : ""
                    }
                  `}
                >
                  {date}
                </span>

                {active && (
                  <FaCheckCircle className="text-cyan-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* CANCEL */}

        <div className="p-5">
          <button
            onClick={onClose}
            className="
              h-[54px]
              w-full
              rounded-[15px]
              bg-gradient-to-r
              from-[#0EA8F0]
              to-[#064A78]
              font-bold
              text-white
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}