const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 15000,
    screenshotOnRunFailure: false, // <-- Desativa screenshots automáticas para evitar travamento
    video: false,                  // <-- Garante que não consuma recursos gerando vídeo
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});