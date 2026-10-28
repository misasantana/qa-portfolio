class LoginPage {
  // Mapeamento dos Seletores da tela de Login
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get('.oxd-alert-content-text'),
    dashboardHeader: () => cy.get('.oxd-topbar-header-breadcrumb')
  }

  // Ações que podem ser executadas na tela
  //visitar() {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');//
 // }
   visitar() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { failOnStatusCode: false });
  }

  preencherUsuario(username) {
    this.elements.usernameInput().type(username);
  }

  preencherSenha(password) {
    this.elements.passwordInput().type(password);
  }

  clicarLogin() {
    this.elements.loginButton().click();
  }

  // Método auxiliar para o fluxo completo
  realizarLogin(username, password) {
    this.preencherUsuario(username);
    this.preencherSenha(password);
    this.clicarLogin();
  }
}

export default new LoginPage();