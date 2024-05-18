const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
