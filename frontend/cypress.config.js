import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://localhost:5173",
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
  },
});
