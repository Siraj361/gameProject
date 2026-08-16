import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/gameProject/",

  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "GameProject",
        short_name: "GameProject",
        description: "GameProject",
        theme_color: "#00396d",
        background_color: "#020617",
        display: "standalone",
        start_url: "/gameProject/",
        scope: "/gameProject/",
        icons: [
          {
            src: "/gameProject/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/gameProject/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});