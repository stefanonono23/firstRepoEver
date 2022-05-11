/// <reference types="cypress" />
describe('Actions', () => {
  beforeEach(() => {
  cy.visit('https://example.cypress.io/commands/actions')
    cy.fixture('tryout').then(function (data) {
    this.data = data
    })
  })

it('tryoutTest - something', () => {
  cy.request('/commands/actions')
cy.get('.form-control').eq(4).type('the fourth one')
cy.get('.form-control').eq(4).invoke('show')
})

//  it('.type() - type into a DOM element', () => {
//    // https://on.cypress.io/type
//    cy.get('.action-email')
//      .type('fake@email.com').should('have.value', 'fake@email.com')
//
//      // .type() with special character sequences
//      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
//      .type('{del}{selectall}{backspace}')
//
//      // .type() with key modifiers
//      .type('{alt}{option}') //these are equivalent
//      .type('{ctrl}{control}') //these are equivalent
//      .type('{meta}{command}{cmd}') //these are equivalent
//      .type('{shift}')
//
//      // Delay each keypress by 0.1 sec
//      .type('slow.typing@email.com', { delay: 100 })
//      .should('have.value', 'slow.typing@email.com')
//
//    cy.get('.action-disabled')
//      // Ignore error checking prior to type
//      // like whether the input is visible or disabled
//      .type('disabled error checking', { force: true })
//      .should('have.value', 'disabled error checking')
//  })
})




