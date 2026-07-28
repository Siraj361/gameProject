import { useEffect, useState } from "react";
import { FaBell, FaChevronRight, FaTimes } from "react-icons/fa";

export default function Announcement() {
  const announcements = [
    "🎁 Invite Friends & Earn Rs 800 Bonus!",
    "💰 Rewards upgraded! Invite a valid friend & earn Rs 2000.",
    "🎡 Lucky Spin - Win rewards up to Rs 1500.",
    "✅ Daily Check-in and claim your reward.",
  ];

  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#061C42] flex justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#061C42] relative overflow-hidden">

        {/* Announcement Bar */}
        <div className="p-3">
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-gradient-to-r from-blue-700 to-sky-500 border border-cyan-400 rounded-xl p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center">
                <FaBell className="text-white text-lg" />
              </div>

              <p className="text-white font-semibold truncate">
                {announcements[current]}
              </p>
            </div>

            <FaChevronRight className="text-white" />
          </div>
        </div>

        {/* Popup */}
        <div
          className={`absolute inset-0 z-50 transition-all duration-300 ${
            open ? "visible" : "invisible"
          }`}
        >
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Mobile Page */}
          <div
            className={`absolute bottom-0 left-0 w-full h-full bg-[#082B61]
            transition-all duration-300 flex flex-col
            ${
              open
                ? "translate-y-0"
                : "translate-y-full"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-cyan-500">
              <h2 className="text-white text-2xl font-bold">
                Notifications
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
              >
                <FaTimes className="text-black" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto hide-scrollbar p-4">
              {announcements.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#12356D] border border-cyan-400 rounded-2xl p-4 mb-4 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0">
                    <FaBell className="text-white text-xl" />
                  </div>

                  <p className="text-white text-sm leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}