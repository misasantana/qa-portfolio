import LoginPage from '../pages/LoginPage';
import PimPage from '../pages/PimPage';

describe('Módulo PIM - Gestão de Funcionários', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);

    LoginPage.visit();
    LoginPage.preencherUsuario('Admin');
    LoginPage.preencherSenha('admin123');
    LoginPage.submeterLogin();
    
    cy.get('.oxd-topbar-header-title', { timeout: 20000 }).should('be.visible');
  });

  it('Deve pesquisar um funcionário existente com sucesso', () => {
    PimPage.navegarParaPim();
    PimPage.clicarListaFuncionarios();

    // Pesquisa pelo funcionário
    PimPage.pesquisarFuncionario('QA Automation');

    // Valida se a tabela carregou resultados (procurando pelo corpo da tabela ou linhas)
    cy.get('.oxd-table-body', { timeout: 10000 }).should('be.visible');
  });
});