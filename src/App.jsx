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
      min-h-screen

      bg-gradient-to-br
      from-[#020617]
      via-[#061b3a]
      to-[#020617]

      flex
      justify-center
      items-center

      p-4
      "
    >





      {/* MOBILE WEB FRAME */}

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


        rounded-[35px]


        border-[3px]
        border-cyan-800/40


        shadow-[0_0_50px_rgba(0,200,255,0.45)]


        ring-4
        ring-cyan-500/10

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

          scrollbar-hide

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









        {/* LOGIN MODAL */}

        <LoginModal

          loginOpen={loginOpen}

          setLoginOpen={setLoginOpen}

        />









        {/* SIGNUP MODAL */}

        <SignupModal

          signupOpen={signupOpen}

          setSignupOpen={setSignupOpen}

        />









        {/* BOTTOM NAVBAR */}

        <BottomNavbar

          setLoginOpen={setLoginOpen}

        />






      </div>



    </div>

  );

}


export default App;