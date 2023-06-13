it('google search', () => {
        cy.visit("https://www.google.com")

        cy.get('#APjFqb',{timeout:5000}).type('Cypress Tutorial{Enter}')

       // cy.get('#APjFqb').type('Cypress Tutorial{Enter}')

         cy.contains('Videos').click()

      //  cy.get('.MUFPAc > :nth-child(2) > a').click()      

        // cy.contains('Google Search').click()
    })
