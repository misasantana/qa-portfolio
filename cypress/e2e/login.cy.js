import loginPage from '../pages/LoginPage';

describe('Módulo de Autenticação - OrangeHRM (com POM)', () => {

  beforeEach(() => {
    loginPage.visitar();
  });

  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    loginPage.realizarLogin('Admin', 'admin123');

    cy.url().should('include', '/dashboard');
    loginPage.elements.dashboardHeader().should('contain', 'Dashboard');
  });

  it('Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    loginPage.realizarLogin('AdminInvalido', 'senhaErrada123');

    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('have.text', 'Invalid credentials');
  });

});