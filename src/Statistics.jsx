import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import statisticsData from "./statisticsData";

export default function Statistics() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex justify-center bg-[#071321] overflow-hidden">

      {/* 540px Container */}
      <div
        className="relative w-full max-w-[540px] min-h-screen overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#04111f 0%,#083764 45%,#020617 100%)",
        }}
      >

        {/* Top Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[430px] h-[220px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Scroll Area */}
        <div className="relative z-20 h-screen overflow-y-auto hide-scrollbar pb-10">

          {/* Header */}
          <div className="flex items-center justify-center px-5 pt-6 relative">

            <button
              onClick={() => navigate(-1)}
              className="absolute left-5 text-cyan-300"
            >
              <FaArrowLeft size={24} />
            </button>

            <h1
              className="text-white text-[30px] font-extrabold"
              style={{
                textShadow: "0 0 18px rgba(0,180,255,.5)",
              }}
            >
              Betting Statistics
            </h1>

          </div>

          {/* Table Header */}
          <div className="mt-10 px-5">

            <div
              className="
                h-[76px]
                rounded-[22px]
                border
                border-cyan-400/25
                bg-black/30
                backdrop-blur-xl
                flex
                items-center
                px-4
              "
            >

            <div className="flex items-center w-full">
  <div className="w-[40%] text-center text-white font-bold text-[20px] mr-5">
    Date
  </div>

 <div className="w-[30%] text-center text-white font-bold text-[18px] whitespace-nowrap mr-5">
  Betting Amount
</div>

  <div className="w-[30%] text-center text-white font-bold text-[18px] ml-3">
    Profit & Loss
  </div>
</div>

              <div className="w-[5%]" />

            </div>

          </div>

          {/* Statistics List Starts Here */}
          <div className="mt-5 px-5">            {statisticsData.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  navigate("/daily-statistics", {
                    state: item,
                  })
                }
                className="
                  mt-4
                  w-full
                  h-[86px]
                  rounded-[22px]
                  border
                  border-cyan-400/20
                  bg-black/30
                  backdrop-blur-xl
                  flex
                  items-center
                  px-4
                  hover:border-cyan-400/40
                  transition
                "
              >

                {/* Date */}
                <div className="w-[40%] text-center">

                  <p className="text-white text-[17px] font-semibold">
                    {item.date}
                  </p>

                </div>

                {/* Betting Amount */}
                <div className="w-[30%] text-center">

                  <p className="text-cyan-200 text-[18px] font-bold">
                    {item.bettingAmount.toFixed(2)}
                  </p>

                </div>

                {/* Profit & Loss */}
                <div className="w-[25%] text-center">

                  <p className="text-cyan-200 text-[18px] font-bold">
                    {item.profitLoss.toFixed(2)}
                  </p>

                </div>

                {/* Arrow */}
                <div className="w-[5%] flex justify-end">

                  <FaChevronRight
                    size={22}
                    className="text-cyan-300"
                  />

                </div>

              </button>
            ))}
                      </div>

        </div>

        {/* Bottom Glow */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[-80px]
            left-1/2
            -translate-x-1/2
            w-[420px]
            h-[180px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

      </div>
    </div>
  );
}