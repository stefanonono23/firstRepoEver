Cypress.Commands.add( 'emailAdd',  ( emailAddress, cssSelector) => {
    cy.get(cssSelector).type(emailAddress).should('have.value', emailAddress)
})
