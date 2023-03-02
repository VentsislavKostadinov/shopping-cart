describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('check header', () => {
    cy.get('.Navigation_brandTitle__G67al').contains('BRUNCHY')

  })
})