describe('Login to OrangeHRM website', () => {
    before(function () {
        cy.fixture('example').then(function (data) {
          this.data = data;
        })
    })

    it('Validate successful Login', function () {
     cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    })
})
