describe('testing the login into Google accounts process', () => {

    beforeEach(() => {
        cy.fixture('tryout').as('workplz')
    })
    it('going to sign in page', () => {
        cy.visit('https://www.google.co.il/')
        const searchButton = '.gNO89b'
        const inputInBar = '.gLFyf.gsfi'
        const searchBar = '.lnXdpd'
        const seacrchResults = 'l'
        cy.get(searchBar, {timeout: 10000}).should('be.visible')
        cy.typeInElement('Google Account', inputInBar)
        cy.get('searchButton').first().click()
        cy.get(seacrchResults).first().should('have.attr', 'href', 'https://account' +
            's.google.com/ServiceLogin?service=accountsettings')
    })

    it('Signing into account', () => {
        const emailInput = '#identifierId'
        const nextBtn = '#identifierId'
        const showPassword = '.sSzDje.NEk0Ve'
        cy.visit('https://accounts.google.com/ServiceLogin?service=accountsettings')
        cy.get(emailInput).type(this.workplz.email)
        cy.get(nextBtn).contains('הבא').should('have.text', 'הבא').click()
        cy.get(showPassword).should('be.visible')
    })

    // it('just do it!', () => {
    //     cy.visit('https://www.w3schools.com/')
    //     cy.get('#navbtn_exercises').click()
    //     cy.get('.w3-bar-item.w3-button').each(($el) => {
    //         expect($el).to.be.visible()
    //     })
    // })
})