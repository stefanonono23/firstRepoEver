describe('testing new commands', () => {

    beforeEach(() => {
        cy.intercept('GET', '**/').as('goToW3school')
        cy.visit('https://www.w3schools.com/')
        cy.fixture('tryout').as('userData')
    })

    // it("Runs the click command only at the end", () => {
    //     cy.visit("https://www.google.com");
    //     cy.get("[name=q]").type("Cypress");
    //     alert("Hey! you must click OK in order to continue.");
    // })

    it('test the commands', function () {
        cy.wait('@goToW3school')
        cy.get('#w3loginbtn').should('have.text', this.userData.email)
    })
})