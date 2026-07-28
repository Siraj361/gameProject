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
    <div className="min-h-screen bg-[#06142d]">

      <Header
        setOpenMenu={setOpenMenu}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
      />

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

      <BottomNavbar />

    </div>
  );
}

export default App;