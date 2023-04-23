const { faker } = require('@faker-js/faker')

Cypress.Commands.add('preencheFormularioAnexaCurriculoESubmete', (user, email, phone_number) => {
  const args = {
    user: faker.name.fullName(),
    email: faker.internet.email(),
    phone_number: faker.phone.number('(73) 9####-####')
  }
  cy.origin('https://app.pipefy.com', { args }, ({ user, email, phone_number }) => {
    cy.visit('https://app.pipefy.com/public/form/NWn55kc1')

    cy.get('#publicForm-ShortText-nome_completo')
      .type(user, { log: false })
    cy.get('#publicForm-Email-email')
      .type(email, { log: false })
    cy.get('#publicForm-ShortText-vaga')
      .type('Analista de Teste')
    cy.get('#publicForm-Phone-telefone')
      .type(phone_number, { log: false })
    cy.get('#publicForm-LongText-por_que_voc_est_aplicando_para_esta_vaga')
      .type('Oportunidade de aprendizado e crescimento profissional')
    cy.get('button[title="Anexe seu currículo"]')
      .should('be.visible')
      .click()
    cy.fixture('curriculo.pdf').as('file')
    cy.get('button[title="Adicionar novos arquivos"]')
      .should('be.visible')
      .selectFile('@file', { action: 'drag-drop' })
    cy.get('#submit-form-button')
      .should('be.visible')
      .click()
  })
})
