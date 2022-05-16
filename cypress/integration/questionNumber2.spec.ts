describe('practice question', function () {

    beforeEach(() => {
        const intercpetURL = '**/*.jpg'
        cy.fixture('userData').as('userData')
        cy.intercept('GET', intercpetURL).as('allJpgFiles')
    })

    it('question number 2', function() {
        const w3School ='https://www.w3schools.com/'
        const goToLoginPage = '#w3loginbtn'
        const userNameInput = '#modalusername'
        const passwordInput = '#current-password'

        cy.visit(w3School)
        cy.wait('@allJpgFiles').its('response.statusCode').should('eq', 200)
        cy.get(goToLoginPage).click()
        cy.get(userNameInput).type(this.userData.email)
        cy.get(passwordInput).type(this.userData.password)
    })
})