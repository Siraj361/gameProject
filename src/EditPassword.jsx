import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaArrowLeft,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

export default function EditPassword() {
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const changePassword = () => {
        const signupUser = JSON.parse(
            localStorage.getItem("signupUser")
        );

        const user = JSON.parse(
            localStorage.getItem("user")
        );

        if (!signupUser) {
            alert("Account not found");
            return;
        }

        if (oldPassword !== signupUser.password) {
            alert("Old password is incorrect");
            return;
        }

        if (newPassword.length < 4) {
            alert("Password must be at least 4 characters");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const updatedUser = {
            ...signupUser,
            password: newPassword,
        };

        localStorage.setItem(
            "signupUser",
            JSON.stringify(updatedUser)
        );

        if (user) {
            localStorage.setItem(
                "user",
                JSON.stringify(updatedUser)
            );
        }

        alert("Password changed successfully");
        navigate("/profile");
    };

    const isFormValid =
        oldPassword.trim() &&
        newPassword.trim() &&
        confirmPassword.trim();
    return (
        <div className="min-h-screen w-full flex justify-center bg-[#071321] overflow-x-hidden">

            <div
                className="relative w-full max-w-[540px] min-h-screen overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg,#03101d 0%,#083764 45%,#020617 100%)",
                }}
            >

                {/* Top Glow */}
                <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />

                {/* Bottom Glow */}
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[430px] h-[220px] rounded-full bg-blue-500/10 blur-[120px]" />

                {/* Header */}
                <div className="relative z-20 flex items-center justify-center pt-6 px-5">

                    <button
                        onClick={() => navigate(-1)}
                        className="absolute left-5 text-cyan-300 hover:text-white duration-300"
                    >
                        <FaArrowLeft size={24} />
                    </button>

                    <h1
                        className="text-white text-[30px] font-extrabold"
                        style={{
                            textShadow:
                                "0 0 20px rgba(0,180,255,.5)",
                        }}
                    >
                        Edit Password
                    </h1>

                </div>

                {/* Form */}
                <div className="relative z-20 mt-12 px-6">

                    {/* Old Password */}
                    <div className="flex items-center h-[66px] rounded-[18px] border border-cyan-400/25 bg-black/30 backdrop-blur-xl px-5 mb-6">

                        <FaLock
                            className="text-cyan-300"
                            size={20}
                        />

                        <input
                            type={showOld ? "text" : "password"}
                            placeholder="Enter old password"
                            value={oldPassword}
                            onChange={(e) =>
                                setOldPassword(e.target.value)
                            }
                            className="flex-1 h-full bg-transparent px-4 text-white text-[17px] outline-none placeholder:text-gray-400"
                        />

                        <button
                            onClick={() =>
                                setShowOld(!showOld)
                            }
                            className="text-cyan-300"
                        >
                            {showOld ? (
                                <FaEyeSlash size={20} />
                            ) : (
                                <FaEye size={20} />
                            )}
                        </button>

                    </div>
                    {/* New Password */}
                    <div className="flex items-center h-[66px] rounded-[18px] border border-cyan-400/25 bg-black/30 backdrop-blur-xl px-5 mb-6">

                        <FaLock
                            className="text-cyan-300"
                            size={20}
                        />

                        <input
                            type={showNew ? "text" : "password"}
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(e.target.value)
                            }
                            className="flex-1 h-full bg-transparent px-4 text-white text-[17px] outline-none placeholder:text-gray-400"
                        />

                        <button
                            onClick={() =>
                                setShowNew(!showNew)
                            }
                            className="text-cyan-300"
                        >
                            {showNew ? (
                                <FaEyeSlash size={20} />
                            ) : (
                                <FaEye size={20} />
                            )}
                        </button>

                    </div>

                    {/* Confirm Password */}
                    <div className="flex items-center h-[66px] rounded-[18px] border border-cyan-400/25 bg-black/30 backdrop-blur-xl px-5">

                        <FaLock
                            className="text-cyan-300"
                            size={20}
                        />

                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Enter new password again"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            className="flex-1 h-full bg-transparent px-4 text-white text-[17px] outline-none placeholder:text-gray-400"
                        />

                        <button
                            onClick={() =>
                                setShowConfirm(!showConfirm)
                            }
                            className="text-cyan-300"
                        >
                            {showConfirm ? (
                                <FaEyeSlash size={20} />
                            ) : (
                                <FaEye size={20} />
                            )}
                        </button>

                    </div>
                    {/* Confirm Button */}
                    <div className="flex justify-center mt-14">

                        <button
                            onClick={changePassword}
                            disabled={!isFormValid}
                            className={`
    w-[220px]
    h-[58px]
    rounded-xl
    bg-gradient-to-r
    from-cyan-400
    via-sky-500
    to-blue-700
    text-white
    text-[20px]
    font-bold
    transition-all

    ${isFormValid
                                    ? "opacity-100 shadow-[0_0_25px_rgba(0,170,255,.45)]"
                                    : "opacity-50 shadow-none cursor-not-allowed"
                                }
  `}
                        >
                            Confirm
                        </button>          </div>

                </div>

                {/* Decorative Glow */}
                <div className="absolute inset-0 pointer-events-none">

                    <div
                        className="
              absolute
              top-[180px]
              left-1/2
              -translate-x-1/2
              w-[360px]
              h-[360px]
              rounded-full
              bg-cyan-500/5
              blur-[120px]
            "
                    />

                    <div
                        className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-[420px]
              h-[180px]
              rounded-full
              bg-blue-500/10
              blur-[120px]
            "
                    />

                </div>
            </div>
        </div>
    );
}