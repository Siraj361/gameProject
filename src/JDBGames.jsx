import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import JdbLogo from "./assets/gg_jdb.png";

import Game1 from "./assets/jdp1.png";
import Game2 from "./assets/jdp2.png";
import Game3 from "./assets/jdp3.png";
import Game4 from "./assets/jdp4.png";
import Game5 from "./assets/jdp5.png";
import Game6 from "./assets/jdp6.png";
import Game7 from "./assets/jdp7.png";
import Game8 from "./assets/jdp8.png";

export default function JDBGames() {
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
    { id: 1, image: Game1 },
    { id: 2, image: Game2 },
    { id: 3, image: Game3 },
    { id: 4, image: Game4 },
    { id: 5, image: Game5 },
    { id: 6, image: Game6 },
    { id: 7, image: Game7 },
    { id: 8, image: Game8 },
  ];

  return (
    <div className="max-w-[540px] mx-auto px-3 py-4">

      {/* Header */}

      <div className="relative overflow-hidden rounded-2xl border border-cyan-500 bg-gradient-to-r from-[#021224] via-[#0b4ea2] to-[#04111f]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#38bdf8_0%,transparent_70%)] opacity-20"></div>

        <div className="relative flex items-center justify-between px-4 py-4">

          {/* Left */}

          <div className="flex items-center gap-3">

            <img
              src={JdbLogo}
              alt="JDB"
              className="h-12 w-auto object-contain"
            />

            <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-2xl font-bold tracking-wide text-transparent">
              JDB
            </span>

          </div>

          {/* Right */}

          <div className="flex gap-2">

            <button className="rounded-xl border border-cyan-500 bg-[#082449] px-4 py-2 font-semibold text-cyan-200 transition hover:bg-[#0d4ea3]">
              All 8
            </button>

           
          </div>

        </div>

      </div>

      {/* Games */}

      <div className="grid grid-cols-4 gap-3 mt-4">
                {games.map((game) => (
          <motion.div
            key={game.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative h-[175px] overflow-hidden rounded-2xl border border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,.12)]"
          >
            {/* Game Image */}
            <img
              src={game.image}
              alt="Game"
              className="h-full w-full object-cover "
            />

           
            {/* Favorite */}
            <button
              onClick={() => toggleFavorite(game.id)}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400 bg-[#06182f]/80 backdrop-blur-sm transition-all duration-300 hover:bg-[#0d4ea3] hover:scale-110"
            >
              {favorites.includes(game.id) ? (
                <FaHeart className="text-red-500 text-sm" />
              ) : (
                <FaRegHeart className="text-white text-sm" />
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}