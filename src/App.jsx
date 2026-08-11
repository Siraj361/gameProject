import { useState, useEffect } from "react";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";

import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

import HeroSection from "./HeroSectoin";
import PromoCards from "./PromoCards";
import Announcement from "./Announcement";

import GameCategory from "./GameCategory";
import GameGrid from "./HotGames";

import AllGames from "./AllGames";

import JiliGames from "./JiliGames";
import PgGames from "./PgGames";
import TwoJGames from "./TwoJGames";
import SportSection from "./SportSection";
import JDBGames from "./JDBGames";
import PpGames from "./PpGames";
import TpGames from "./TpGames";
import DBGames from "./DBGames";
import FishGames from "./FishGames";

import SecFooter from "./SecFooter";

import Profile from "./Profile";
import InviteBonus from "./InviteBonus";
import VipPage from "./VipPage";
import CustomerService from "./CustomerService";
import EditPassword from "./EditPassword";
import Messages from "./Messages";

import Statistics from "./Statistics";
import DailyStatistics from "./DailyStatistics";

import Toast from "./Toast";
import SideWidget from "./SideWidget";
import LimitedTimeActivities from "./LimitedTimeActivities";
import Agency from "./Agency";
import Deposit from "./Deposit";
import Balance from "./Balance";

/* =========================================================
   PROTECTED ROUTE
========================================================= */

function ProtectedRoute({ children, user, onNeedLogin }) {
  useEffect(() => {
    if (!user) {
      onNeedLogin?.();
    }
  }, [user, onNeedLogin]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

/* =========================================================
   HOME
========================================================= */

function Home({
  openMenu,
  setOpenMenu,

  loginOpen,
  setLoginOpen,

  signupOpen,
  setSignupOpen,

  announcementOpen,
  setAnnouncementOpen,

  navigate,
  setToast,
}) {
  const user =
    JSON.parse(localStorage.getItem("user")) || null;

  const balance =
    Number(localStorage.getItem("balance")) || 0;

  return (
    <>
      {/* HEADER */}

      <Header
        setOpenMenu={setOpenMenu}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
        user={user}
        balance={balance}
      />

      {/* HOME CONTENT */}

      <main
        id="home-scroll"
        className="
          absolute
          top-[70px]
          bottom-[78px]
          left-0
          right-0
          overflow-y-auto
          hide-scrollbar
        "
      >
        <HeroSection />

        <PromoCards />

        <GameCategory />

        <GameGrid
          setSignupOpen={setSignupOpen}
        />

        <JiliGames />

        <PgGames />

        <TwoJGames />

        <SportSection />

        <JDBGames />

        <PpGames />

        <TpGames />

        <DBGames />

        <FishGames />

        <SecFooter />
      </main>

      {/* ANNOUNCEMENT */}

      <Announcement
        open={announcementOpen}
        setOpenAnnouncement={setAnnouncementOpen}
      />

      {/* SIDE WIDGET */}

      <SideWidget />

      {/* LOGIN */}

      <LoginModal
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
        navigate={navigate}
        setToast={setToast}
      />

      {/* SIGNUP */}

      <SignupModal
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
        setToast={setToast}
      />
    </>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  /* =======================================================
     STATES
  ======================================================= */

  const [openMenu, setOpenMenu] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);

  const [signupOpen, setSignupOpen] = useState(false);

  const [announcementOpen, setAnnouncementOpen] =
    useState(false);

  const [toast, setToast] = useState(null);

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  /* =======================================================
     BALANCE
  ======================================================= */

  const [balance, setBalance] = useState(() => {
    return Number(localStorage.getItem("balance")) || 0;
  });

  /* =======================================================
     UPDATE USER
  ======================================================= */

  const updateUser = () => {
    try {
      const savedUser =
        JSON.parse(localStorage.getItem("user")) || null;

      setUser(savedUser);
    } catch {
      setUser(null);
    }
  };

  /* =======================================================
     UPDATE BALANCE
  ======================================================= */

  const updateBalance = () => {
    const savedBalance =
      Number(localStorage.getItem("balance")) || 0;

    setBalance(savedBalance);
  };

  /* =======================================================
     LISTEN FOR LOGIN / LOGOUT
  ======================================================= */

  useEffect(() => {
    const handleStorage = () => {
      updateUser();
      updateBalance();
    };

    const handleUserLogin = () => {
      updateUser();
      updateBalance();

      /* Close login/signup automatically */

      setLoginOpen(false);
      setSignupOpen(false);
    };

    const handleUserLogout = () => {
      setUser(null);
      setBalance(0);
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

    window.addEventListener(
      "userLogin",
      handleUserLogin
    );

    window.addEventListener(
      "userLogout",
      handleUserLogout
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorage
      );

      window.removeEventListener(
        "userLogin",
        handleUserLogin
      );

      window.removeEventListener(
        "userLogout",
        handleUserLogout
      );
    };
  }, []);

  /* =======================================================
     BALANCE REFRESH
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      updateBalance();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     CHECK USER ON EVERY ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    updateUser();
    updateBalance();
  }, [location.pathname]);

  /* =======================================================
     LOGIN REQUIRED
  ======================================================= */

  const requireLogin = () => {
    setLoginOpen(true);
  };

  /* =======================================================
     PROFILE BUTTON
  ======================================================= */

  const handleProfile = () => {
    if (!user) {
      setLoginOpen(true);
      return;
    }

    navigate("/profile");
  };

  /* =======================================================
     AFTER LOGIN
  ======================================================= */

  const handleLoginSuccess = () => {
    updateUser();
    updateBalance();

    setLoginOpen(false);
    setSignupOpen(false);
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div className="page-animation">
      <div
        className="
          h-screen
          w-full
          flex
          justify-center
          bg-[#020617]
          overflow-hidden
        "
      >
        <div
          className="
            relative
            w-full
            max-w-[540px]
            h-full
            bg-[#020617]
            overflow-hidden
          "
        >
          {/* =================================================
              TOAST
          ================================================== */}

          {toast && (
            <Toast
              message={
                toast.message || toast
              }
              type={
                toast.type || "success"
              }
              close={() => setToast(null)}
            />
          )}

          {/* =================================================
              SIDEBAR
          ================================================== */}

          <Sidebar
            open={openMenu}
            setOpen={setOpenMenu}
            setLoginOpen={setLoginOpen}
            setSignupOpen={setSignupOpen}
            user={user}
            setUser={setUser}
          />

          {/* =================================================
              ROUTES
          ================================================== */}

          <Routes>

            {/* =================================================
                BALANCE
            ================================================== */}

            <Route
              path="/balance"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <Balance />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                CUSTOMER SERVICE
            ================================================== */}

            <Route
              path="/customer-service"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <CustomerService />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                MESSAGES
            ================================================== */}

            <Route
              path="/messages"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <Messages />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                EDIT PASSWORD
            ================================================== */}

            <Route
              path="/edit-password"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <EditPassword />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                AGENCY
            ================================================== */}

            <Route
              path="/agency"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <Agency />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                STATISTICS
            ================================================== */}

            <Route
              path="/statistics"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <Statistics />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                DAILY STATISTICS
            ================================================== */}

            <Route
              path="/daily-statistics"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <DailyStatistics />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                HOME
            ================================================== */}

            <Route
              path="/"
              element={
                <Home
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}

                  loginOpen={loginOpen}
                  setLoginOpen={setLoginOpen}

                  signupOpen={signupOpen}
                  setSignupOpen={setSignupOpen}

                  announcementOpen={
                    announcementOpen
                  }
                  setAnnouncementOpen={
                    setAnnouncementOpen
                  }

                  navigate={navigate}

                  setToast={setToast}
                />
              }
            />

            {/* =================================================
                ALL GAMES
            ================================================== */}

            <Route
              path="/games"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <AllGames />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                HOT
            ================================================== */}

            <Route
              path="/games/hot"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <GameGrid />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                LIMITED TIME
            ================================================== */}

            <Route
              path="/limited-time-activities"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <LimitedTimeActivities />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                JILI
            ================================================== */}

            <Route
              path="/games/jili"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <JiliGames />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                PG
            ================================================== */}

            <Route
              path="/games/pg"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <PgGames />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                2J
            ================================================== */}

            <Route
              path="/games/2j"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <TwoJGames />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                SPORT
            ================================================== */}

            <Route
              path="/games/sport"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <SportSection />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                JDB
            ================================================== */}

            <Route
              path="/games/jdb"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <JDBGames />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                PP
            ================================================== */}

            <Route
              path="/games/pp"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <PpGames />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                TP
            ================================================== */}

            <Route
              path="/games/tp"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <TpGames />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                VIP
            ================================================== */}

            <Route
              path="/vip"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-[78px]
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <VipPage />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                DEPOSIT
            ================================================== */}

            <Route
              path="/deposit"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <Deposit />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                PROFILE
            ================================================== */}

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-[78px]
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <Profile />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* =================================================
                INVITE BONUS
            ================================================== */}

            <Route
              path="/invite-bonus"
              element={
                <ProtectedRoute
                  user={user}
                  onNeedLogin={requireLogin}
                >
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-[78px]
                      overflow-y-auto
                      hide-scrollbar
                    "
                  >
                    <InviteBonus />
                  </div>
                </ProtectedRoute>
              }
            />

          </Routes>

          {/* =================================================
              BOTTOM NAVBAR
          ================================================== */}

          {!announcementOpen &&
            [
              "/",
              "/profile",
              "/invite-bonus",
              "/vip",
              "/limited-time-activities",
              "/agency",
            ].includes(location.pathname) && (
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-[999]
                "
              >
                <BottomNavbar
                  handleProfile={handleProfile}
                />
              </div>
            )}

          {/* =================================================
              ANNOUNCEMENT BLUR
          ================================================== */}

          {announcementOpen && (
            <div
              className="
                absolute
                inset-0
                z-[995]
                bg-black/20
                backdrop-blur-[2px]
              "
            />
          )}

          {/* =================================================
              GLOBAL LOGIN MODAL
          ================================================= */}

          <LoginModal
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}
            setSignupOpen={setSignupOpen}
            navigate={navigate}
            setToast={setToast}
            onLoginSuccess={handleLoginSuccess}
          />

          {/* =================================================
              GLOBAL SIGNUP MODAL
          ================================================= */}

          <SignupModal
            signupOpen={signupOpen}
            setSignupOpen={setSignupOpen}
            setLoginOpen={setLoginOpen}
            setToast={setToast}
            onSignupSuccess={handleLoginSuccess}
          />
        </div>
      </div>
    </div>
  );
}