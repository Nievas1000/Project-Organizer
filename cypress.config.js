/* eslint-disable */
import { defineConfig } from "cypress";
import { config } from "dotenv";
config();

export default defineConfig({
  env: {
    apiBaseUrl: process.env.VITE_API_BASE_URL,
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
      });
    },
  },

  defaultCommandTimeout: 15000,

  video: false,
});
