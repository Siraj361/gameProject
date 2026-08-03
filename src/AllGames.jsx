import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaFire,
  FaHeart,
  FaSearch,
  FaFutbol,
  FaGem,
} from "react-icons/fa";

import HotGames from "./HotGames";
import JiliGames from "./JiliGames";
import PgGames from "./PgGames";
import JDBGames from "./JDBGames";
import TwoJGames from "./TwoJGames";
import SportSection from "./SportSection";
import PpGames from "./PpGames";
import TpGames from "./TpGames";


export default function AllGames() {

  const navigate = useNavigate();

  const [active, setActive] = useState("hot");
  const [search, setSearch] = useState("");


  const categories = [

    {
      id:"hot",
      name:"HOTS",
      icon:<FaFire className="text-orange-400 text-2xl"/>
    },

    {
      id:"fav",
      name:"Fav",
      icon:<FaHeart className="text-pink-400 text-2xl"/>
    },

    {
      id:"jili",
      name:"JILI",
      icon:<span className="font-bold text-lg">JILI</span>
    },

    {
      id:"pg",
      name:"PG",
      icon:<span className="font-black text-xl">PG</span>
    },

    {
      id:"2j",
      name:"2J",
      icon:<FaGem className="text-cyan-300 text-2xl"/>
    },

    {
      id:"sport",
      name:"SPORT",
      icon:<FaFutbol className="text-green-400 text-2xl"/>
    },

    {
      id:"jdb",
      name:"JDB",
      icon:<span className="font-bold text-lg">JDB</span>
    },

    {
      id:"pp",
      name:"PP",
      icon:<span className="font-bold text-lg">PP</span>
    },

    {
      id:"tp",
      name:"TP",
      icon:<span className="font-bold text-lg">TP</span>
    },

  ];



  return (

    <div className="
      flex
      justify-center
      min-h-screen
      bg-[#020617]
    ">


      <div className="
        w-full
        max-w-[540px]
        h-screen
        overflow-hidden
        bg-gradient-to-b
        from-[#021224]
        via-[#072b59]
        to-[#010914]
        border-x
        border-cyan-500/20
      ">



        {/* HEADER */}

        <div className="
          h-[70px]
          flex
          items-center
          gap-4
          px-4
          border-b
          border-cyan-500/30
          bg-[#041729]
        ">


          <button

            onClick={()=>navigate(-1)}

            className="
              w-10
              h-10
              rounded-xl
              border
              border-cyan-500
              flex
              items-center
              justify-center
              text-cyan-300
              text-xl
            "
          >

            <FaArrowLeft />

          </button>



          <h1 className="
            text-white
            text-xl
            font-bold
          ">
            All Games
          </h1>


        </div>





        {/* SEARCH */}

        <div className="
          px-3
          py-3
          border-b
          border-cyan-500/20
        ">


          <div className="
            h-12
            rounded-xl
            border
            border-cyan-500
            bg-[#071426]
            flex
            items-center
            px-4
            gap-3
          ">


            <FaSearch className="text-cyan-300"/>



            <input

              value={search}

              onChange={(e)=>setSearch(e.target.value)}

              placeholder="Search games..."

              className="
                flex-1
                bg-transparent
                outline-none
                text-white
                placeholder:text-gray-400
              "

            />


          </div>


        </div>






        {/* CONTENT */}

        <div className="
          flex
          h-[calc(100vh-135px)]
        ">



          {/* CATEGORY */}

          <div className="
            w-[105px]
            border-r
            border-cyan-500/20
            bg-[#06172d]
            overflow-y-auto
            hide-scrollbar
            py-3
          ">


            {categories.map((item)=>(


              <button

                key={item.id}

                onClick={()=>setActive(item.id)}

                className={`
                  w-full
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  py-3
                  transition-all

                  ${
                    active === item.id
                    ?
                    "bg-gradient-to-b from-cyan-500/30 to-blue-700/30 border-r-4 border-cyan-400"
                    :
                    "opacity-70 hover:opacity-100"
                  }

                `}

              >


                <div className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-cyan-500/40
                  bg-gradient-to-b
                  from-[#0d4ea3]
                  to-[#031a3b]
                  flex
                  items-center
                  justify-center
                  text-cyan-200
                ">

                  {item.icon}

                </div>



                <span className="
                  text-[11px]
                  text-white
                  font-semibold
                ">
                  {item.name}
                </span>


              </button>


            ))}


          </div>







          {/* GAMES */}

          <div className="
            flex-1
            overflow-y-auto
            hide-scrollbar
            bg-[#020617]
          ">



            {active==="hot" && <HotGames/>}

            {active==="jili" && <JiliGames/>}

            {active==="pg" && <PgGames/>}

            {active==="2j" && <TwoJGames/>}

            {active==="sport" && <SportSection/>}

            {active==="jdb" && <JDBGames/>}

            {active==="pp" && <PpGames/>}

            {active==="tp" && <TpGames/>}



            {active==="fav" && (

              <div className="
                p-5
                text-center
                text-cyan-300
                font-bold
              ">

                No Favourite Games

              </div>

            )}



          </div>



        </div>



      </div>


    </div>

  );

}