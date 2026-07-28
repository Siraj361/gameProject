import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#24120f] flex justify-center">

      {/* Mobile Screen */}
      <div className="relative w-full max-w-[430px] min-h-screen bg-[#1a0f0b] overflow-hidden shadow-2xl">

        <Header
          setOpenMenu={setOpenMenu}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
        />

        {/* Your Page Content */}
        <div className="pb-28">
          {/* Cards / Games / Banner */}
        </div>

        <Sidebar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />

        <LoginModal
          loginOpen={loginOpen}
          setLoginOpen={setLoginOpen}
        />

        <SignupModal
          signupOpen={signupOpen}
          setSignupOpen={setSignupOpen}
        />

        <BottomNavbar
          setLoginOpen={setLoginOpen}
        />

      </div>

    </div>
  );
}

export default App;