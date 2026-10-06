import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages without a domain: norin-web.github.io/his-remote/.
  // With a custom domain switch to "/" and add public/CNAME in the same commit,
  // otherwise the page requests /his-remote/assets and renders blank.
  base: "/his-remote/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
