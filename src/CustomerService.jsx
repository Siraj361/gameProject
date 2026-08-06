import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaHeadset,
  FaTelegramPlane,
  FaComments,
} from "react-icons/fa";

export default function CustomerService() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "24 Hour Livechat",
      subtitle: "Online Customer Service",
      icon: <FaHeadset size={34} />,
      color: "from-cyan-400 to-blue-600",
      button: "CHAT",
      action: () => window.open("https://t.me/", "_blank"),
    },
    {
      id: 2,
      title: "Telegram Livechat",
      subtitle: "Online Customer Service",
      icon: <FaTelegramPlane size={34} />,
      color: "from-blue-500 to-indigo-600",
      button: "CHAT",
      action: () => window.open("https://t.me/", "_blank"),
    },
  ];

  return (
    <div className="min-h-screen w-full flex justify-center bg-[#071321] overflow-hidden">

      {/* 540px Mobile Container */}
      <div
        className="relative w-full max-w-[540px] min-h-screen overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#04111f 0%,#082544 45%,#04111f 100%)",
        }}
      >

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute bottom-0 left-0 w-[260px] h-[260px] rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="absolute top-48 right-0 w-[220px] h-[220px] rounded-full bg-sky-400/10 blur-[120px]" />

        </div>

        {/* Scroll Area */}
        <div
          className="
            absolute
            inset-0
            overflow-y-auto
            overflow-x-hidden
            hide-scrollbar
            z-10
            pb-8
          "
        >

          {/* Header */}
          <div className="flex items-center justify-center px-5 pt-6">

            <button
              onClick={() => navigate(-1)}
              className="
                absolute
                left-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/40
                bg-[#0d2b4e]
                text-cyan-300
              "
            >
              <FaArrowLeft size={18} />
            </button>

            <h1
              className="text-[30px] font-extrabold text-white"
              style={{
                textShadow:
                  "0 0 16px rgba(0,180,255,.6)",
              }}
            >
              Customer Service
            </h1>

          </div>

          {/* Cards */}
          <div className="mt-10 px-4">

            <div className="grid grid-cols-2 gap-3">

              {services.map((item) => (
                <div
                  key={item.id}
                  className="
                    relative
                    h-[255px]
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-cyan-400/20
                    bg-white/5
                    backdrop-blur-xl
                    shadow-[0_0_18px_rgba(0,170,255,.15)]
                  "
                >

                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-transparent to-blue-500/10" />

                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-cyan-400/20 blur-[70px]" />

                  <div className="relative z-10 flex h-full flex-col items-center px-3 py-5">
                                        {/* Icon */}
                    <div
                      className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        ${item.color}
                        text-white
                        shadow-[0_0_20px_rgba(0,180,255,.6)]
                      `}
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 text-center text-[17px] font-bold leading-5 text-white">
                      {item.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-2 text-center text-xs leading-5 text-cyan-200">
                      {item.subtitle}
                    </p>

                    <div className="flex-1" />

                    {/* Chat Button */}
                    <button
                      onClick={item.action}
                      className="
                        mb-2
                        flex
                        h-11
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-700
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      <FaComments />
                      {item.button}
                    </button>

                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Bottom Message */}
          <div className="mt-10 px-4 pb-16">

            <div
              className="
                rounded-[22px]
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-md
                p-5
                shadow-[0_0_18px_rgba(0,170,255,.12)]
              "
            >
              <p
                className="
                  text-center
                  text-sm
                  leading-7
                  text-cyan-100
                "
              >
                Welcome! Click{" "}
                <span className="font-bold text-cyan-300">
                  CHAT
                </span>{" "}
                to contact our 24-hour customer support team.
                We are always available to help you with
                deposits, withdrawals, account issues,
                promotions, and any questions you may have.
              </p>
            </div>
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
            h-[180px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

      </div>
    </div>
    </div>
  );
}