describe('testing', () => {

    it('login' , () => {
        cy.visit('https://www.w3schools.com/')
        cy.get('#w3loginbtn', {timeout: 10}).should('be.visible').click()
        // cy.typeInElement(Cypress.env('email'), '#modalusername').should('be.visible')
        // cy.typeInElement(Cypress.env('password'), '#current-password')
        // cy.contains('Log in').click()
    })
})
