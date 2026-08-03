import { useEffect, useState } from "react";
import {
  FaBell,
  FaTimes,
} from "react-icons/fa";


export default function Announcement() {


  const announcements = [
    "🎁 Invite Friends & Earn Rs 800 Bonus!",
    "💰 Rewards upgraded! Invite a valid friend & earn Rs 2000.",
    "🎡 Lucky Spin - Win rewards up to Rs 1500.",
    "✅ Daily Check-in and claim your reward."
  ];


  const [open, setOpen] = useState(false);

  const [current, setCurrent] = useState(0);



  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent(
        prev => (prev + 1) % announcements.length
      );

    }, 2500);


    return () => clearInterval(timer);

  }, []);



  return (

    <div
      className="
      absolute
      right-4
      bottom-[95px]
      z-[100]
      "
    >



      {/* Notification Bell */}

      <button
        onClick={() => setOpen(!open)}
        className="
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-blue-600
        to-cyan-400
        border
        border-cyan-300
        shadow-lg
        "
      >

        <FaBell
          className="
          text-xl
          text-white
          "
        />


        {/* Red Count */}

        <span
          className="
          absolute
          -right-1
          -top-1
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-red-500
          text-[11px]
          font-bold
          text-white
          "
        >
          1
        </span>


      </button>




      {/* Notification Card */}

      {
        open && (

          <div
            className="
            absolute
            bottom-14
            right-0
            w-[280px]
            rounded-2xl
            border
            border-cyan-400
            bg-[#082B61]
            shadow-2xl
            overflow-hidden
            "
          >



            {/* Header */}

            <div
              className="
              flex
              items-center
              justify-between
              border-b
              border-cyan-400
              px-4
              py-3
              "
            >

              <h3
                className="
                font-bold
                text-white
                "
              >
                Notification
              </h3>


              <button
                onClick={() => setOpen(false)}
              >

                <FaTimes
                  className="
                  text-white
                  "
                />

              </button>


            </div>





            {/* Message */}

            <div
              className="
              p-3
              "
            >


              <div
                className="
                flex
                gap-3
                rounded-xl
                bg-[#12356D]
                p-3
                "
              >


                <div
                  className="
                  flex
                  h-10
                  w-10
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-400
                  "
                >

                  <FaBell
                    className="
                    text-white
                    "
                  />

                </div>




                <p
                  className="
                  text-sm
                  leading-5
                  text-white
                  "
                >
                  {announcements[current]}
                </p>



              </div>


            </div>


          </div>

        )
      }



    </div>

  );
}