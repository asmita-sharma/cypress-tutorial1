it('google page', () => {

    cy.visit('https://www.google.com')

    cy.get('#APjFqb').type('hello world{Enter}')

    cy.contains('Images').click()
})