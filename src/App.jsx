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


import SecFooter from "./SecFooter";


import Profile from "./Profile";
import InviteBonus from "./InviteBonus";
import VipPage from "./VipPage";


import Toast from "./Toast";
import SideWidget from "./SideWidget";





// 🔒 Protected Route Fix

function ProtectedRoute({

  children,

  user,

  setSignupOpen

}) {


  useEffect(()=>{


    if(!user){


      setSignupOpen(true);


    }


  },[user,setSignupOpen]);




  if(!user){


    return (

      <Navigate

        to="/"

        replace

      />

    );


  }



  return children;


}









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
export default function App(){



  const location = useLocation();


  const navigate = useNavigate();





  const [openMenu,setOpenMenu] =

    useState(false);





  const [loginOpen,setLoginOpen] =

    useState(false);





  const [signupOpen,setSignupOpen] =

    useState(false);





  const [announcementOpen,setAnnouncementOpen] =

    useState(false);





  const [toast,setToast] =

    useState(null);





  const [user,setUser] =

    useState(

      JSON.parse(

        localStorage.getItem("user")

      ) || null

    );






  useEffect(()=>{


    const updateUser = ()=>{


      setUser(

        JSON.parse(

          localStorage.getItem("user")

        ) || null

      );


    };



    window.addEventListener(

      "storage",

      updateUser

    );



    return ()=>{


      window.removeEventListener(

        "storage",

        updateUser

      );


    };


  },[]);







  const handleProfile = ()=>{


    if(!user){


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






          {toast && (


            <Toast


              message={

                toast.message || toast

              }


              type={

                toast.type || "success"

              }


              close={()=>setToast(null)}


            />


          )}







          <Sidebar


            open={openMenu}


            setOpen={setOpenMenu}


            setLoginOpen={setLoginOpen}


            setSignupOpen={setSignupOpen}


            user={user}


            setUser={setUser}


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








            {/* ALL GAMES */}


            <Route


              path="/games"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <AllGames />


                </ProtectedRoute>


              }


            />








            {/* HOT */}


            <Route


              path="/games/hot"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <GameGrid />


                </ProtectedRoute>


              }


            />








            {/* JILI */}


            <Route


              path="/games/jili"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <JiliGames />


                </ProtectedRoute>


              }


            />








            {/* PG */}


            <Route


              path="/games/pg"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <PgGames />


                </ProtectedRoute>


              }


            />








            {/* 2J */}


            <Route


              path="/games/2j"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <TwoJGames />


                </ProtectedRoute>


              }


            />








            {/* SPORT */}


            <Route


              path="/games/sport"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <SportSection />


                </ProtectedRoute>


              }


            />
            
            {/* JDB */}


            <Route


              path="/games/jdb"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <JDBGames />


                </ProtectedRoute>


              }


            />








            {/* PP */}


            <Route


              path="/games/pp"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <PpGames />


                </ProtectedRoute>


              }


            />








                {/* TP */}


            <Route


              path="/games/tp"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


                >


                  <TpGames />


                </ProtectedRoute>


              }


            />








            {/* VIP */}


            <Route


              path="/vip"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


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








            {/* PROFILE */}


            <Route


              path="/profile"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


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








            {/* INVITE BONUS */}


            <Route


              path="/invite-bonus"


              element={


                <ProtectedRoute


                  user={user}


                  setSignupOpen={setSignupOpen}


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









          {/* Bottom Navbar */}


          {


            (

              location.pathname === "/" ||

              location.pathname === "/profile" ||

              location.pathname === "/invite-bonus" ||

              location.pathname === "/vip"

            )

            &&

            !announcementOpen

            &&

            (


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


            )


          }









          {/* Announcement Blur Overlay */}


          {


            announcementOpen && (


              <div


                className="
                  absolute
                  inset-0
                  z-[995]
                  bg-black/20
                  backdrop-blur-[2px]
                "


              />


            )


          }





        </div>


      </div>


    </div>


  );


}