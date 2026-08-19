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
        <span className="text-[13px] font-black min-[390px]:text-[14px] sm:text-[16px]">
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
        <span className="text-[16px] font-black min-[390px]:text-[17px] sm:text-[19px]">
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
        <span className="text-[13px] font-black min-[390px]:text-[14px] sm:text-[16px]">
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
        <span className="text-[13px] font-black min-[390px]:text-[14px] sm:text-[16px]">
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
        <span className="text-[13px] font-black min-[390px]:text-[14px] sm:text-[16px]">
          TP
        </span>
      ),
      color: "text-cyan-300",
    },
  ];

  // ============================================================
  // SEARCH
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
              keyword
                .toLowerCase()
                .includes(query)
            )
          );
        })
      : [];

  // ============================================================
  // SEARCH HANDLERS
  // ============================================================

  const handleSearchResultClick = (categoryId) => {
    setActive(categoryId);
    setSearch("");
  };

  const handleCategoryClick = (categoryId) => {
    setActive(categoryId);
    setSearch("");
  };

  const clearSearch = () => {
    setSearch("");
  };

  // ============================================================
  // FAVORITES
  // ============================================================

  const renderFavorites = () => {
    return (
      <div className="w-full min-w-0 p-2 sm:p-3">

        {/* TITLE */}
        <div className="mb-3 overflow-hidden rounded-xl border border-cyan-500 bg-[#08152e] sm:mb-4">
          <div className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3">

            <div className="flex min-w-0 items-center gap-2">
              <FaHeart className="shrink-0 text-xl text-pink-400 sm:text-2xl" />

              <h2 className="truncate text-lg font-bold text-cyan-300 sm:text-xl">
                Favourite
              </h2>
            </div>

            <div className="shrink-0 rounded-lg border border-cyan-500 px-2.5 py-1 text-xs text-cyan-300 sm:px-3 sm:text-sm">
              All {favoriteGames.length}
            </div>
          </div>
        </div>

        {/* EMPTY */}
        {favoriteGames.length === 0 ? (
          <div className="rounded-xl border border-cyan-500/30 bg-[#08152e] px-4 py-14 text-center">

            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-400/20 bg-pink-500/10">
              <FaHeart className="text-3xl text-pink-400/50" />
            </div>

            <p className="text-sm font-bold text-white">
              No Favourite Games
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Tap ❤️ on any game to add it here
            </p>

          </div>
        ) : (

          /* FAVORITES - 3 PER ROW */
          <div className="grid w-full min-w-0 grid-cols-3 gap-1.5 min-[360px]:gap-2 sm:gap-2.5">

            {favoriteGames.map((game) => (
              <div
                key={game.id}
                className="relative min-w-0 overflow-hidden rounded-lg border border-cyan-500 bg-transparent"
              >

                <img
                  src={game.image}
                  alt={game.name || "Game"}
                  loading="lazy"
                  className="block h-auto w-full max-w-full object-contain"
                />

                <button
                  type="button"
                  onClick={() =>
                    toggleFavorite(game.id)
                  }
                  className="absolute right-1.5 top-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-500 bg-[#071426]/90 transition active:scale-90 sm:right-2 sm:top-2 sm:h-8 sm:w-8"
                >
                  {isFavorite(game.id) ? (
                    <FaHeart className="text-xs text-pink-400 sm:text-sm" />
                  ) : (
                    <FaRegHeart className="text-xs text-white/70 sm:text-sm" />
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
  // GAMES
  // ============================================================

  const renderGames = () => {
    switch (active) {
      case "hot":
        return <HotGames />;

      case "jili":
        return <JiliGames />;

      case "pg":
        return <PgGames />;

      case "2j":
        return <TwoJGames />;

      case "sport":
        return <SportSection />;

      case "jdb":
        return <JDBGames />;

      case "pp":
        return <PpGames />;

      case "tp":
        return <TpGames />;

      case "fav":
        return renderFavorites();

      default:
        return <HotGames />;
    }
  };

  // ============================================================
  // MAIN
  // ============================================================

  return (
    <div className="flex h-[100dvh] w-full justify-center overflow-hidden bg-[#020617]">

      {/* MAIN CONTAINER */}
      <div className="flex h-full w-full max-w-[540px] min-w-0 flex-col overflow-hidden border-x border-cyan-500/20 bg-gradient-to-b from-[#021224] via-[#072b59] to-[#010914]">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <header className="flex h-[64px] min-h-[64px] shrink-0 items-center gap-3 border-b border-cyan-500/30 bg-[#041729] px-3 sm:h-[70px] sm:min-h-[70px] sm:gap-4 sm:px-4">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/60 bg-[#06213e] text-lg text-cyan-300 transition active:scale-95 sm:h-11 sm:w-11 sm:text-xl"
          >
            <FaArrowLeft />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-white sm:text-xl">
              All Games
            </h1>

            <p className="truncate text-[9px] text-cyan-400/60 sm:text-[10px]">
              Find your favourite game
            </p>
          </div>

        </header>

        {/* ====================================================
            SEARCH
        ==================================================== */}

        <div className="relative shrink-0 border-b border-cyan-500/20 bg-[#041729] px-2.5 py-2.5 sm:px-3 sm:py-3">

          <div className="flex h-11 items-center gap-2.5 rounded-xl border border-cyan-500/50 bg-[#071426] px-3 transition focus-within:border-cyan-300 sm:h-12 sm:gap-3 sm:px-4">

            <FaSearch className="shrink-0 text-cyan-300" />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search JILI, PG, JDB, SPORT..."
              className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-gray-500 sm:text-sm"
            />

            {search && (
              <button
                type="button"
                onClick={clearSearch}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 active:scale-90"
              >
                <FaTimes className="text-xs" />
              </button>
            )}

          </div>

          {/* SEARCH DROPDOWN */}

          {search.trim() && (
            <div className="absolute left-2.5 right-2.5 top-[62px] z-50 overflow-hidden rounded-xl border border-cyan-400/30 bg-[#061a31] shadow-2xl sm:left-3 sm:right-3 sm:top-[68px]">

              {searchResults.length > 0 ? (
                <>

                  <div className="border-b border-cyan-500/15 px-3 py-2.5 sm:px-4 sm:py-3">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">
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
                      className="flex w-full items-center gap-3 border-b border-cyan-500/10 px-3 py-3 transition hover:bg-cyan-500/10 active:bg-cyan-500/20 sm:px-4"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-gradient-to-b from-[#0d4ea3] to-[#031a3b]">

                        <span
                          className={`text-xl ${category.color}`}
                        >
                          {category.icon}
                        </span>

                      </div>

                      <div className="min-w-0 flex-1 text-left">

                        <p className="text-sm font-bold text-white">
                          {category.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-gray-500">
                          Open {category.name} Games
                        </p>

                      </div>

                      <span className="shrink-0 text-sm text-cyan-400">
                        →
                      </span>

                    </button>
                  ))}

                </>
              ) : (

                <div className="px-5 py-6 text-center">

                  <FaSearch className="mx-auto mb-2 text-2xl text-cyan-500/30" />

                  <p className="text-xs font-bold text-white">
                    No Category Found
                  </p>

                  <p className="mt-1 text-[10px] text-gray-500">
                    Try JILI, PG, JDB, PP, TP, 2J or SPORT
                  </p>

                </div>
              )}

            </div>
          )}

        </div>

        {/* ====================================================
            CONTENT
        ==================================================== */}

        <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside className="w-[60px] min-w-[60px] shrink-0 overflow-y-auto overflow-x-hidden border-r border-cyan-500/20 bg-[#06172d] py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[360px]:w-[64px] min-[360px]:min-w-[64px] min-[390px]:w-[68px] min-[390px]:min-w-[68px] sm:w-[74px] sm:min-w-[74px] md:w-[78px] md:min-w-[78px]">

            {categories.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    handleCategoryClick(item.id)
                  }
                  className={`relative flex w-full flex-col items-center justify-center gap-1 px-1 py-2.5 transition-all sm:gap-1.5 sm:py-3 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/25 via-blue-600/20 to-transparent"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >

                  {/* ACTIVE LINE */}

                  {isActive && (
                    <span className="absolute bottom-2 right-0 top-2 w-[3px] rounded-l-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,.7)]" />
                  )}

                  {/* ICON */}

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border min-[390px]:h-10 min-[390px]:w-10 sm:h-10 sm:w-10 ${
                      isActive
                        ? "border-cyan-300/70 bg-gradient-to-b from-cyan-500/25 to-blue-700/30 shadow-[0_0_12px_rgba(34,211,238,.12)]"
                        : "border-cyan-500/30 bg-gradient-to-b from-[#0d4ea3] to-[#031a3b]"
                    }`}
                  >

                    <span
                      className={`flex items-center justify-center text-base sm:text-lg sm:font-bold ${item.color}`}
                    >
                      {item.icon}
                    </span>

                  </span>

                  {/* NAME */}

                  <span
                    className={`max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-[8px] font-bold leading-3 min-[390px]:text-[9px] sm:text-[9px] ${
                      isActive
                        ? "text-cyan-200"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </span>

                </button>
              );
            })}

          </aside>

          {/* ==================================================
              GAMES AREA
          ================================================== */}

          <main
            className={`
              min-h-0
              min-w-0
              flex-1
              overflow-x-hidden
              overflow-y-auto
              bg-[#020617]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              /* =============================================
                 ALL NORMAL CATEGORIES
                 3 CARDS PER ROW
                 JILI + PG EXCLUDED
              ============================================= */

              ${
                active !== "jili" &&
                active !== "pg" &&
                active !== "sport"
                  ? `
                    [&_.grid]:grid-cols-3
                    [&_.grid]:gap-1.5
                    min-[360px]:[&_.grid]:gap-2
                    min-[390px]:[&_.grid]:gap-2
                    sm:[&_.grid]:gap-2.5

                    [&_.grid]:w-full
                    [&_.grid]:max-w-full
                    [&_.grid]:min-w-0
                    [&_.grid]:p-1.5
                    min-[360px]:[&_.grid]:p-2
                    sm:[&_.grid]:p-2.5

                    [&_.grid>div]:min-w-0
                    [&_.grid>div]:w-full
                    [&_.grid>div]:max-w-full
                    [&_.grid>div]:overflow-hidden
                    [&_.grid>div]:bg-transparent
                    [&_.grid>div]:shadow-none

                    [&_.grid>div_img]:block
                    [&_.grid>div_img]:h-auto
                    [&_.grid>div_img]:w-full
                    [&_.grid>div_img]:max-w-full
                    [&_.grid>div_img]:object-contain
                  `
                  : ""
              }

  /* =============================================
   SPORT
   2 WIDE CARDS PER ROW
   NATURAL IMAGE HEIGHT
   NO EMPTY SPACE
============================================= */

${
  active === "sport"
    ? `
      /* GRID */
      [&_.grid]:grid-cols-2
      [&_.grid]:gap-1.5
      min-[360px]:[&_.grid]:gap-2
      min-[390px]:[&_.grid]:gap-2
      sm:[&_.grid]:gap-2.5

      [&_.grid]:w-full
      [&_.grid]:max-w-full
      [&_.grid]:min-w-0
      [&_.grid]:p-1.5
      min-[360px]:[&_.grid]:p-2
      sm:[&_.grid]:p-2.5

      /* CARD */
      [&_.grid>div]:col-span-1
      [&_.grid>div]:min-w-0
      [&_.grid>div]:w-full
      [&_.grid>div]:max-w-full

      /* REMOVE FIXED HEIGHT */
      [&_.grid>div]:!h-auto
      [&_.grid>div]:!min-h-0
      [&_.grid>div]:!max-h-none
      [&_.grid>div]:!aspect-auto

      [&_.grid>div]:overflow-hidden
      [&_.grid>div]:bg-transparent
      [&_.grid>div]:shadow-none

      /* IMAGE */
      [&_.grid>div_img]:!h-auto
      [&_.grid>div_img]:!min-h-0
      [&_.grid>div_img]:!max-h-none
      [&_.grid>div_img]:!aspect-auto

      [&_.grid>div_img]:block
      [&_.grid>div_img]:w-full
      [&_.grid>div_img]:max-w-full

      /* SHOW COMPLETE IMAGE */
      [&_.grid>div_img]:object-contain
      [&_.grid>div_img]:object-center

      [&_.grid>div_img]:bg-transparent
      [&_.grid>div_img]:shadow-none
      [&_.grid>div_img]:filter-none

      /* REMOVE EXTRA WRAPPER SPACE */
      [&_.grid>div>div]:!h-auto
      [&_.grid>div>div]:!min-h-0
      [&_.grid>div>div]:!aspect-auto
    `
    : ""
}
            `}
          >
            {renderGames()}
          </main>

        </div>
      </div>
    </div>
  );
}