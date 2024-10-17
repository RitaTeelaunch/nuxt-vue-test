describe('ProductScreen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should be open product page', () => {
    cy.get('[data-testid="productLink"]').click().url().should('include', '/product')
    cy.wait(1500)
    cy.contains('Return Home').should('be.visible').click({ force: true })
    cy.wait(1500)
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.contains('Shopping Website').should('be.visible')
  })
})
