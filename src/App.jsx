import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import HeroSectoin from "./HeroSectoin";
import PromoCards from "./PromoCards";


function App() {

  const [openMenu, setOpenMenu] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);

  const [signupOpen, setSignupOpen] = useState(false);



  return (

    <div
      className="
      w-screen
      h-screen

      overflow-hidden

      bg-[#020617]

      flex
      justify-center
      "
    >




      {/* MOBILE SCREEN */}

      <div
        className="
        fixed

        top-0
        bottom-0

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





        {/* HEADER */}

        <Header

          setOpenMenu={setOpenMenu}

          setLoginOpen={setLoginOpen}

          setSignupOpen={setSignupOpen}

        />







        {/* CONTENT */}

        <main
          className="
          flex-1

          overflow-y-auto

          pb-24

          "
        >

          <HeroSectoin />

          <PromoCards />

        </main>








        {/* SIDEBAR */}

        <Sidebar

          openMenu={openMenu}

          setOpenMenu={setOpenMenu}

        />








        {/* LOGIN */}

        <LoginModal

          loginOpen={loginOpen}

          setLoginOpen={setLoginOpen}

        />








        {/* SIGNUP */}

        <SignupModal

          signupOpen={signupOpen}

          setSignupOpen={setSignupOpen}

        />








        {/* BOTTOM NAV */}

        <BottomNavbar

          setLoginOpen={setLoginOpen}

        />



      </div>


    </div>

  );
}


export default App;