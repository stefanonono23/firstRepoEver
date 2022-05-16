
describe('opening new tab', function () {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/windows')
    })

    it('opening new tab by removing attribute target pracitice', () => {
        const newWindow = 'New Window'
        cy.contains('Click Here').invoke('removeAttr', 'target').click()
        cy.url().should('have.text', '/windows/new')
        cy.get(newWindow).should('have.text', 'New Window')
    })

    it('opening new tab and spy/stub pracitice', () => {
        cy.window().then((win) => {
            cy.spy(win, 'open').as('redirect')
        })
        cy.contains('Click Here').click()
        cy.get('@redirect').should('be.calledWith', '_blank', '/about')
    })
})
