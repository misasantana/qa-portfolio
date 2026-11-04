import loginPage from '../pages/LoginPage';
import leavePage from '../pages/LeavePage';

describe('Funcionalidade de Férias e Licenças (Leave)', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);

    loginPage.visit();
    loginPage.preencherUsuario('Admin');
    loginPage.preencherSenha('admin123');
    loginPage.submeterLogin();

    cy.get('.oxd-topbar-header-title', { timeout: 20000 }).should('be.visible');
  });

  it('Deve aplicar para uma solicitação de licença com sucesso', () => {
    leavePage.visitApplyPage();

    leavePage.applyForLeave('2026-11-01', '2026-11-05', 'Solicitação de férias de teste');

    // Validação final: garante que não há mais alertas de campos obrigatórios não preenchidos
    cy.get('.oxd-input-field-error-message', { timeout: 10000 }).should('not.exist');
  });
});