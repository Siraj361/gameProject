import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaFutbol } from "react-icons/fa";

import Sport1 from "./assets/sportOne.png";
import Sport2 from "./assets/sportTwo.png";

export default function SportSection() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

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

  const games = [
    {
      id: 1,
      image: Sport1,
    },
    {
      id: 2,
      image: Sport2,
    },
  ];

  return (
    <div className="max-w-[540px] mx-auto px-3 py-4">

      {/* Header */}

      <div className="relative overflow-hidden rounded-2xl border border-cyan-500 bg-gradient-to-r from-[#082d63] via-[#0d4ea3] to-[#061c42]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22d3ee_0%,transparent_70%)] opacity-20"></div>

        <div className="relative flex items-center justify-between px-4 py-4">

          {/* Left */}

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400 bg-[#0b2447]">

              <FaFutbol className="text-2xl text-cyan-300" />

            </div>

            <span className="text-2xl font-bold tracking-wide text-cyan-200">
              SPORT
            </span>

          </div>

          {/* Right */}

          <div className="flex items-center gap-2">

            <button className="rounded-xl border border-cyan-500 bg-[#082449] px-4 py-2 font-semibold text-cyan-200 transition hover:bg-[#0d4ea3]">
              All 2
            </button>

          
          </div>

        </div>

      </div>

      {/* Games */}

      <div className="mt-4 grid grid-cols-2 gap-3">
                {games.map((game) => (
          <motion.div
            key={game.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative h-[160px] overflow-hidden rounded-2xl border border-cyan-500"
          >
            {/* Game Image */}
            <img
              src={game.image}
              alt="Sport"
              className="h-full w-full object-cover "
            />

            {/* Favorite */}
            <button
              onClick={() => toggleFavorite(game.id)}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 bg-[#06182f]/80 backdrop-blur-sm transition-all duration-300 hover:bg-[#0d4ea3] hover:scale-110"
            >
              {favorites.includes(game.id) ? (
                <FaHeart className="text-red-500 text-lg" />
              ) : (
                <FaRegHeart className="text-white text-lg" />
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}