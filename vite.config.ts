import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// with images assets in the public folder
export default defineConfig({
  plugins: [react()],
});
