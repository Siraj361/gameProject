import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import PgLogo from "./assets/pg.png";

import Pg1 from "./assets/pg1.png";
import Pg2 from "./assets/pg2.png";
import Pg3 from "./assets/pg3.png";
import Pg5 from "./assets/pg5.png";
import Pg6 from "./assets/pg6.png";
import Pg7 from "./assets/pg7.png";
import Pg8 from "./assets/pg8.png";

export default function PgGames() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Fade Animation
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featured = [
    {
      id: 1,
      
      image: Pg1,
      large: true,
    },
    {
      id: 2,
      
      image: Pg2,
    },
    {
      id: 3,
      
      image: Pg3,
    },
  ];

  const games = [
    { id: 5,  image: Pg5 },
    { id: 6,  image: Pg6 },
    { id: 7,  image: Pg7 },
    { id: 8,  image: Pg8 },
  ];

  return (
    <div className="px-3 py-4">
      {/* Header */}
      <div className="border border-cyan-500 rounded-xl bg-[#071426]">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src={PgLogo}
              alt="PG"
              className="w-10 h-10 object-contain"
            />

            <span className="text-white text-lg font-bold tracking-wide">
              PG
            </span>
          </div>

          <div className="border border-cyan-500 rounded-lg px-3 py-1 text-cyan-300 font-semibold">
            All 7
          </div>
        </div>
      </div>

      {/* Featured */}
      <div className="grid grid-cols-2 gap-3 mt-4">

        {/* Left Big */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative h-[330px] rounded-xl overflow-hidden border border-cyan-500"
        >
          <img
            src={featured[0].image}
           
            className="w-full h-full object-cover"
          />

          
          <button
            onClick={() => toggleFavorite(featured[0].id)}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#071426]/90 border border-cyan-500 flex justify-center items-center"
          >
            {favorites.includes(featured[0].id) ? (
              <FaHeart className="text-white" />
            ) : (
              <FaRegHeart className="text-white" />
            )}
          </button>
        </motion.div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          {featured.slice(1).map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-[158px] rounded-xl overflow-hidden border border-cyan-500"
            >
              <img
                src={item.image}
               
                className="w-full h-full object-cover"
              />

             
              <button
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#071426]/90 border border-cyan-500 flex justify-center items-center"
              >
                {favorites.includes(item.id) ? (
                  <FaHeart className="text-white" />
                ) : (
                  <FaRegHeart className="text-white" />
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-4 gap-3 mt-4">
                {games.map((game) => (
          <motion.div
            key={game.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative h-[175px] rounded-xl overflow-hidden border border-cyan-500 bg-[#071426]"
          >
            <img
              src={game.image}
              
              className="w-full h-full object-cover"
            />

            
            {/* Heart */}
            <button
              onClick={() => toggleFavorite(game.id)}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#071426]/90 border border-cyan-500 flex items-center justify-center"
            >
              {favorites.includes(game.id) ? (
                <FaHeart className="text-white text-xs" />
              ) : (
                <FaRegHeart className="text-white/70 text-xs" />
              )}
            </button>

            {/* Bottom Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#071426] to-transparent"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}