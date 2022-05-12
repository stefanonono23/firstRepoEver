describe('test intercepting requests', function () {

    beforeEach(() => {
        cy.visit('https://www.w3schools.com/', {
            onBeforeLoad(win) {
                cy.stub(win, 'prompt').returns('my custom message')
            }
        })
        cy.intercept('GET', '**/*.js').as('allJsFiles')
    })

    it('tryna find javascript files in request', function () {
        // cy.wait('@allJsFiles').its('response.statusCode').should('eq', 200)
        cy.get('#search2').type('wassap')
        cy.window().its('prompt').should('be.called')

    })
});