class LeavePage {
  elements = {
    leaveTypeDropdown: () => cy.get('.oxd-select-text').first(),
    dropdownOptions: () => cy.get('.oxd-select-dropdown .oxd-select-option'),
    commentsTextarea: () => cy.get('textarea'),
    submitButton: () => cy.get('button[type="submit"]'),
  };

  visitApplyPage() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave');
  }

  applyForLeave(fromDate, toDate, comment = '') {
    // 1. Clica no dropdown para abrir as opções
    this.elements.leaveTypeDropdown().should('be.visible').click({ force: true });

    // 2. Aguarda as opções carregarem e clica na segunda opção (ignorando o placeholder "-- Select --")
    this.elements.dropdownOptions().should('have.length.greaterThan', 1);
    this.elements.dropdownOptions().eq(1).click({ force: true });

    // 3. Aguarda a re-renderização assíncrona do formulário pelo Vue.js
    cy.wait(2000);

    // 4. Preenche as datas com segurança
    cy.get('form input').then(($inputs) => {
      const textInputs = $inputs.filter((i, el) => el.type !== 'hidden' && el.type !== 'submit');
      
      cy.wrap(textInputs).eq(0).should('be.visible').clear({ force: true }).type(`${fromDate}{esc}`);
      cy.wrap(textInputs).eq(1).should('be.visible').clear({ force: true }).type(`${toDate}{esc}`);
    });

    // 5. Clica em um elemento neutro para fechar o calendário
    cy.get('h6').first().click({ force: true });

    // 6. Preenche o comentário se fornecido
    if (comment) {
      this.elements.commentsTextarea().type(comment, { force: true });
    }

    // 7. Submete o formulário com scroll e clique forçado
    this.elements.submitButton().scrollIntoView().should('be.visible').click({ force: true });
  }
}

export default new LeavePage();