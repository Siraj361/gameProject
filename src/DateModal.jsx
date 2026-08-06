import { FaCheck } from "react-icons/fa";
import statisticsData from "./statisticsData";

export default function DateModal({
  open,
  onClose,
  selectedDate,
  setSelectedDate,
}) {

  if (!open) return null;


  return (
    <>


      {/* Overlay */}

      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          z-[999]
          bg-black/50
          backdrop-blur-[2px]
          animate-[fadeIn_.25s_ease]
        "
      />



      {/* Center Wrapper */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-[1000]
          flex
          justify-center
        "
      >


        {/* Bottom Sheet */}

        <div
          className="
            w-full
            max-w-[540px]
            rounded-t-[30px]
            border
            border-cyan-400/20
            bg-[#061a30]
            overflow-hidden
            animate-[slideUp_.30s_ease-out]
          "
        >



          {/* Glow */}

          <div
            className="
              absolute
              -top-24
              left-1/2
              -translate-x-1/2
              w-[320px]
              h-[320px]
              rounded-full
              bg-cyan-500/10
              blur-[100px]
            "
          />



          {/* Header */}

          <div
            className="
              relative
              z-10
              py-5
              text-center
              border-b
              border-cyan-400/20
            "
          >

            <h2 className="text-white text-[22px] font-bold">
              Select Date
            </h2>

          </div>





          {/* Date List */}

          <div
            className="
              relative
              z-10
              max-h-[420px]
              overflow-y-auto
              hide-scrollbar
            "
          >

            {statisticsData.map((item)=>(

              <button
                key={item.id}
                onClick={()=>{
                  setSelectedDate(item.date);
                  onClose();
                }}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  border-b
                  border-cyan-500/10
                "
              >

                <span
                  className={`
                    text-[17px]
                    ${
                      selectedDate === item.date
                      ? "text-cyan-300 font-bold"
                      : "text-white"
                    }
                  `}
                >
                  {item.date}
                </span>



                {
                  selectedDate === item.date && (
                    <FaCheck
                      className="text-cyan-300"
                      size={18}
                    />
                  )
                }


              </button>

            ))}

          </div>





          {/* Cancel */}

          <div className="p-5">

            <button
              onClick={onClose}
              className="
                w-full
                h-[54px]
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-700
                text-white
                font-bold
              "
            >
              Cancel
            </button>

          </div>


        </div>


      </div>





      <style>{`

        @keyframes slideUp{

          from{
            transform:translateY(100%);
          }

          to{
            transform:translateY(0);
          }

        }


        @keyframes fadeIn{

          from{
            opacity:0;
          }

          to{
            opacity:1;
          }

        }

      `}</style>



    </>
  );
}