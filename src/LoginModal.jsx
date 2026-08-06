import { useState } from "react";
import { X, Eye, EyeOff, Lock, Phone } from "lucide-react";

export default function LoginModal({
  loginOpen,
  setLoginOpen,
  setSignupOpen,
  navigate,
  setToast,
}) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (loading) return;

    if (!phone.trim()) {
      setToast({
        message: "Enter phone number",
        type: "error",
      });
      return;
    }

    if (!password.trim()) {
      setToast({
        message: "Enter password",
        type: "error",
      });
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("signupUser")
    );

    if (!savedUser) {
      setToast({
        message: "Please create an account first",
        type: "error",
      });
      return;
    }

    if (
      savedUser.phone !== phone ||
      savedUser.password !== password
    ) {
      setToast({
        message: "Wrong phone or password",
        type: "error",
      });
      return;
    }

    setLoading(true);

    localStorage.setItem(
      "user",
      JSON.stringify(savedUser)
    );

    if (!localStorage.getItem("balance")) {
      localStorage.setItem("balance", "0");
    }

    window.dispatchEvent(new Event("storage"));

    setTimeout(() => {
      setLoading(false);

      setToast({
        message: "Login Successful",
        type: "success",
      });

      setLoginOpen(false);

      setPhone("");
      setPassword("");

      navigate("/profile");
    }, 500);
  };
    return (
    <div
      className={`
        fixed
        top-0
        left-1/2
        -translate-x-1/2
        w-full
        max-w-[540px]
        h-screen
        z-[10000]
        ${
          loginOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
      `}
    >
      {/* Overlay */}
      <div
        onClick={() => setLoginOpen(false)}
        className={`
          absolute
          inset-0
          bg-black/80
          backdrop-blur-sm
          transition-all
          duration-300
          ${
            loginOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Login Card */}
      <div
        className={`
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[92%]
          max-w-[410px]
          rounded-[30px]
          border
          border-cyan-400/50
          bg-gradient-to-b
          from-[#08254a]
          via-[#061a36]
          to-[#020617]
          p-6
          shadow-[0_0_35px_rgba(0,180,255,.25)]
          transition-all
          duration-300
          ${
            loginOpen
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0"
          }
        `}
      >
        {/* Close */}
        <button
          onClick={() => setLoginOpen(false)}
          className="
            absolute
            right-4
            top-4
            text-cyan-300
            hover:text-white
          "
        >
          <X size={26} />
        </button>

        {/* Title */}
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Login
        </h1>

        {/* Phone */}
        <div
          className="
            mb-4
            flex
            items-center
            rounded-2xl
            border
            border-cyan-500/40
            bg-[#081525]
            px-3
          "
        >
          <Phone className="text-cyan-400" size={20} />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="
              h-14
              flex-1
              bg-transparent
              px-3
              text-white
              outline-none
              placeholder:text-gray-400
            "
          />
        </div>

        {/* Password */}
        <div
          className="
            flex
            items-center
            rounded-2xl
            border
            border-cyan-500/40
            bg-[#081525]
            px-3
          "
        >
          <Lock className="text-cyan-400" size={20} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              h-14
              flex-1
              bg-transparent
              px-3
              text-white
              outline-none
              placeholder:text-gray-400
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="text-cyan-400"
          >
            {showPassword ? (
              <EyeOff size={22} />
            ) : (
              <Eye size={22} />
            )}
          </button>
        </div>
                {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`
            mt-6
            w-full
            rounded-2xl
            py-4
            text-lg
            font-bold
            text-white
            transition-all
            duration-300
            ${
              loading
                ? "cursor-not-allowed bg-gray-600"
                : "bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 hover:scale-[1.02]"
            }
          `}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-cyan-700/40" />

          <span className="px-3 text-sm text-cyan-300">
            OR
          </span>

          <div className="h-px flex-1 bg-cyan-700/40" />
        </div>

        {/* Signup Text */}
        <p className="text-center text-sm text-gray-300">
          Don't have an account?
        </p>

        {/* Create Account */}
        <button
          onClick={() => {
            setLoginOpen(false);
            setSignupOpen(true);
          }}
          className="
            mt-3
            w-full
            rounded-2xl
            border
            border-cyan-400/40
            bg-cyan-500/10
            py-3
            font-bold
            text-cyan-300
            transition-all
            hover:bg-cyan-500/20
          "
        >
          Create Account
        </button>
              </div>
    </div>
  );
}