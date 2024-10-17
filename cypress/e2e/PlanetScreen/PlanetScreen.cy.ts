describe('PlanetScreen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should be open planet screen', () => {
    cy.get('[data-testid="planetLink"]').click().url().should('include', '/planet')

    cy.wait(2000)
    cy.contains('Return Home').should('be.visible').click()
    cy.wait(1000)

    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.contains('Shopping Website').should('be.visible')
  })
})
