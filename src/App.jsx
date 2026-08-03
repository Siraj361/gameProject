import { useState } from "react";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";


import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";


import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";


import HeroSectoin from "./HeroSectoin";
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


import SecFooter from "./SecFooter";


import Profile from "./Profile";
import InviteBonus from "./InviteBonus";


import Toast from "./Toast";
import SideWidget from "./SideWidget";



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



  return (
    <>


      <Header
        setOpenMenu={setOpenMenu}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
        user={user}
        balance={
          localStorage.getItem("balance") || 0
        }
      />



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


        <HeroSectoin />


        <PromoCards />


        {/* Category Click */}
        <GameCategory />


        {/* Hot Games */}
        <GameGrid
          setSignupOpen={setSignupOpen}
        />


        <SecFooter />


      </main>




      <Announcement
        open={announcementOpen}
        setOpenAnnouncement={
          setAnnouncementOpen
        }
      />



      <SideWidget />



      <LoginModal

        loginOpen={loginOpen}

        setLoginOpen={setLoginOpen}

        setSignupOpen={setSignupOpen}

        navigate={navigate}

        setToast={setToast}

      />



      <SignupModal

        signupOpen={signupOpen}

        setSignupOpen={setSignupOpen}

        setLoginOpen={setLoginOpen}

        setToast={setToast}

      />



    </>
  );

}
export default function App() {


  const location = useLocation();

  const navigate = useNavigate();



  const [openMenu, setOpenMenu] = useState(false);


  const [loginOpen, setLoginOpen] = useState(false);


  const [signupOpen, setSignupOpen] = useState(false);


  const [announcementOpen, setAnnouncementOpen] =
    useState(false);


  const [toast, setToast] = useState(null);





  const handleProfile = () => {


    const user = localStorage.getItem("user");


    if (!user) {

      setSignupOpen(true);

      return;

    }


    navigate("/profile");

  };





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



        {/* 540 Width Wrapper */}

        <div
          className="
            relative
            w-full
            max-w-[540px]
            h-full
            bg-[#020617]
            overflow-hidden
            border-x
            border-cyan-900/40
          "
        >



          {/* Toast */}

          {toast && (

            <Toast

              message={toast.message || toast}

              type={toast.type || "success"}

              close={() => setToast(null)}

            />

          )}






          {/* Sidebar */}

          <Sidebar

            open={openMenu}

            setOpen={setOpenMenu}

            setLoginOpen={setLoginOpen}

            setSignupOpen={setSignupOpen}

          />






          <Routes>


            {/* HOME */}

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


                  announcementOpen={announcementOpen}

                  setAnnouncementOpen={
                    setAnnouncementOpen
                  }


                  navigate={navigate}

                  setToast={setToast}

                />

              }

            />






            {/* ALL GAMES PAGE */}

            <Route

              path="/games"

              element={<AllGames />}

            />







            {/* GAME PROVIDERS */}


            <Route

              path="/games/hot"

              element={<GameGrid />}

            />


            <Route

              path="/games/jili"

              element={<JiliGames />}

            />


            <Route

              path="/games/pg"

              element={<PgGames />}

            />



            <Route

              path="/games/2j"

              element={<TwoJGames />}

            />



            <Route

              path="/games/sport"

              element={<SportSection />}

            />



            <Route

              path="/games/jdb"

              element={<JDBGames />}

            />



            <Route

              path="/games/pp"

              element={<PpGames />}

            />



            <Route

              path="/games/tp"

              element={<TpGames />}

            />








            {/* PROFILE */}


            <Route

              path="/profile"

              element={

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

              }

            />







            {/* INVITE BONUS */}


            <Route

              path="/invite-bonus"

              element={

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

              }

            />



          </Routes>






          {/* Bottom Navbar */}


          {(

            location.pathname === "/" ||

            location.pathname === "/profile" ||

            location.pathname === "/invite-bonus"

          )

          &&

          !announcementOpen && (

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







          {/* Announcement Blur */}

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



        </div>


      </div>


    </div>

  );

}