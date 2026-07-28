const LoginModal = ({ loginOpen, setLoginOpen }) => {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setLoginOpen(false)}
        className={`fixed inset-0 bg-black/70 z-40 transition-all duration-300 ${
          loginOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* Modal */}

      <div
        className={`fixed left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[95%] max-w-xl
        rounded-3xl
        bg-gradient-to-b
        from-[#6a3b10]
        via-[#2b1709]
        to-[#4b2208]
        border border-yellow-600
        shadow-2xl
        z-50
        duration-300
        ${
          loginOpen
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0 pointer-events-none"
        }`}
      >

        {/* Close */}

        <button
          onClick={() => setLoginOpen(false)}
          className="absolute right-5 top-5 w-10 h-10 rounded-full bg-black/30 text-white text-xl"
        >
          ✕
        </button>

        <div className="flex justify-center gap-16 pt-8">

          <button className="text-white text-3xl border-b-4 border-orange-500 pb-2">
            Log In
          </button>

          <button className="text-yellow-500 text-3xl">
            Sign Up
          </button>

        </div>

        <div className="p-8 space-y-6">

          <div className="flex items-center bg-[#1d120b] rounded-xl h-16 px-4">

            <span className="mr-3 text-2xl">
              🇵🇰
            </span>

            <span className="text-white mr-3">
              +92
            </span>

            <input
              type="text"
              placeholder="Phone Number"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            />

          </div>

          <div className="flex items-center bg-[#1d120b] rounded-xl h-16 px-4">

            <span className="mr-3 text-xl">
              🔒
            </span>

            <input
              type="password"
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            />

            <span>
              👁
            </span>

          </div>

          <button
            className="w-full h-14 rounded-xl bg-gradient-to-r from-orange-400 to-amber-700 text-white font-bold text-xl"
          >
            Log In
          </button>

        </div>

      </div>

    </>
  );
};

export default LoginModal;