import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), commonjs()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/') },
    ],
  }
});
