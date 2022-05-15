
describe('opening new tab', function () {
    //
    it('opening new tab by removing attribute target pracitice', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.contains('Click Here').invoke('removeAttr', 'target').click()
        cy.url().then(uri => {
            expect(uri).to.contain('/windows/new')
        })
        cy.get('h3').should('have.text', 'New Window')
    })

    it('opening new tab and spy/stub pracitice', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.window().then((win) => {
            cy.spy(win, 'open').as('redirect')
        })
        cy.contains('Click Here').click()
        cy.get('@redirect').should('be.calledWith', '_blank', '/about')
    })

})
