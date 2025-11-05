import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages Configuration
// For regular repos: set to '/your-repo-name/'
// For root domain (username.github.io): use '/'
// You can also set via environment variable: VITE_BASE_PATH=/repo-name/ npm run build
const REPO_NAME = "/naqlatytechchef/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: REPO_NAME,
  build: {
    outDir: "dist",
  },
});
