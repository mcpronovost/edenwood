import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    base: isDev ? "/" : "/static/",
    plugins: [react()],
    server: {
      port: 5173,
      host: true,
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
