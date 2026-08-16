
import { useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaFire,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

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
import PG from "./assets/pg2.png";

import { useFavorites } from "./useFavorites";

export default function HotGames() {
  /* ==================================================
     GAMES
  ================================================== */

  const games = [
    {
      id: "hot-1",
      name: "Avator",
      image: Avator,
    },

    {
      id: "hot-2",
      name: "Aztex Game",
      image: AztexGame,
    },

    {
      id: "hot-3",
      name: "Avator",
      image: AvatorImage,
    },

    {
      id: "hot-4",
      name: "Fortune Gems",
      image: FortuneGems,
    },

    {
      id: "hot-5",
      name: "Jili 777",
      image: Jili777,
    },

    {
      id: "hot-6",
      name: "Labubu Lucky Box",
      image: LabubuLuckyBox,
    },

    {
      id: "hot-7",
      name: "Lucky Neko",
      image: Luckyneko,
    },

    {
      id: "hot-8",
      name: "Lucky Piggy",
      image: LuckyPiggy,
    },

    {
      id: "hot-9",
      name: "Show Down",
      image: ShowDown,
    },

    {
      id: "hot-10",
      name: "Anubis",
      image: Anubis,
    },

    {
      id: "hot-11",
      name: "Money",
      image: Money,
    },

    {
      id: "hot-12",
      name: "PG",
      image: PG,
    },
  ];

  /* ==================================================
     FAVORITES
  ================================================== */

  const {
    favorites,
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  /* ==================================================
     UPDATE ALLGAMES WHEN FAVORITE CHANGES
  ================================================== */

  useEffect(() => {
    window.dispatchEvent(
      new Event("favoritesUpdated")
    );
  }, [favorites]);

  /* ==================================================
     FADE ANIMATION
  ================================================== */

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

  /* ==================================================
     RETURN
  ================================================== */

  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto
        p-2
        sm:p-3
      "
    >
      {/* ==================================================
          HEADER
      ================================================== */}

      <div
        className="
          rounded-xl
          border
          border-cyan-500
          bg-[#08152e]
          overflow-hidden
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            px-3
            py-2.5
            sm:px-4
            sm:py-3
          "
        >
          {/* TITLE */}

          <div
            className="
              flex
              items-center
              gap-2
              min-w-0
            "
          >
            <FaFire
              className="
                text-orange-500
                text-2xl
                sm:text-3xl
                shrink-0
              "
            />

            <h2
              className="
                text-cyan-300
                text-xl
                sm:text-2xl
                font-bold
                whitespace-nowrap
              "
            >
              Hots
            </h2>
          </div>

          {/* COUNT */}

          <div
            className="
              px-2.5
              sm:px-3
              py-1
              rounded-lg
              border
              border-cyan-500
              text-cyan-300
              text-xs
              sm:text-sm
              whitespace-nowrap
            "
          >
            All {games.length}
          </div>
        </div>
      </div>

      {/* ==================================================
          GAMES
      ================================================== */}

      <div
        className="
          grid
          grid-cols-2
          min-[390px]:grid-cols-3
          sm:grid-cols-4
          gap-2
          sm:gap-3
          mt-3
          sm:mt-4
        "
      >
        {games.map((game) => {
          const favorite = isFavorite(game.id);

          return (
            <motion.div
              key={game.id}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeIn}
              className="
                relative
                w-full
                aspect-[3/4]
                rounded-xl
                overflow-hidden
                border
                border-cyan-500
                bg-[#08152e]
              "
            >
              {/* GAME IMAGE */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-[#08152e]
                "
              >
                <img
                  src={game.image}
                  alt={game.name}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-contain
                    block
                  "
                />
              </div>

              {/* ==================================================
                  FAVORITE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  toggleFavorite(game.id)
                }
                aria-label={
                  favorite
                    ? `Remove ${game.name} from favorites`
                    : `Add ${game.name} to favorites`
                }
                className="
                  absolute
                  top-1.5
                  right-1.5
                  sm:top-2
                  sm:right-2
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  rounded-full
                  bg-[#071426]/90
                  border
                  border-cyan-500
                  flex
                  items-center
                  justify-center
                  active:scale-90
                  transition-all
                  z-10
                "
              >
                {favorite ? (
                  <FaHeart
                    className="
                      text-pink-400
                      text-xs
                      sm:text-sm
                    "
                  />
                ) : (
                  <FaRegHeart
                    className="
                      text-white/70
                      text-xs
                      sm:text-sm
                    "
                  />
                )}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
