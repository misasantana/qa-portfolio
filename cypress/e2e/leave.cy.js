import loginPage from '../pages/LoginPage';
import leavePage from '../pages/LeavePage';

describe('Funcionalidade de Férias e Licenças (Leave)', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);

    // 1. Visita a página de login usando a baseUrl
    loginPage.visit();
    
    // 2. Faz o login com as credenciais padrão
    loginPage.preencherUsuario('Admin');
    loginPage.preencherSenha('admin123');
    loginPage.submeterLogin();

    // 3. Garante que entrou no sistema e navega diretamente para a página de leave
    cy.get('.oxd-topbar-header-title', { timeout: 20000 }).should('be.visible');
    cy.visit('/web/index.php/leave/viewLeaveList');
  });

  it('Deve aplicar para uma solicitação de licença com sucesso', () => {
    leavePage.visitApplyPage();

    leavePage.applyForLeave('2026-11-01', '2026-11-05', 'Solicitação de férias de teste');

    // Validação final: garante que não há alertas de campos obrigatórios
    cy.get('.oxd-input-field-error-message', { timeout: 10000 }).should('not.exist');
  });
});