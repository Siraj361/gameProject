import { X, Eye, Lock } from "lucide-react";

const SignupModal = ({ signupOpen, setSignupOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setSignupOpen(false)}
        className={`fixed inset-0  bg-black/70 backdrop-blur-sm z-40 transition-all duration-300 ${
          signupOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[80%]
        sm:w-[90%]
        md:w-[700px]
        lg:w-[760px]
        max-h-[90vh]
        overflow-y-auto
        rounded-[30px]
        border border-yellow-600
        bg-gradient-to-b
        from-[#6a3b10]
        via-[#2b1810]
        to-[#4b2408]
        shadow-[0_0_40px_rgba(255,170,0,.35)]
        duration-300
        z-50
        ${
          signupOpen
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="relative h-32 md:h-40 bg-gradient-to-br from-[#b36419] via-[#4c250d] to-[#22110b]">

          {/* Close */}
          <button
            onClick={() => setSignupOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60"
          >
            <X size={26} />
          </button>

          {/* Tabs */}
          <div className="flex justify-center gap-10 md:gap-28 pt-10 md:pt-12">

            <button className="text-3xl md:text-5xl font-serif text-yellow-100/50">
              Log in
            </button>

            <button className="relative text-3xl md:text-5xl font-serif text-white">

              Sign Up

              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-[#3f2a21]" />

            </button>

          </div>

        </div>

        {/* Body */}

        <div className="bg-[#4b2d20]/90 rounded-t-[30px] px-5 md:px-10 py-6 md:py-8 space-y-5">

          {/* Phone */}

          <div className="flex items-center h-14 md:h-16 bg-[#170f0b] border border-yellow-700 rounded-xl px-4 md:px-6">

            <span className="text-xl md:text-3xl">
              🇵🇰
            </span>

            <span className="mx-3 text-white text-xl md:text-3xl">
              +92
            </span>

            <div className="w-px h-8 bg-gray-500 mr-4"></div>

            <input
              type="text"
              placeholder="Please enter your phone"
              className="flex-1 bg-transparent outline-none text-white text-base md:text-xl placeholder:text-gray-500"
            />

          </div>

          {/* Password */}

          <div className="flex items-center h-14 md:h-16 bg-[#170f0b] border border-yellow-700 rounded-xl px-4 md:px-6">

            <Lock className="text-gray-400 mr-4" size={24} />

            <input
              type="password"
              placeholder="Please enter your password"
              className="flex-1 bg-transparent outline-none text-white text-base md:text-xl placeholder:text-gray-500"
            />

            <Eye className="text-gray-400 cursor-pointer" size={24} />

          </div>

          {/* Confirm Password */}

          <div className="flex items-center h-14 md:h-16 bg-[#170f0b] border border-yellow-700 rounded-xl px-4 md:px-6">

            <Lock className="text-gray-400 mr-4" size={24} />

            <input
              type="password"
              placeholder="Re-enter your password"
              className="flex-1 bg-transparent outline-none text-white text-base md:text-xl placeholder:text-gray-500"
            />

            <Eye className="text-gray-400 cursor-pointer" size={24} />

          </div>

          {/* Register */}

          <button
            className="
            w-full
            h-14
            md:h-16
            rounded-xl
            bg-gradient-to-r
            from-[#d27a1c]
            via-[#b76418]
            to-[#d98a29]
            border
            border-yellow-500
            text-white
            text-xl
            md:text-3xl
            font-bold
            shadow-lg
            hover:brightness-110
            transition-all
            duration-300"
          >
            Register
          </button>

        </div>
      </div>
    </>
  );
};

export default SignupModal;