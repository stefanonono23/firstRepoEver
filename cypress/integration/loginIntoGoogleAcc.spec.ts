describe('the test', () => {

    beforeEach(() => {
        cy.fixture('tryout').as('workplz')
    })
    it('going to sign in page', () => {
        cy.visit('https://www.google.co.il/')
        cy.get('.lnXdpd', {timeout: 10000}).should('be.visible')
        cy.emailAdd('Google Account', '.gLFyf.gsfi')
        cy.get('.gNO89b').first().click()
        cy.get('.l').first().should('have.attr', 'href', 'https://account' +
            's.google.com/ServiceLogin?service=accountsettings')
    })

    it('Signing into account', () => {
        cy.visit('https://accounts.google.com/ServiceLogin?service=accountsettings')
        cy.get('#identifierId').type(this.workplz.email)
        cy.get('.VfPpkd-vQzf8d').contains('הבא').should('have.text', 'הבא').click()
    })

    it('just do it!', () => {
        cy.visit('https://www.w3schools.com/')
        cy.get('#navbtn_exercises').click()
        cy.get('.w3-bar-item.w3-button').each(($el) => {
            expect($el).to.be.visible()
        })
    })
})