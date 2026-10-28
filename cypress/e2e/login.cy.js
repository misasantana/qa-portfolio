import LoginPage from '../pages/LoginPage'

describe('Testes de Autenticação e Exceções - OrangeHRM', () => {

  beforeEach(() => {
    LoginPage.visitar()
  })

  it('Deve exibir mensagens de campo obrigatório ao tentar logar com campos vazios', () => {
    LoginPage.submeterLogin()
    
    // Valida que a mensagem "Required" é exibida para os dois campos
    LoginPage.elements.requiredErrorMsg()
      .should('be.visible')
      .and('contain', 'Required')
  })

  it('Deve redirecionar para a tela de redefinição de senha ao clicar em "Forgot your password?"', () => {
    LoginPage.clicarEsqueceuSenha()
    
    // Valida a URL de reset de senha
    cy.url().should('include', '/auth/requestPasswordResetCode')
    cy.get('.orangehrm-forgot-password-title')
      .should('be.visible')
      .and('have.text', 'Reset Password')
  })

  it('Deve realizar o logout com sucesso e retornar à tela de login', () => {
    LoginPage.preencherUsuario('Admin')
    LoginPage.preencherSenha('admin123')
    LoginPage.submeterLogin()

    // Realiza o Logout
    LoginPage.fazerLogout()

    // Valida o retorno à página de login
    cy.url().should('include', '/auth/login')
    LoginPage.elements.loginButton().should('be.visible')
  })

})