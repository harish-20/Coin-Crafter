import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
    browser: {
      enabled: true,
      instances: [
        {
          browser: "chrome",
        },
      ],
    },
  },
  plugins: [react(), mkcert()],
});
