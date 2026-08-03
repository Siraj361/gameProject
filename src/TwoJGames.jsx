import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import twoLogo from "./assets/2j.png";

import One from "./assets/twoj1.png";
import two from "./assets/twoj2.png";
import three from "./assets/twoj3.png";
import four from "./assets/twoj4.png";
import five from "./assets/twoj5.png";
import six from "./assets/twoj6.png";
import seven from "./assets/twoj7.png";
import eight from "./assets/twoj8.png";

export default function TwoJGames() {
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

  const games = [
    { id: 1, image: One },
    { id: 2, image: two },
    { id: 3, image: three },
    { id: 4, image: four },
    { id: 5, image: five },
    { id: 6, image: six },
    { id: 7, image: seven },
    { id: 8, image: eight },
  ];

  return (
    <div className="max-w-[540px] mx-auto px-3 py-4">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500 bg-gradient-to-b from-[#0d3b78] via-[#0a244d] to-[#071426]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f7ae0_0%,transparent_70%)] opacity-40"></div>

        <div className="relative flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src={twoLogo}
              alt="2J"
              className="w-10 h-10 object-contain"
            />

            <span className="text-cyan-300 text-xl font-bold tracking-wide">
              2J
            </span>
          </div>

          <div className="rounded-xl border border-cyan-500 bg-[#0b1f3d] px-4 py-2 text-cyan-300 font-semibold">
            All 8
          </div>
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
            className="group relative h-[175px] overflow-hidden rounded-2xl border border-cyan-500 bg-[#071426]"
          >
            {/* Game Image */}
            <img
              src={game.image}
              alt=""
              className="h-full w-full object-cover"
            />

           
            

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(game.id)}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400 bg-[#06182f]/80 backdrop-blur-sm transition hover:bg-[#0d3b78]"
            >
              {favorites.includes(game.id) ? (
                <FaHeart className="text-white text-sm" />
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