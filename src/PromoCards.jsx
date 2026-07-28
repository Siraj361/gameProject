import { FaCrown, FaGift, FaCoins } from "react-icons/fa";
import { GiCardRandom } from "react-icons/gi";


export default function PromoCards() {

  return (

    <section
      className="
      w-[94%]
      mx-auto
      mt-5
      "
    >

      <div
        className="
        grid
        grid-cols-2
        gap-3
        " 
      >


        {/* LEFT SIDE */}

        <div
          className="
          flex
          flex-col
          gap-3
          "
        >



          {/* VIP CARD */}

          <div
            className="
            rounded-2xl

            bg-gradient-to-r
            from-[#021B79]
            via-[#0575E6]
            to-[#00C6FF]

            p-3

            shadow-[0_0_20px_rgba(0,200,255,.5)]

            "
          >

            <div
              className="
              flex
              flex-col
              items-center
              text-center
              "
            >


              <div
                className="
                w-14
                h-14

                rounded-full

                border-4
                border-cyan-300

                flex
                items-center
                justify-center

                animate-spin
                "
              >

                <FaCrown
                  className="
                  text-white
                  text-2xl
                  "
                />

              </div>



              <p
                className="
                text-cyan-100
                text-[10px]
                uppercase
                mt-2
                "
              >
                Premium Member
              </p>



              <h2
                className="
                text-white
                text-sm
                font-bold
                "
              >
                VIP SALARY
              </h2>



              <p
                className="
                text-cyan-100
                text-[10px]
                "
              >
                Monthly Reward
              </p>



              <h1
                className="
                text-white
                text-xl
                font-black
                "
              >
                5M
              </h1>


            </div>


          </div>








          {/* LUCKY CARD */}


          <div
            className="
            rounded-2xl

            bg-gradient-to-r

            from-[#001B4D]

            via-[#0047AB]

            to-[#00BFFF]


            p-3


            shadow-[0_0_20px_rgba(0,200,255,.5)]

            "
          >


            <div
              className="
              flex
              flex-col
              items-center
              text-center
              "
            >



              <div
                className="
                w-14
                h-14

                rounded-full

                border-4

                border-cyan-300

                flex

                items-center

                justify-center

                animate-spin
                "
              >


                <GiCardRandom
                  className="
                  text-white
                  text-2xl
                  "
                />


              </div>





              <p
                className="
                text-cyan-100
                text-[10px]
                uppercase
                mt-2
                "
              >
                Spin & Win
              </p>




              <h2
                className="
                text-white
                text-sm
                font-bold
                "
              >
                ROULETTE
              </h2>




              <p
                className="
                text-cyan-100
                text-[10px]
                "
              >
                Lucky Draw
              </p>




              <h1
                className="
                text-white
                text-2xl
                font-black
                "
              >
                1500
              </h1>


            </div>


          </div>


        </div>









        {/* RIGHT SIDE INVITE FRIEND */}


        <div
          className="
          rounded-2xl

          bg-gradient-to-b

          from-[#001B4D]

          via-[#005bea]

          to-[#00C6FF]


          p-3


          shadow-[0_0_20px_rgba(0,200,255,.5)]


          flex

          items-center

          "
        >


          <div>


            <p
              className="
              text-cyan-200

              text-[10px]

              uppercase

              tracking-wider
              "
            >
              Refer & Earn
            </p>




            <h2
              className="
              text-white

              text-lg

              font-extrabold

              mt-2
              "
            >
              INVITE
              <br/>
              FRIEND
            </h2>




            <h1
              className="
              text-cyan-100

              text-2xl

              font-black
              "
            >
              REWARD
            </h1>




            <p
              className="
              text-white/80

              text-[10px]

              mt-2
              "
            >
              Get instant bonus after referral.
            </p>





            <div
              className="
              mt-3
              "
            >

              <span
                className="
                bg-white

                text-blue-700

                px-2

                py-1

                rounded-lg

                text-sm

                font-black
                "
              >
                RS 2000
              </span>


            </div>





            <button
              className="
              mt-4

              bg-white

              text-blue-700

              px-3

              py-2

              rounded-xl

              text-xs

              font-bold
              "
            >

              Invite

            </button>



          </div>






          {/* ICONS */}

          <div
            className="
            ml-auto

            flex

            flex-col

            items-center
            "
          >


            <FaGift
              className="
              text-white

              text-4xl

              animate-bounce
              "
            />


            <FaCoins
              className="
              text-yellow-300

              text-2xl

              animate-pulse
              "
            />



          </div>



        </div>



      </div>


    </section>

  );
}