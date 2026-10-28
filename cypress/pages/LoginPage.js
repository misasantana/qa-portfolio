class LoginPage {
  // Mapeamento dos Seletores da tela de Login
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get('.oxd-alert-content-text'),
    requiredErrorMsg: () => cy.get('.oxd-input-field-error-message'),
    forgotPasswordLink: () => cy.get('.orangehrm-login-forgot'),
    userDropdown: () => cy.get('.oxd-userdropdown-tab'),
    logoutButton: () => cy.contains('a', 'Logout')
  }

  // Ações da tela
  visitar() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      failOnStatusCode: false
    })
  }

  preencherUsuario(username) {
    if (username) this.elements.usernameInput().type(username)
  }

  preencherSenha(password) {
    if (password) this.elements.passwordInput().type(password)
  }

  submeterLogin() {
    this.elements.loginButton().click()
  }

  clicarEsqueceuSenha() {
    this.elements.forgotPasswordLink().click()
  }

  fazerLogout() {
    this.elements.userDropdown().click()
    this.elements.logoutButton().click()
  }
}

export default new LoginPage()