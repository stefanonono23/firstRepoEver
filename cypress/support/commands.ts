Cypress.Commands.add( 'typeInElement',  ( emailAddress, cssSelector) => {
    cy.get(cssSelector).type(emailAddress)
})
