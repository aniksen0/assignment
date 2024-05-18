const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.nopcommerce.com/",
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: true,
    reporter: 'mochawesome',
    "reporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": false,
      "html": false,
      "json": true
   },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
