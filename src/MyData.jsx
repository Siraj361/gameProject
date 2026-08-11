import React from "react";

export default function MyData() {
  return (
    <div className="w-full px-3 pb-6 pt-4">

      {/* ================= TOP STATS ================= */}

      <div className="grid grid-cols-2 gap-4">

        {/* Team Size */}
        <div
          className="
            min-h-[145px]
            rounded-[22px]
            border
            border-cyan-200/60
            bg-gradient-to-b
            from-[#0A2942]
            via-[#061D32]
            to-[#03111F]
            p-5
            shadow-[0_0_18px_rgba(0,190,255,.10)]
          "
        >
          <div className="flex items-start gap-3">
            <span className="text-[27px] text-cyan-100">
              ♧
            </span>

            <h3 className="text-[22px] font-bold leading-[1.05]">
              Team Size
            </h3>
          </div>

          <div className="mt-6 text-center">
            <span className="text-[29px] font-bold text-cyan-300">
              0
            </span>
          </div>
        </div>

        {/* Accumulated Commission */}
        <div
          className="
            min-h-[145px]
            rounded-[22px]
            border
            border-cyan-200/60
            bg-gradient-to-b
            from-[#0A2942]
            via-[#061D32]
            to-[#03111F]
            p-5
            shadow-[0_0_18px_rgba(0,190,255,.10)]
          "
        >
          <div className="flex items-start gap-3">
            <span className="text-[26px] text-cyan-100">
              ◎
            </span>

            <h3 className="text-[20px] font-bold leading-[1.05]">
              Accumulated
              <br />
              Commission
            </h3>
          </div>

          <div className="mt-3 text-center">
            <span className="text-[29px] font-bold text-cyan-300">
              0.00
            </span>
          </div>
        </div>

      </div>

      {/* ================= DATE ================= */}

      <button
        className="
          mt-5
          flex
          min-h-[88px]
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
          px-5
          text-left
        "
      >
        <span className="text-[38px] text-cyan-200">
          ↗
        </span>

        <span className="text-[20px] font-bold text-white">
          11 Aug 2026 00:00 - 12 Aug 2026 00:00
        </span>
      </button>

      {/* ================= TODAY COMMISSION ================= */}

      <div
        className="
          mt-5
          flex
          min-h-[86px]
          w-full
          items-center
          justify-between
          rounded-[20px]
          border
          border-cyan-300/20
          bg-gradient-to-r
          from-[#087DC0]
          via-[#075A91]
          to-[#06385C]
          px-7
        "
      >
        <span className="text-[23px] font-bold text-white">
          Today's Commission
        </span>

        <span className="text-[23px] font-bold text-cyan-200">
          0.00
        </span>
      </div>

      {/* ================= L1 DATA ================= */}

      <div
        className="
          mt-5
          overflow-hidden
          rounded-[22px]
          border
          border-cyan-300/45
          bg-gradient-to-b
          from-[#082B49]
          via-[#061B2E]
          to-[#03111D]
        "
      >

        <div
          className="
            border-b
            border-cyan-300/15
            bg-[#0A3554]
            px-5
            py-5
          "
        >
          <h2 className="text-[24px] font-bold text-white">
            L1 Data
          </h2>
        </div>

        <DataRow
          title="Number of Players"
          value="0"
        />

        <DataRow
          title="Effective Betting"
          value="0.00"
        />

        <DataRow
          title="Rebate Ratio"
          value="0%"
        />

        <DataRow
          title="Reward"
          value="0.00"
          last
        />

      </div>

      {/* Footer ke liye space */}
      <div className="h-[100px]" />

    </div>
  );
}


/* ================= DATA ROW ================= */

function DataRow({ title, value, last }) {
  return (
    <div
      className={`
        flex
        min-h-[87px]
        items-center
        justify-between
        px-5
        ${
          !last
            ? "border-b border-cyan-200/15"
            : ""
        }
      `}
    >
      <span className="text-[21px] text-white/90">
        {title}
      </span>

      <span className="text-[21px] font-semibold text-white">
        {value}
      </span>
    </div>
  );
}