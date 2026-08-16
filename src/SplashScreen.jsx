import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#020817]
      "
    >
      {/* BLUE GLOW */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/20
          blur-[100px]
        "
      />

      {/* LOGO */}

      <div
        className="
          relative
          flex
          flex-col
          items-center
          animate-[splashLogo_.8s_ease-out]
        "
      >
        <div
          className="
            flex
            h-[150px]
            w-[150px]
            items-center
            justify-center
            rounded-[32px]
            bg-[#020817]
            shadow-[0_0_45px_rgba(0,180,255,.35)]
          "
        >
          <img
            src={`${import.meta.env.BASE_URL}pwa-512x512.png`}
            alt="GameProject"
            className="
              h-[130px]
              w-[130px]
              rounded-[28px]
              object-contain
            "
          />
        </div>

        {/* APP NAME */}

        <h1
          className="
            mt-6
            text-[26px]
            font-black
            tracking-[4px]
            text-white
            drop-shadow-[0_0_10px_rgba(0,200,255,.5)]
          "
        >
          GAMEPROJECT
        </h1>

        {/* LOADING DOTS */}

        <div className="mt-7 flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300" />

          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:150ms]" />

          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:300ms]" />
        </div>
      </div>

      <style>{`
        @keyframes splashLogo {
          0% {
            opacity: 0;
            transform: scale(.75);
          }

          60% {
            opacity: 1;
            transform: scale(1.05);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}