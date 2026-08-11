import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaWallet,
  FaMoneyBillWave,
  FaArrowDown,
  FaArrowUp,
  FaHistory,
} from "react-icons/fa";

export default function Balance() {
  const navigate = useNavigate();

  // ================= BALANCE =================

  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance")) || 0
  );

  // ================= HISTORY =================

  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("balanceHistory")) || [];
    } catch {
      return [];
    }
  });

  // Latest balance load
  useEffect(() => {
    const updateBalance = () => {
      setBalance(
        Number(localStorage.getItem("balance")) || 0
      );

      try {
        setHistory(
          JSON.parse(
            localStorage.getItem("balanceHistory")
          ) || []
        );
      } catch {
        setHistory([]);
      }
    };

    updateBalance();

    window.addEventListener("storage", updateBalance);

    return () => {
      window.removeEventListener(
        "storage",
        updateBalance
      );
    };
  }, []);

  // ================= TOTALS =================

  const totalDeposit = history
    .filter((item) => item.type === "deposit")
    .reduce(
      (total, item) => total + Number(item.amount || 0),
      0
    );

  const totalWithdraw = history
    .filter((item) => item.type === "withdraw")
    .reduce(
      (total, item) => total + Number(item.amount || 0),
      0
    );

  // ================= FORMAT =================

  const formatAmount = (amount) => {
    return Number(amount || 0).toFixed(2);
  };

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#020B18]
        text-white
      "
    >
      {/* =====================================================
          540px CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          min-h-screen
          w-full
          max-w-[540px]
          overflow-x-hidden
          bg-gradient-to-b
          from-[#020B18]
          via-[#06294A]
          to-[#020817]
          pb-10
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header
          className="
            sticky
            top-0
            z-50
            flex
            h-[76px]
            w-full
            items-center
            justify-center
            border-b
            border-cyan-400/25
            bg-[#031426]/95
            backdrop-blur-md
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
              border-cyan-300/40
              bg-[#073154]
              text-[28px]
              text-white
              transition
              active:scale-90
            "
          >
            <FaArrowLeft />
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
            My Balance
          </h1>
        </header>

        {/* =====================================================
            CURRENT BALANCE
        ====================================================== */}

        <main className="px-4 pb-10 pt-5">

          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-cyan-300/40
              bg-gradient-to-br
              from-[#0A4772]
              via-[#06345A]
              to-[#03192D]
              p-6
              shadow-[0_0_25px_rgba(0,190,255,.12)]
            "
          >
            {/* Decorative glow */}

            <div
              className="
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-20
                -left-16
                h-40
                w-40
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            {/* WALLET ICON */}

            <div className="relative flex items-center gap-3">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-300/40
                  bg-[#06294A]
                  text-cyan-300
                "
              >
                <FaWallet className="text-[27px]" />
              </div>

              <div>
                <p className="text-[13px] text-cyan-100/60">
                  Available Balance
                </p>

                <p className="text-[15px] font-semibold text-white">
                  Your Wallet
                </p>
              </div>

            </div>

            {/* AMOUNT */}

            <div className="relative mt-6">

              <p className="text-[14px] text-cyan-100/60">
                Current Balance
              </p>

              <h2
                className="
                  mt-1
                  text-[38px]
                  font-extrabold
                  tracking-wide
                  text-white
                "
              >
                Rs {formatAmount(balance)}
              </h2>

            </div>

          </div>

          {/* =====================================================
              DEPOSIT / WITHDRAW
          ====================================================== */}

          <div className="mt-5 grid grid-cols-2 gap-3">

            {/* DEPOSIT */}

            <button
              onClick={() => navigate("/deposit")}
              className="
                flex
                h-[58px]
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-cyan-200/40
                bg-gradient-to-r
                from-cyan-400
                to-blue-600
                font-bold
                text-white
                shadow-[0_5px_15px_rgba(0,180,255,.18)]
                transition
                active:scale-[.97]
              "
            >
              <FaWallet />
              Deposit
            </button>

            {/* WITHDRAW */}

            <button
              onClick={() => navigate("/withdraw")}
              className="
                flex
                h-[58px]
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-blue-400/30
                bg-gradient-to-r
                from-[#07548B]
                to-[#172B69]
                font-bold
                text-white
                transition
                active:scale-[.97]
              "
            >
              <FaMoneyBillWave />
              Withdraw
            </button>

          </div>

          {/* =====================================================
              SUMMARY
          ====================================================== */}

          <div className="mt-6">

            <h2 className="mb-3 text-[20px] font-bold">
              Balance Summary
            </h2>

            <div className="grid grid-cols-2 gap-3">

              {/* TOTAL DEPOSIT */}

              <SummaryBox
                icon={<FaArrowDown />}
                title="Total Deposit"
                amount={totalDeposit}
                type="deposit"
              />

              {/* TOTAL WITHDRAW */}

              <SummaryBox
                icon={<FaArrowUp />}
                title="Total Withdraw"
                amount={totalWithdraw}
                type="withdraw"
              />

            </div>

          </div>

          {/* =====================================================
              TRANSACTION HISTORY
          ====================================================== */}

          <div className="mt-7">

            <div className="mb-3 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <FaHistory className="text-cyan-300" />

                <h2 className="text-[20px] font-bold">
                  Transaction History
                </h2>

              </div>

              {history.length > 0 && (
                <span className="text-[12px] text-cyan-300/60">
                  {history.length} Transactions
                </span>
              )}

            </div>

            {/* NO DATA */}

            {history.length === 0 ? (
              <div
                className="
                  flex
                  min-h-[220px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[22px]
                  border
                  border-cyan-300/20
                  bg-[#061B30]
                  px-5
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0A3454]
                    text-cyan-300
                  "
                >
                  <FaHistory className="text-[27px]" />
                </div>

                <h3 className="mt-4 text-[17px] font-bold">
                  No Transactions
                </h3>

                <p className="mt-2 text-[13px] leading-5 text-white/50">
                  Your deposit and withdrawal history
                  will appear here.
                </p>
              </div>
            ) : (

              /* HISTORY LIST */

              <div className="space-y-3">

                {history.map((item, index) => (

                  <Transaction
                    key={item.id || index}
                    item={item}
                  />

                ))}

              </div>

            )}

          </div>

        </main>

      </div>

      {/* =====================================================
          HIDE SCROLLBAR
      ====================================================== */}

      <style>{`
        ::-webkit-scrollbar {
          width: 0px;
          height: 0px;
          display: none;
        }

        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

    </div>
  );
}


/* =========================================================
   SUMMARY BOX
========================================================= */

function SummaryBox({
  icon,
  title,
  amount,
  type,
}) {
  const isDeposit = type === "deposit";

  return (
    <div
      className="
        rounded-[20px]
        border
        border-cyan-300/20
        bg-[#061D33]
        p-4
      "
    >

      <div
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          ${
            isDeposit
              ? "bg-cyan-500/15 text-cyan-300"
              : "bg-blue-500/15 text-blue-300"
          }
        `}
      >
        {icon}
      </div>

      <p className="mt-3 text-[13px] text-white/55">
        {title}
      </p>

      <p className="mt-1 text-[18px] font-bold text-white">
        Rs {Number(amount || 0).toFixed(2)}
      </p>

    </div>
  );
}


/* =========================================================
   TRANSACTION
========================================================= */

function Transaction({ item }) {

  const isDeposit = item.type === "deposit";

  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-[18px]
        border
        border-cyan-300/20
        bg-[#061D33]
        px-4
        py-4
      "
    >

      {/* ICON */}

      <div
        className={`
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          ${
            isDeposit
              ? "bg-cyan-500/15 text-cyan-300"
              : "bg-blue-500/15 text-blue-300"
          }
        `}
      >
        {isDeposit ? (
          <FaArrowDown />
        ) : (
          <FaArrowUp />
        )}
      </div>

      {/* INFO */}

      <div className="min-w-0 flex-1">

        <p className="truncate text-[15px] font-bold">
          {isDeposit
            ? "Deposit"
            : "Withdraw"}
        </p>

        <p className="mt-1 text-[11px] text-white/45">
          {item.method || "Wallet"}
        </p>

        {item.date && (
          <p className="mt-1 text-[10px] text-cyan-200/40">
            {item.date}
          </p>
        )}

      </div>

      {/* AMOUNT */}

      <div className="text-right">

        <p
          className={`
            text-[16px]
            font-bold
            ${
              isDeposit
                ? "text-cyan-300"
                : "text-blue-300"
            }
          `}
        >
          {isDeposit ? "+" : "-"} Rs{" "}
          {Number(item.amount || 0).toFixed(2)}
        </p>

        <span
          className={`
            mt-1
            inline-block
            rounded-full
            px-2
            py-1
            text-[9px]
            font-bold
            ${
              item.status === "completed"
                ? "bg-green-500/15 text-green-300"
                : item.status === "pending"
                ? "bg-yellow-500/15 text-yellow-300"
                : "bg-red-500/15 text-red-300"
            }
          `}
        >
          {item.status || "completed"}
        </span>

      </div>

    </div>
  );
}