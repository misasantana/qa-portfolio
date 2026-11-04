class PimPage {
  elements = {
    pimMenu: () => cy.contains('span', 'PIM'),
    addEmployeeTab: () => cy.contains('a', 'Add Employee'),
    employeeListTab: () => cy.contains('a', 'Employee List'),
    firstNameInput: () => cy.get('input[name="firstName"]'),
    lastNameInput: () => cy.get('input[name="lastName"]'),
    saveButton: () => cy.get('button[type="submit"]'),
    
    // Elementos da Pesquisa
    employeeNameSearchInput: () => cy.get('.oxd-autocomplete-text-input input').first(),
    searchButton: () => cy.get('button[type="submit"]'),
    tableRecord: () => cy.get('.oxd-table-card')
  }

  navegarParaPim() {
    this.elements.pimMenu().click()
  }

  clicarAdicionarFuncionario() {
    this.elements.addEmployeeTab().click()
  }

  clicarListaFuncionarios() {
    this.elements.employeeListTab().click()
  }

  cadastrarFuncionario(nome, sobrenome) {
    this.elements.firstNameInput().type(nome)
    this.elements.lastNameInput().type(sobrenome)
    this.elements.saveButton().click()
  }

  pesquisarFuncionario(nomeCompleto) {
    this.elements.employeeNameSearchInput().type(nomeCompleto)
    // Clica diretamente no botão Search sem precisar de interagir com o dropdown
    this.elements.searchButton().click({ force: true })
  }
  
}
export default new PimPage()

