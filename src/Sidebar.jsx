import React from "react";

const Sidebar = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 bg-black/70 transition-all duration-300 z-40 ${
          openMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}

      <div
        className={`fixed top-0 left-0 h-screen w-[320px] bg-[#081b36] z-50 transition-all duration-500 ${
          openMenu
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="p-6">

          <button
            onClick={() => setOpenMenu(false)}
            className="text-white text-3xl"
          >
            ←
          </button>

          <h1 className="text-4xl font-bold text-cyan-400 mt-8">
            33RS
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-10">

            <div className="bg-blue-800 rounded-xl p-5 text-center text-white">
              🌍
              <p className="mt-2 text-sm">Language</p>
            </div>

            <div className="bg-blue-800 rounded-xl p-5 text-center text-white">
              🎁
              <p className="mt-2 text-sm">Invitation</p>
            </div>

            <div className="bg-blue-800 rounded-xl p-5 text-center text-white">
              🎉
              <p className="mt-2 text-sm">Bonus</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;