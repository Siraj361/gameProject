import { useState } from "react";
import { motion } from "framer-motion";
import { FaFire, FaHeart, FaRegHeart } from "react-icons/fa";

import AvatorImage from "./assets/AvatorImage.jpg.jpeg";
import AztexGame from "./assets/AztexGame.png";
import FortuneGems from "./assets/FortuneGems2.jpg.jpeg";
import Jili777 from "./assets/Jili777.jpg.jpeg";
import LabubuLuckyBox from "./assets/LabubuLuckyBox.jpg.jpeg";
import Luckyneko from "./assets/Lucky Neko.png";
import LuckyPiggy from "./assets/LuckyPiggy.png";
import ShowDown from "./assets/ShowDown.png";
import Avator from "./assets/cc3986a9795745af9be51099db7fe0ff.png";
import Anubis from "./assets/16f4b7f67f4ed4708a54cc643ba33d34.png";
import Money from "./assets/48d6cf22dbbce1cf83a63812e6ab3286.jpg";

export default function HotGames() {
  const games = [
    { image: Avator },
    { image: AztexGame },
    { image: AvatorImage },
    { image: FortuneGems },
    { image: Jili777 },
    { image: LabubuLuckyBox },
    { image: Luckyneko },
    { image: LuckyPiggy },
    { image: ShowDown },
    { image: FortuneGems },
    { image: Anubis },
    { image: Money },
  ];

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (index) => {
    if (favorites.includes(index)) {
      setFavorites(favorites.filter((item) => item !== index));
    } else {
      setFavorites([...favorites, index]);
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

  return (
    <div className="px-3 py-4">

      {/* Header */}
      <div className="rounded-xl border border-cyan-500 bg-[#08152e]">
        <div className="flex items-center justify-between px-4 py-3">

          <div className="flex items-center gap-2">
            <FaFire className="text-orange-500 text-3xl" />
            <h2 className="text-cyan-300 text-2xl font-bold">
              Hots
            </h2>
          </div>

          <div className="px-3 py-1 rounded-lg border border-cyan-500 text-cyan-300 text-sm">
            All 12
          </div>

        </div>
      </div>

      {/* Games */}
      <div className="grid grid-cols-4 gap-3 mt-4">
                {games.map((game, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-xl overflow-hidden border border-cyan-500 bg-[#08152e] h-[180px]"
          >
            <div className="relative h-full">
              <img
                src={game.image}
                alt="Game"
                className="w-full h-full object-cover"
              />

              {/* Favourite */}
              <button
                onClick={() => toggleFavorite(index)}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#071426]/80 border border-cyan-500 flex items-center justify-center"
              >
                {favorites.includes(index) ? (
                  <FaHeart className="text-white text-sm" />
                ) : (
                  <FaRegHeart className="text-white/70 text-sm" />
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}