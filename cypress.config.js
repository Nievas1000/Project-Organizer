/* eslint-disable */
import { defineConfig } from "cypress";

export default defineConfig({
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
