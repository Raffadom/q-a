import { isEqual, keys } from 'lodash'

describe('Random user API contract', () => {
  it('as propriedades do "body" e da "fixture" devem ser iguais', () => {
    cy.request('https://randomuser.me/api/')
      .its('body')
      .then((body) => {
        cy.fixture('randomUserApiResponse.json').then((fixture) => {
          const bodyKeys = keys(body.results[0])
          const fixtureKeys = keys(fixture.results[0])
          expect(isEqual(bodyKeys, fixtureKeys)).to.be.true
        })
      })
  })
})
