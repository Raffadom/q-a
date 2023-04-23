describe('Random User API Test', () => {
  it('deve retornar o status "200"', () => {
    cy.request('GET', 'https://randomuser.me/api/')
      .then((response) => {
        expect(response.status).to.eq(200) 
    })
  })
})
