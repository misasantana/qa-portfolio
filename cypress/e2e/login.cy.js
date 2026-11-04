import LoginPage from '../pages/LoginPage';

describe('Módulo de Autenticação - Login', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    LoginPage.visit();
  });

  it('CT-001 - Deve realizar login com sucesso', () => {
    LoginPage.preencherUsuario('Admin');
    LoginPage.preencherSenha('admin123');
    LoginPage.submeterLogin(); // Ajustado para o nome correto do método
    
    cy.url().should('include', '/dashboard');
  });

  it('CT-002 - Deve exibir mensagem de erro ao tentar login com senha inválida', () => {
    LoginPage.preencherUsuario('Admin');
    LoginPage.preencherSenha('senhaerrada');
    LoginPage.submeterLogin();
    
    // Valida a mensagem de credenciais inválidas direto no elemento de alerta
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('CT-006 - Deve exibir mensagem de erro ao tentar login com usuário em branco', () => {
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-group__message').should('contain', 'Required');
  });

  it('CT-007 - Deve exibir mensagem de erro ao tentar login com senha em branco', () => {
    LoginPage.preencherUsuario('Admin');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-group__message').should('contain', 'Required');
  });

  it('CT-008 - Deve realizar logout com sucesso', () => {
    LoginPage.preencherUsuario('Admin');
    LoginPage.preencherSenha('admin123');
    LoginPage.submeterLogin();

    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('a', 'Logout').click();

    cy.url().should('include', '/auth/login');
  });
});