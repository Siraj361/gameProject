import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import jilly1 from "./assets/jilly1.jpg";
import jilly2 from "./assets/jilly2.png";
import jilly3 from "./assets/jilly3.png";
import jilly4 from "./assets/jilly4.png";
import jilly5 from "./assets/jilly5.png";
import jilly6 from "./assets/jilly6.png";
import jilly7 from "./assets/Jili777.jpg.jpeg";

export default function JiliGames() {
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
      y: 35,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const featured = [
    {
      id: 1,
      
      image: jilly1,
      large: true,
    },
    {
      id: 2,
      
      image: jilly2,
    },
    {
      id: 3,
      
      image: jilly3,
    },
  ];

  const games = [
    { id: 4,  image: jilly4 },
    { id: 5,  image: jilly5 },
    { id: 6,  image: jilly6 },
    { id: 7,  image: jilly7 },
  ];

  return (
    <div className="card-animation">
      <div className="px-3 py-4">

        {/* Header */}

        <div className="border border-cyan-500 rounded-xl bg-[#071426]">
          <div className="flex justify-between items-center px-4 py-3">

            <div className="flex items-center gap-3">

              <div className="flex items-center gap-3">
                <h1 className="jili-logo">JILI</h1>
                <span className="jili-small">JILI</span>
              </div>

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
              alt={featured[0]}
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

              {/* Provider */}
              
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

              {/* Blue Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#071426] to-transparent"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}