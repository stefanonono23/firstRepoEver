describe('practice question', function () {

    beforeEach(() => {
        const intercpetURL = '**/*.jpg'
        cy.fixture('tryout').as('userInput')
        cy.intercept('GET', intercpetURL).as('allJPegFiles')
    })

    it('question number 2', function() {
        const w3School ='https://www.w3schools.com/'
        cy.visit(w3School)
        cy.wait('@allJPegFiles').its('response.statusCode').should('eq', 200)
        cy.get('#w3loginbtn').click()
        cy.get('#modalusername').type(this.userInput.email)
        cy.get('#current-password').type(this.userInput.password)
    })
})