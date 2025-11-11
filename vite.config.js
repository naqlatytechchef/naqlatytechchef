/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages / Custom Domain Configuration
// Base should be '/' when using a custom domain (e.g., https://naqltkom.com)
// Optionally override via environment variable VITE_BASE_PATH
const basePath =
  typeof process !== "undefined" && process.env.VITE_BASE_PATH
    ? process.env.VITE_BASE_PATH
    : "/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath,
  build: {
    outDir: "dist",
  },
});
