import 'cypress-mochawesome-reporter/register';

// Ignora exceções não tratadas vindas do código da aplicação (ex: erros internos do OrangeHRM)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'