describe('index page', async () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should display title, section, description and image', () => {
    cy.get('p').contains('Shopping Website').should('be.visible')

    cy.get('p').contains('Bag Section').should('be.visible')

    cy.get('p').contains('Customized your own bag design!!!!').should('be.visible')

    cy.get(`img[src*="Receiver.png"]`).should('be.visible')

    cy.get(`img[src*="Receiver.svg"]`).should('be.visible')

    cy.wait(1000)
  })

  it('should render home screen, click on userUser button and login', () => {
    cy.contains('button', 'User').should('exist')
    cy.wait(2000)

    cy.contains('User').click()
    cy.wait(2000)

    cy.contains('p', 'Login Form').should('exist')

    cy.contains('p', 'click to show content').should('exist')
    cy.wait(2000)
    cy.contains('p', 'click to show content').click()

    cy.contains('p', 'Username').should('exist')

    cy.contains('p', 'Password').should('exist')

    cy.contains('button', 'Login').should('not.be.enabled')
    cy.contains('button', 'Cancel').should('be.enabled')

    cy.get('input[name="username"]').type('rita@teelaunch.com')
    cy.get('input[name="password"]').type('testpassword')

    cy.contains('button', 'Login').should('be.enabled')

    cy.get('input[name="username"]').clear()

    cy.get('input[name="password"]').clear()

    cy.contains('button', 'Login').should('not.be.enabled')

    cy.get('input[name="username"]').type('rita@teelaunch.com')
    cy.get('input[name="password"]').type('testpassword')

    cy.contains('button', 'Login').should('be.enabled')
    cy.wait(2000)

    cy.contains('button', 'Login').click()

    cy.get('.customModal').should('not.exist')
    cy.wait(3000)
  })

  it('should open login modal and click on cancel button', () => {
    cy.contains('button', 'User').should('exist')
    cy.wait(2000)

    cy.contains('User').click()
    cy.wait(2000)

    cy.contains('p', 'Login Form').should('exist')

    cy.contains('p', 'click to show content').click()

    cy.wait(2000)
    cy.contains('button', 'Cancel').click()
  })
})
