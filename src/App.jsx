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

import SplashScreen from "./SplashScreen";

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
   PAGE SCROLL
========================================================= */

function PageScroll({ children, className = "" }) {
  return (
    <div
      className={`
        absolute
        inset-0
        overflow-y-auto
        overflow-x-hidden
        hide-scrollbar
        overscroll-contain
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home({
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
  let homeUser = null;

  try {
    homeUser = JSON.parse(localStorage.getItem("user")) || null;
  } catch {
    homeUser = null;
  }

  const balance = Number(localStorage.getItem("balance")) || 0;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* HEADER */}

      <div
        className="
          fixed
          top-0
          left-1/2
          -translate-x-1/2
          z-[1000]
          h-[70px]
          w-full
          max-w-[540px]
        "
      >
        <Header
          setOpenMenu={setOpenMenu}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
          user={homeUser}
          balance={balance}
        />
      </div>

      {/* HOME CONTENT */}

      <main
        id="home-scroll"
        className="
          absolute
          top-[70px]
          bottom-0
          left-0
          right-0
          overflow-y-auto
          overflow-x-hidden
          hide-scrollbar
          overscroll-contain
        "
      >
        <HeroSection />

        <PromoCards />

        <GameCategory />

        <GameGrid setSignupOpen={setSignupOpen} />

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

      {/* HOME LOGIN */}

      <LoginModal
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
        navigate={navigate}
        setToast={setToast}
      />

      {/* HOME SIGNUP */}

      <SignupModal
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
        setToast={setToast}
      />
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  /* =======================================================
     SPLASH
  ======================================================= */

  const [showSplash, setShowSplash] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  /* =======================================================
     STATES
  ======================================================= */

  const [openMenu, setOpenMenu] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [announcementOpen, setAnnouncementOpen] = useState(false);
  const [toast, setToast] = useState(null);

  /* =======================================================
     USER
  ======================================================= */

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
     LOGIN / LOGOUT EVENTS
  ======================================================= */

  useEffect(() => {
    const handleStorage = () => {
      updateUser();
      updateBalance();
    };

    const handleUserLogin = () => {
      updateUser();
      updateBalance();

      setLoginOpen(false);
      setSignupOpen(false);
    };

    const handleUserLogout = () => {
      setUser(null);
      setBalance(0);
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("userLogin", handleUserLogin);
    window.addEventListener("userLogout", handleUserLogout);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("userLogin", handleUserLogin);
      window.removeEventListener("userLogout", handleUserLogout);
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
     ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    updateUser();
    updateBalance();
    setOpenMenu(false);
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
     LOGIN SUCCESS
  ======================================================= */

  const handleLoginSuccess = () => {
    updateUser();
    updateBalance();

    setLoginOpen(false);
    setSignupOpen(false);
  };

  /* =======================================================
     BOTTOM NAVBAR
  ======================================================= */

  const showBottomNavbar = [
    "/",
    "/profile",
    "/invite-bonus",
    "/vip",
    "/limited-time-activities",
    "/agency",
  ].includes(location.pathname);

  /* =======================================================
     MAIN
  ======================================================= */

  return (
    <div
      className="
        fixed
        inset-0
        h-[100dvh]
        w-full
        overflow-hidden
        bg-[#020617]
      "
    >
      {/* 540PX APP CONTAINER */}

      <div
        className="
          relative
          mx-auto
          h-[100dvh]
          w-full
          max-w-[540px]
          overflow-hidden
          bg-[#020617]
        "
      >
        {/* SPLASH */}

        {showSplash && (
          <SplashScreen
            onFinish={() => setShowSplash(false)}
          />
        )}

        {/* TOAST */}

        {toast && (
          <Toast
            message={toast.message || toast}
            type={toast.type || "success"}
            close={() => setToast(null)}
          />
        )}

        {/* SIDEBAR */}

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
        ================================================= */}

        <Routes>
          {/* HOME */}

          <Route
            path="/"
            element={
              <Home
                setOpenMenu={setOpenMenu}
                loginOpen={loginOpen}
                setLoginOpen={setLoginOpen}
                signupOpen={signupOpen}
                setSignupOpen={setSignupOpen}
                announcementOpen={announcementOpen}
                setAnnouncementOpen={setAnnouncementOpen}
                navigate={navigate}
                setToast={setToast}
              />
            }
          />

          {/* BALANCE */}

          <Route
            path="/balance"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <Balance />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* DEPOSIT */}

          <Route
            path="/deposit"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <Deposit />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* PROFILE */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <Profile />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* INVITE BONUS */}

          <Route
            path="/invite-bonus"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <InviteBonus />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* VIP */}

          <Route
            path="/vip"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <VipPage />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* AGENCY */}

          <Route
            path="/agency"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <Agency />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* LIMITED TIME ACTIVITIES */}

          <Route
            path="/limited-time-activities"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <LimitedTimeActivities />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* CUSTOMER SERVICE */}

          <Route
            path="/customer-service"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <CustomerService />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* MESSAGES */}

          <Route
            path="/messages"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <Messages />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* EDIT PASSWORD */}

          <Route
            path="/edit-password"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <EditPassword />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* STATISTICS */}

          <Route
            path="/statistics"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <Statistics />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* DAILY STATISTICS */}

          <Route
            path="/daily-statistics"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <DailyStatistics />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* ALL GAMES */}

          <Route
            path="/games"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <AllGames />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* HOT */}

          <Route
            path="/games/hot"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <GameGrid />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* JILI */}

          <Route
            path="/games/jili"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <JiliGames />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* PG */}

          <Route
            path="/games/pg"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <PgGames />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* 2J */}

          <Route
            path="/games/2j"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <TwoJGames />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* SPORT */}

          <Route
            path="/games/sport"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <SportSection />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* JDB */}

          <Route
            path="/games/jdb"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <JDBGames />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* PP */}

          <Route
            path="/games/pp"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <PpGames />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* TP */}

          <Route
            path="/games/tp"
            element={
              <ProtectedRoute
                user={user}
                onNeedLogin={requireLogin}
              >
                <PageScroll>
                  <TpGames />
                </PageScroll>
              </ProtectedRoute>
            }
          />

          {/* UNKNOWN ROUTE */}

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>

        {/* =================================================
            BOTTOM NAVBAR
        ================================================= */}

        {!announcementOpen && showBottomNavbar && (
          <div
            className="
              fixed
              bottom-0
              left-1/2
              z-[1000]
              h-[78px]
              w-full
              max-w-[540px]
              -translate-x-1/2
            "
          >
            <BottomNavbar
              handleProfile={handleProfile}
            />
          </div>
        )}

        {/* ANNOUNCEMENT BLUR */}

        {announcementOpen && (
          <div
            className="
              pointer-events-none
              fixed
              inset-0
              z-[995]
              bg-black/20
              backdrop-blur-[2px]
            "
          />
        )}

        {/* GLOBAL LOGIN */}

        <LoginModal
          loginOpen={loginOpen}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
          navigate={navigate}
          setToast={setToast}
          onLoginSuccess={handleLoginSuccess}
        />

        {/* GLOBAL SIGNUP */}

        <SignupModal
          signupOpen={signupOpen}
          setSignupOpen={setSignupOpen}
          setLoginOpen={setLoginOpen}
          setToast={setToast}
          onSignupSuccess={handleLoginSuccess}
        />
      </div>
    </div>
  );
}