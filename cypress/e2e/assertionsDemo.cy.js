it("assertions test case",() => {

    cy.visit('https://example.cypress.io')

    cy.contains('get').click()

    // Implicit assertions

 //   cy.get('#query-btn').should('contain','Button').should('have.id','query-btn').should('be.visible').invoke('attr','id').should('equal','query-btn').should('be.disabled') 
 /// should-contain assertion and shoul-have-property assertion

    cy.get('#query-btn').should('contain','Button').and('have.id','query-btn').and('be.visible').invoke('attr','id').and('equal','query-btn').and('be.disabled')


    // Explicit assertions

    expect(true).to.be.true

    // expect(true).to.be.false

  //  assert.equal(6, 8, 'NOT EQUAL')

  assert.strictEqual(4, '4', 'NOT EQUAL')

})