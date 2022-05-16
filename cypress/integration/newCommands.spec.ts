describe('testing new commands', () => {

    beforeEach(() => {
        cy.intercept('GET', '**/').as('goToW3school')
        cy.visit('https://www.w3schools.com/')
        cy.fixture('userData').as('userDescription')
    })

    it('test the commands', function () {
        cy.wait('@goToW3school')
        cy.get('#w3loginbtn').should('have.text', this.userDescription.email)
    })
})