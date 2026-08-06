import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

import { FileX2 } from "lucide-react";

import DateModal from "./DateModal";

export default function DailyStatistics() {

  const navigate = useNavigate();

  const { state } = useLocation();

  const [selectedDate, setSelectedDate] = useState(
    state?.date || "07 Aug 2026"
  );

  const [openDate, setOpenDate] = useState(false);


  return (

    <div className="min-h-screen w-full flex justify-center bg-[#071321] overflow-hidden">

      {/* 540 Container */}

      <div
        className="relative w-full max-w-[540px] min-h-screen overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#04111f 0%,#083764 45%,#020617 100%)",
        }}
      >


        {/* Top Glow */}

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />


        {/* Scroll */}

        <div className="relative z-20 h-screen overflow-y-auto hide-scrollbar pb-10">


          {/* Header */}

          <div className="relative flex items-center justify-center pt-6 px-5">

            <button
              onClick={() => navigate(-1)}
              className="absolute left-5 text-cyan-300"
            >
              <FaArrowLeft size={24} />
            </button>


            <h1
              className="text-white text-[30px] font-extrabold"
              style={{
                textShadow:
                  "0 0 18px rgba(0,180,255,.55)",
              }}
            >
              Daily Statistics
            </h1>

          </div>



          {/* Date Selector */}

          <div className="px-5 mt-10">

            <button
              onClick={() => setOpenDate(true)}
              className="
                w-full
                h-[64px]
                rounded-[20px]
                border
                border-cyan-400/20
                bg-black/30
                backdrop-blur-xl
                flex
                items-center
                justify-between
                px-5
              "
            >

              <div className="flex items-center gap-3">

                <FaCalendarAlt
                  className="text-cyan-300"
                  size={20}
                />

                <span className="text-white text-[17px] font-semibold">
                  {selectedDate}
                </span>

              </div>


              <FaChevronDown
                className="text-cyan-300"
                size={18}
              />

            </button>

          </div>




          {/* Betting Record */}

          <div className="px-5 mt-8">


            <h2 className="text-white text-[22px] font-bold">
              Betting Record
            </h2>



            <div
              className="
                mt-5
                rounded-[24px]
                border
                border-cyan-400/20
                bg-black/30
                backdrop-blur-xl
                min-h-[420px]
                flex
                flex-col
                items-center
                justify-center
                px-6
              "
            >



              {/* No Data Icon */}

              <FileX2
                size={100}
                strokeWidth={1.4}
                className="text-cyan-300"
              />



              {/* No Data Text */}

              <h3
                className="
                  mt-5
                  text-[24px]
                  font-bold
                  text-white
                "
              >
                No Data
              </h3>



              <p
                className="
                  mt-3
                  max-w-[280px]
                  text-center
                  text-[15px]
                  leading-7
                  text-cyan-200
                "
              >
                There are currently no betting records
                available for the selected date.
              </p>



            </div>


          </div>





          {/* Date Modal */}

          <DateModal
            open={openDate}
            onClose={() => setOpenDate(false)}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />



          <div className="h-10" />


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
            h-[200px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
          "
        />


      </div>

    </div>

  );
}