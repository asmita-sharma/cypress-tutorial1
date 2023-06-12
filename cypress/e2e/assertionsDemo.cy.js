it("assertions test case",() => {

    cy.visit('https://example.cypress.io')

    cy.contains('get').click()
})