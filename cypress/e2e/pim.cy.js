import LoginPage from '../pages/LoginPage'
import PimPage from '../pages/PimPage'

describe('Módulo PIM - Gestão de Funcionários', () => {

  beforeEach(() => {
    LoginPage.visitar()
    LoginPage.preencherUsuario('Admin')
    LoginPage.preencherSenha('admin123')
    LoginPage.submeterLogin()
  })

  it('Deve pesquisar um funcionário existente com sucesso', () => {
    PimPage.navegarParaPim()
    PimPage.clicarListaFuncionarios()

    // Pesquisa pelo funcionário criado
    PimPage.pesquisarFuncionario('QA Automation')

    // Valida se a tabela retornou pelo menos um registo correspondente com timeout estendido
  PimPage.elements.tableRecord()
    .should('be.visible', { timeout: 10000 })
    .and('contain', 'QA')
  })

})