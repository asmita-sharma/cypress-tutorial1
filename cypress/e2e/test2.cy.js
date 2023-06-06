it('google search test case',() => {

    cy.visit('https://www.google.com')

    cy.get('#APjFqb').type('Netflix{Enter}')

    cy.wait(2000)

    cy.get('.MUFPAc > :nth-child(2) > a').click()

     
})