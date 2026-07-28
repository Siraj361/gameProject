import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import HeroSectoin from "./HeroSectoin";
import PromoCards from "./PromoCards";
import Announcement from "./Announcement";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  // Announcement Popup
  const [announcementOpen, setAnnouncementOpen] = useState(false);

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#020617] flex justify-center">
      {/* Mobile Screen */}
      <div
        className="
          relative
          w-full
          max-w-[430px]
          h-screen
          bg-[#020617]
          overflow-hidden
          flex
          flex-col
          border-x
          border-cyan-900/40
          shadow-[0_0_15px_rgba(0,0,0,0.6)]
        "
      >
        {/* Header */}
        <Header
          setOpenMenu={setOpenMenu}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-y-hiddg pb-24">
          <HeroSectoin />
          <PromoCards />

          <Announcement
            open={announcementOpen}
            setOpen={setAnnouncementOpen}
          />
        </main>

        {/* Sidebar */}
        <Sidebar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />

        {/* Login */}
        <LoginModal
          loginOpen={loginOpen}
          setLoginOpen={setLoginOpen}
        />

        {/* Signup */}
        <SignupModal
          signupOpen={signupOpen}
          setSignupOpen={setSignupOpen}
        />

        {/* Footer */}
        {!announcementOpen && (
          <BottomNavbar
            setLoginOpen={setLoginOpen}
          />
        )}
      </div>
    </div>
  );
}

export default App;