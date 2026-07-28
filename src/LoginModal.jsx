const LoginModal = ({ loginOpen, setLoginOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setLoginOpen(false)}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-all duration-300 ${
          loginOpen
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

        rounded-[25px]

        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]

        border
        border-cyan-500

        shadow-[0_0_40px_rgba(0,200,255,.35)]

        z-50

        duration-300

        ${
          loginOpen
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
      >


        {/* Close */}
        <button
          onClick={() => setLoginOpen(false)}
          className="
          absolute
          right-3
          top-3

          w-9
          h-9

          rounded-full

          bg-black/40

          text-white

          text-lg

          hover:bg-cyan-600
          duration-300
          "
        >
          ✕
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

          <button
            className="
            text-white
            text-2xl
            font-serif

            border-b-4
            border-cyan-400

            pb-2
            "
          >
            Log In
          </button>


          <button
            className="
            text-cyan-400
            text-2xl
            font-serif
            "
          >
            Sign Up
          </button>

        </div>



        {/* Form */}
        <div
          className="
          p-5
          space-y-4
          "
        >


          {/* Phone */}
          <div
            className="
            flex
            items-center

            bg-[#020617]

            rounded-xl

            h-14

            px-3

            border
            border-cyan-700
            "
          >

            <span className="mr-2 text-xl">
              🇵🇰
            </span>


            <span
              className="
              text-white
              mr-2
              text-sm
              "
            >
              +92
            </span>


            <input
              type="text"
              placeholder="Phone Number"
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

            bg-[#020617]

            rounded-xl

            h-14

            px-3

            border
            border-cyan-700
            "
          >

            <span className="mr-3 text-lg">
              🔒
            </span>


            <input
              type="password"
              placeholder="Password"
              className="
              flex-1

              bg-transparent

              outline-none

              text-white

              text-sm

              placeholder:text-gray-400
              "
            />


            <span className="text-lg cursor-pointer">
              👁
            </span>


          </div>




          {/* Login Button */}
          <button
            className="
            w-full

            h-14

            rounded-xl

            bg-gradient-to-r

            from-cyan-400

            via-blue-500

            to-blue-700

            text-white

            font-bold

            text-lg

            shadow-[0_0_20px_rgba(0,200,255,.5)]

            hover:scale-105

            duration-300
            "
          >
            Log In
          </button>


        </div>


      </div>


    </>
  );
};


export default LoginModal;