import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from GitHub Pages as a project site (no custom domain configured
// yet), so every asset/route has to be reachable under /Sofia-Portfolio/.
// If a custom domain is added later, drop this back to "/" and add a
// public/CNAME file instead.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/Sofia-Portfolio/",
});
