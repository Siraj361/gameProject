import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaFire,
  FaHeart,
  FaSearch,
  FaFutbol,
  FaGem,
  FaTimes,
  FaRegHeart,
} from "react-icons/fa";

import HotGames from "./HotGames";
import JiliGames from "./JiliGames";
import PgGames from "./PgGames";
import JDBGames from "./JDBGames";
import TwoJGames from "./TwoJGames";
import SportSection from "./SportSection";
import PpGames from "./PpGames";
import TpGames from "./TpGames";

import { useFavorites } from "./useFavorites";
import { gamesData } from "./gamesData";

export default function AllGames() {
  const navigate = useNavigate();

  const [active, setActive] = useState("hot");
  const [search, setSearch] = useState("");

  // ============================================================
  // FAVORITES
  // ============================================================

  const {
    favorites,
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favoriteGames = gamesData.filter((game) =>
    favorites.includes(game.id)
  );

  // ============================================================
  // CATEGORIES
  // ============================================================

  const categories = [
    {
      id: "hot",
      name: "HOTS",
      keywords: ["hot", "hots", "hot games"],
      icon: <FaFire />,
      color: "text-orange-400",
    },
    {
      id: "fav",
      name: "FAV",
      keywords: [
        "fav",
        "favorite",
        "favourite",
        "favorites",
      ],
      icon: <FaHeart />,
      color: "text-pink-400",
    },
    {
      id: "jili",
      name: "JILI",
      keywords: ["jili", "jili games"],
      icon: (
        <span className="text-[15px] sm:text-[17px] font-black">
          JILI
        </span>
      ),
      color: "text-cyan-300",
    },
    {
      id: "pg",
      name: "PG",
      keywords: ["pg", "pg games"],
      icon: (
        <span className="text-[18px] sm:text-[20px] font-black">
          PG
        </span>
      ),
      color: "text-blue-200",
    },
    {
      id: "2j",
      name: "2J",
      keywords: ["2j", "twoj", "2j games"],
      icon: <FaGem />,
      color: "text-cyan-300",
    },
    {
      id: "sport",
      name: "SPORT",
      keywords: [
        "sport",
        "sports",
        "football",
        "soccer",
      ],
      icon: <FaFutbol />,
      color: "text-green-400",
    },
    {
      id: "jdb",
      name: "JDB",
      keywords: ["jdb", "jdb games"],
      icon: (
        <span className="text-[15px] sm:text-[17px] font-black">
          JDB
        </span>
      ),
      color: "text-yellow-300",
    },
    {
      id: "pp",
      name: "PP",
      keywords: [
        "pp",
        "pragmatic",
        "pragmatic play",
      ],
      icon: (
        <span className="text-[15px] sm:text-[17px] font-black">
          PP
        </span>
      ),
      color: "text-purple-300",
    },
    {
      id: "tp",
      name: "TP",
      keywords: ["tp", "tp games"],
      icon: (
        <span className="text-[15px] sm:text-[17px] font-black">
          TP
        </span>
      ),
      color: "text-cyan-300",
    },
  ];

  // ============================================================
  // SEARCH RESULTS
  // ============================================================

  const searchResults =
    search.trim().length > 0
      ? categories.filter((category) => {
          const query = search.toLowerCase().trim();

          return (
            category.name
              .toLowerCase()
              .includes(query) ||
            category.keywords.some((keyword) =>
              keyword.toLowerCase().includes(query)
            )
          );
        })
      : [];

  // ============================================================
  // SEARCH RESULT CLICK
  // ============================================================

  const handleSearchResultClick = (categoryId) => {
    setActive(categoryId);
    setSearch("");
  };

  // ============================================================
  // CATEGORY CLICK
  // ============================================================

  const handleCategoryClick = (categoryId) => {
    setActive(categoryId);
    setSearch("");
  };

  // ============================================================
  // CLEAR SEARCH
  // ============================================================

  const clearSearch = () => {
    setSearch("");
  };

  // ============================================================
  // FAVORITE SECTION
  // ============================================================

  const renderFavorites = () => {
    return (
      <div className="w-full p-2 sm:p-3">
        {/* HEADER */}

        <div
          className="
            rounded-xl
            border
            border-cyan-500
            bg-[#08152e]
            mb-3
            sm:mb-4
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
            <div className="flex items-center gap-2">
              <FaHeart
                className="
                  text-pink-400
                  text-xl
                  sm:text-2xl
                "
              />

              <h2
                className="
                  text-cyan-300
                  text-lg
                  sm:text-xl
                  font-bold
                "
              >
                Favourite
              </h2>
            </div>

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
              "
            >
              All {favoriteGames.length}
            </div>
          </div>
        </div>

        {/* NO FAVOURITES */}

        {favoriteGames.length === 0 ? (
          <div
            className="
              rounded-xl
              border
              border-cyan-500/30
              bg-[#08152e]
              py-14
              px-4
              text-center
            "
          >
            <div
              className="
                w-16
                h-16
                mx-auto
                rounded-2xl
                border
                border-pink-400/20
                bg-pink-500/10
                flex
                items-center
                justify-center
                mb-3
              "
            >
              <FaHeart className="text-3xl text-pink-400/50" />
            </div>

            <p className="text-white font-bold text-sm">
              No Favourite Games
            </p>

            <p className="text-gray-500 text-xs mt-1">
              Tap ❤️ on any game to add it here
            </p>
          </div>
        ) : (
          /* FAVORITE GRID */

          <div
            className="
              grid
              grid-cols-3
              gap-2
              sm:gap-3
              w-full
            "
          >
            {favoriteGames.map((game) => (
              <div
                key={game.id}
                className="
                  relative
                  w-full
                  min-w-0
                  aspect-[3/4]
                  rounded-xl
                  overflow-hidden
                  border
                  border-cyan-500
                  bg-[#08152e]
                "
              >
                {/* IMAGE */}

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
                    alt={game.name || "Game"}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-contain
                      block
                    "
                  />
                </div>

                {/* FAVORITE BUTTON */}

                <button
                  type="button"
                  onClick={() =>
                    toggleFavorite(game.id)
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
                    transition
                    z-10
                  "
                >
                  {isFavorite(game.id) ? (
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
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // ============================================================
  // RENDER NORMAL CATEGORY
  // ============================================================

  const renderGames = () => {
    if (active === "hot") {
      return <HotGames />;
    }

    if (active === "jili") {
      return <JiliGames />;
    }

    if (active === "pg") {
      return <PgGames />;
    }

    if (active === "2j") {
      return <TwoJGames />;
    }

    if (active === "sport") {
      return <SportSection />;
    }

    if (active === "jdb") {
      return <JDBGames />;
    }

    if (active === "pp") {
      return <PpGames />;
    }

    if (active === "tp") {
      return <TpGames />;
    }

    if (active === "fav") {
      return renderFavorites();
    }

    return <HotGames />;
  };

  // ============================================================
  // MAIN
  // ============================================================

  return (
    <div className="w-full h-[100dvh] bg-[#020617] flex justify-center overflow-hidden">

      {/* ======================================================
          FORCE ALL GAMES CHILD GRIDS TO 3 COLUMNS
      ====================================================== */}

      <style>
        {`
          .all-games-content .grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 8px !important;
            width: 100% !important;
          }

          .all-games-content .grid > * {
            min-width: 0 !important;
            width: 100% !important;
          }

          .all-games-content img {
            max-width: 100%;
          }

          @media (min-width: 640px) {
            .all-games-content .grid {
              gap: 12px !important;
            }
          }
        `}
      </style>

      {/* ======================================================
          540PX CONTAINER
      ====================================================== */}

      <div
        className="
          w-full
          max-w-[540px]
          h-full
          overflow-hidden
          flex
          flex-col
          bg-gradient-to-b
          from-[#021224]
          via-[#072b59]
          to-[#010914]
          border-x
          border-cyan-500/20
        "
      >

        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            h-[64px]
            sm:h-[70px]
            shrink-0
            flex
            items-center
            gap-3
            sm:gap-4
            px-3
            sm:px-4
            border-b
            border-cyan-500/30
            bg-[#041729]
          "
        >
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              w-10
              h-10
              shrink-0
              rounded-xl
              border
              border-cyan-500/60
              bg-[#06213e]
              flex
              items-center
              justify-center
              text-cyan-300
              text-lg
              sm:text-xl
              active:scale-95
              transition
            "
          >
            <FaArrowLeft />
          </button>

          <div className="min-w-0">
            <h1
              className="
                text-white
                text-lg
                sm:text-xl
                font-bold
              "
            >
              All Games
            </h1>

            <p
              className="
                text-cyan-400/60
                text-[9px]
                sm:text-[10px]
              "
            >
              Find your favourite game
            </p>
          </div>
        </div>

        {/* ==================================================
            SEARCH
        ================================================== */}

        <div
          className="
            relative
            shrink-0
            px-2.5
            sm:px-3
            py-2.5
            sm:py-3
            border-b
            border-cyan-500/20
            bg-[#041729]
          "
        >
          <div
            className="
              h-11
              sm:h-12
              rounded-xl
              border
              border-cyan-500/50
              bg-[#071426]
              flex
              items-center
              px-3
              sm:px-4
              gap-2.5
              sm:gap-3
              focus-within:border-cyan-300
              transition
            "
          >
            <FaSearch className="text-cyan-300 shrink-0" />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search JILI, PG, JDB, SPORT..."
              className="
                flex-1
                min-w-0
                bg-transparent
                outline-none
                text-white
                text-xs
                sm:text-sm
                placeholder:text-gray-500
              "
            />

            {search && (
              <button
                type="button"
                onClick={clearSearch}
                className="
                  w-7
                  h-7
                  shrink-0
                  rounded-full
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                  active:scale-90
                "
              >
                <FaTimes className="text-xs" />
              </button>
            )}
          </div>

          {/* SEARCH RESULT */}

          {search.trim() && (
            <div
              className="
                absolute
                left-2.5
                right-2.5
                sm:left-3
                sm:right-3
                top-[62px]
                sm:top-[68px]
                z-50
                rounded-xl
                border
                border-cyan-400/30
                bg-[#061a31]
                shadow-2xl
                overflow-hidden
              "
            >
              {searchResults.length > 0 ? (
                <div>
                  <div
                    className="
                      px-3
                      sm:px-4
                      py-2.5
                      border-b
                      border-cyan-500/15
                    "
                  >
                    <p
                      className="
                        text-gray-400
                        text-[10px]
                        uppercase
                        tracking-wider
                      "
                    >
                      Categories
                    </p>
                  </div>

                  {searchResults.map((category) => (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() =>
                        handleSearchResultClick(
                          category.id
                        )
                      }
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-3
                        sm:px-4
                        py-3
                        border-b
                        border-cyan-500/10
                        hover:bg-cyan-500/10
                        active:bg-cyan-500/20
                        transition
                      "
                    >
                      <div
                        className="
                          w-10
                          h-10
                          shrink-0
                          rounded-lg
                          border
                          border-cyan-400/30
                          bg-gradient-to-b
                          from-[#0d4ea3]
                          to-[#031a3b]
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <span
                          className={`
                            text-xl
                            ${category.color}
                          `}
                        >
                          {category.icon}
                        </span>
                      </div>

                      <div className="flex-1 text-left min-w-0">
                        <p className="text-white text-sm font-bold">
                          {category.name}
                        </p>

                        <p className="text-gray-500 text-[10px] mt-0.5">
                          Open {category.name} Games
                        </p>
                      </div>

                      <span className="text-cyan-400 text-sm">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-5 py-6 text-center">
                  <FaSearch
                    className="
                      mx-auto
                      text-2xl
                      text-cyan-500/30
                      mb-2
                    "
                  />

                  <p className="text-white text-xs font-bold">
                    No Category Found
                  </p>

                  <p className="text-gray-500 text-[10px] mt-1">
                    Try JILI, PG, JDB, PP, TP, 2J or SPORT
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div
          className="
            flex
            flex-1
            min-h-0
            overflow-hidden
          "
        >

          {/* =================================================
              LEFT CATEGORY
          ================================================= */}

          <div
            className="
              w-[78px]
              min-[390px]:w-[88px]
              sm:w-[100px]
              shrink-0
              border-r
              border-cyan-500/20
              bg-[#06172d]
              overflow-y-auto
              hide-scrollbar
              py-1.5
              sm:py-2
            "
          >
            {categories.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    handleCategoryClick(item.id)
                  }
                  className={`
                    relative
                    w-full
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-1
                    sm:gap-1.5
                    py-2.5
                    sm:py-3
                    transition-all
                    ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/25 via-blue-600/20 to-transparent"
                        : "opacity-70 hover:opacity-100"
                    }
                  `}
                >

                  {/* ACTIVE LINE */}

                  {isActive && (
                    <div
                      className="
                        absolute
                        right-0
                        top-2
                        bottom-2
                        w-[3px]
                        rounded-l-full
                        bg-cyan-300
                      "
                    />
                  )}

                  {/* ICON */}

                  <div
                    className={`
                      w-10
                      h-10
                      sm:w-12
                      sm:h-12
                      rounded-xl
                      border
                      flex
                      items-center
                      justify-center
                      ${
                        isActive
                          ? "border-cyan-300/70 bg-gradient-to-b from-cyan-500/25 to-blue-700/30"
                          : "border-cyan-500/30 bg-gradient-to-b from-[#0d4ea3] to-[#031a3b]"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-xl
                        sm:text-2xl
                        ${item.color}
                      `}
                    >
                      {item.icon}
                    </span>
                  </div>

                  {/* NAME */}

                  <span
                    className={`
                      text-[9px]
                      sm:text-[10px]
                      font-bold
                      ${
                        isActive
                          ? "text-cyan-200"
                          : "text-white"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================
              RIGHT GAMES
          ================================================= */}

          <div
            className="
              all-games-content
              flex-1
              min-w-0
              min-h-0
              overflow-y-auto
              overflow-x-hidden
              hide-scrollbar
              bg-[#020617]
            "
          >
            {renderGames()}
          </div>

        </div>
      </div>
    </div>
  );
}
