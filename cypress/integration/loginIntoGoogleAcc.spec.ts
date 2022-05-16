describe('testing the login into Google accounts process', () => {

   /* beforeEach(() => {
        const logInButton: string = '#w3loginbtn'
        cy.visit('https://www.w3schools.com/')
        cy.get(logInButton).invoke('text').as('name')
    })*/

    beforeEach(() => {
        cy.fixture('tryout').as('workplz')
    })

    it('search for Google accounts sign in page', () => {
        const searchButton = '.gNO89b'
        const inputInBar = '.gLFyf.gsfi'
        const seacrchResults = 'l'
        const searchBar = '.lnXdpd'
        cy.visit('https://www.google.co.il/')
        cy.get(searchBar, {timeout: 10000}).should('be.visible')
        cy.typeInElement('Google Account', inputInBar)
        cy.get(searchButton).first().click()
        cy.get(seacrchResults).first().should('have.attr', 'href', 'https://account' +
            's.google.com/ServiceLogin?service=accountsettings')
    })

    it('Signing into account', () => {
        const emailInput = '#identifierId'
        const nextBtn = '#identifierId'
        const showPassword = '.sSzDje.NEk0Ve'
        cy.visit('https://accounts.google.com/ServiceLogin?service=accountsettings')
        cy.get(emailInput).type(this.workplz.email)
        cy.contains('span', 'הבא').click()
        cy.get(showPassword).should('be.visible')
    })


    // it('just do it!', () => {
    //     cy.visit('https://www.w3schools.com/')
    //     cy.contains('a', 'Log in').click()
    // })
})