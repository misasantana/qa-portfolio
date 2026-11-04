const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes - OrangeHRM',
    embeddedScreenshots: false,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    screenshotOnRunFailure: false, // Desativa o print automático em falhas
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});