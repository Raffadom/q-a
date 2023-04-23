describe('Envia currículo', () => {
  beforeEach(() => {
    cy.section('Pré-condições dos testes')
    cy.step('visita a aplicação em teste')
    cy.visit('/')
    cy.step('verifica que o título está correto')
    cy.title().should('be.equal', 'Home - Beedoo')
    cy.section('fim das pré-condições')
  })
  it('preenche os dados de inscrição, anexa currículo e submete o formulário com dados válidos', () => {
    cy.step('clica em "ACEITAR" para aceitar cookies')
    cy.get('.rcc-accept-btn')
      .should('be.visible')
      .click()
    cy.step('clica em "Envie seu currículo" removendo o "attr" "target" para o link abrir na mesma aba do navegador')
    cy.contains('a', 'Envie seu currículo')
      .should('be.visible')
      .invoke('removeAttr', 'target')
      .click()
    cy.step('preenche os campos obrigatórios com dados válidos, anexa curriculo e submete o formulário')
    cy.preencheFormularioAnexaCurriculoESubmete()
  })
})