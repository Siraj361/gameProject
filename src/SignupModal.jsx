import { X, Eye, Lock } from "lucide-react";


const SignupModal = ({
  signupOpen,
  setSignupOpen,
  setLoginOpen
}) => {

  return (
    <>


      {/* Overlay */}

      <div
        onClick={() => setSignupOpen(false)}

        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-all duration-300 ${
          signupOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />





      {/* Modal */}

      <div
        className={`fixed
        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[92%]
        max-w-[400px]

        max-h-[90vh]

        overflow-y-auto

        rounded-[25px]

        border
        border-cyan-500

        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]

        shadow-[0_0_40px_rgba(0,200,255,.35)]

        duration-300

        z-50

        ${
          signupOpen
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
      >




        {/* Header */}

        <div
          className="
          relative
          h-28

          bg-gradient-to-br
          from-[#0ea5e9]
          via-[#075985]
          to-[#020617]
          "
        >


          {/* Close */}

          <button

            onClick={() => setSignupOpen(false)}

            className="
            absolute
            top-3
            right-3

            w-9
            h-9

            rounded-full

            bg-black/40

            flex
            items-center
            justify-center

            text-white
            "
          >

            <X size={22}/>

          </button>





          {/* Tabs */}

          <div
            className="
            flex
            justify-center
            gap-10
            pt-8
            "
          >


            {/* LOGIN BUTTON */}

            <button

              onClick={() => {
                setSignupOpen(false);
                setLoginOpen(true);
              }}

              className="
              text-2xl
              font-serif

              text-cyan-300/50

              hover:text-white

              duration-300
              "
            >

              Log in

            </button>





            {/* SIGNUP BUTTON */}

            <button

              className="
              relative

              text-2xl
              font-serif

              text-white
              "
            >

              Sign Up


              <div
                className="
                absolute
                left-1/2
                -translate-x-1/2

                mt-2

                w-0
                h-0

                border-l-[12px]
                border-r-[12px]
                border-t-[12px]

                border-l-transparent
                border-r-transparent

                border-t-cyan-400
                "
              />


            </button>


          </div>


        </div>







        {/* Body */}

        <div
          className="
          bg-[#061326]/90

          rounded-t-[25px]

          px-4
          py-5

          space-y-4
          "
        >




          {/* Phone */}

          <div
            className="
            flex
            items-center

            h-14

            bg-[#020617]

            border
            border-cyan-700

            rounded-xl

            px-3
            "
          >

            <span className="text-lg">
              🇵🇰
            </span>


            <span className="mx-2 text-white text-lg">
              +92
            </span>


            <div className="w-px h-7 bg-gray-500 mr-3"/>



            <input
              type="text"
              placeholder="Phone number"

              className="
              flex-1
              bg-transparent
              outline-none

              text-white

              text-sm

              placeholder:text-gray-400
              "
            />


          </div>







          {/* Password */}

          <div
            className="
            flex
            items-center

            h-14

            bg-[#020617]

            border
            border-cyan-700

            rounded-xl

            px-3
            "
          >

            <Lock
              size={20}
              className="text-cyan-400 mr-3"
            />


            <input

              type="password"

              placeholder="Password"

              className="
              flex-1
              bg-transparent
              outline-none

              text-white

              text-sm
              "
            />


            <Eye
              size={20}
              className="text-cyan-400"
            />


          </div>







          {/* Confirm Password */}

          <div
            className="
            flex
            items-center

            h-14

            bg-[#020617]

            border
            border-cyan-700

            rounded-xl

            px-3
            "
          >

            <Lock
              size={20}
              className="text-cyan-400 mr-3"
            />


            <input

              type="password"

              placeholder="Confirm password"

              className="
              flex-1
              bg-transparent
              outline-none

              text-white

              text-sm
              "
            />


            <Eye
              size={20}
              className="text-cyan-400"
            />


          </div>







          {/* Register */}

          <button

            className="
            w-full

            h-14

            rounded-xl

            bg-gradient-to-r

            from-cyan-400

            via-blue-500

            to-blue-700

            border
            border-cyan-300

            text-white

            text-lg

            font-bold

            shadow-[0_0_20px_rgba(0,200,255,.5)]

            hover:scale-105

            duration-300
            "
          >

            Register

          </button>



        </div>


      </div>


    </>
  );
};


export default SignupModal;