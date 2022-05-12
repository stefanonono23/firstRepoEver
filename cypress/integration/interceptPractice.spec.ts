describe('test intercepting requests', function () {

    beforeEach(() => {
        cy.visit('https://www.youtube.com/result' +
            's?search_query=%D7%94%D7%A4%D7%99%D7%92%27%D7%9E%D7%95%D7%AA')
        cy.intercept('GET', '**/*.js').as('allJsFiles')
    })

    it('tryna find javascript files in request', function () {
        cy.wait('@allJsFiles').its('response.statusCode').should('eq', 200)
        cy.window().then(win => {
            cy.spy(win, 'prompt')
        })
    })
});