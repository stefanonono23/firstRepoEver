
describe('opening new tab and spy/stub pracitice', function () {

    // it('opening new tab', () => {
    //     cy.visit('https://the-internet.herokuapp.com/windows')
    //     cy.contains('Click Here').invoke('removeAttr', 'target').click()
    //     cy.url().then(uri => {
    //         expect(uri).to.contain('/windows/new')
    //     })
    //     cy.get('h3').should('have.text', 'New Window')
    // })

    it('trying out stub/spy', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.stub().as('open')
        cy.contains('Click Here').click()
        cy.get('@open').should('have.been.calledOnce')
    })

})
