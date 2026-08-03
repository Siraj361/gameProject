import { useNavigate } from "react-router-dom";

import {
  FaFire,
  FaFutbol,
  FaGem
} from "react-icons/fa";


export default function GameCategory() {


  const navigate = useNavigate();



  const games = [

    {
      name:"HOTS",
      icon:<FaFire size={28}/>,
    },


    {
      name:"JILI",
      icon:<span className="font-bold text-lg">JILI</span>,
    },


    {
      name:"PG",
      icon:<span className="font-black text-xl">PG</span>,
    },


    {
      name:"2J",
      icon:<FaGem size={28}/>,
    },


    {
      name:"SPORT",
      icon:<FaFutbol size={28}/>,
    },


    {
      name:"JDB",
      icon:<span className="font-bold text-lg">JDB</span>,
    },


    {
      name:"PP",
      icon:<span className="font-bold text-lg">PP</span>,
    },


    {
      name:"TP",
      icon:<span className="font-bold text-lg">TP</span>,
    },


  ];



  return (

    <div
      className="
        w-full
        overflow-x-auto
        hide-scrollbar
        py-4
      "
    >


      <div
        className="
          flex
          gap-4
          px-3
        "
      >



      {games.map((item,index)=>(


        <div

          key={index}

          onClick={()=>navigate("/games")}

          className="
            flex-shrink-0
            w-[74px]
            flex
            flex-col
            items-center
            cursor-pointer
          "

        >



          <div

            className="
              w-16
              h-16
              rounded-2xl
              border
              border-cyan-400/50
              bg-gradient-to-b
              from-[#2A72FF]
              via-[#1657E6]
              to-[#082C7A]
              flex
              items-center
              justify-center
              text-cyan-200
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-110
            "

          >

            {item.icon}


          </div>



          <p

            className="
              mt-2
              text-xs
              text-slate-300
              font-semibold
            "

          >

            {item.name}

          </p>



        </div>


      ))}


      </div>


    </div>

  );

}