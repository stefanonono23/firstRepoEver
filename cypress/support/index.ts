import './commands'

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            typeInElement(value: string, string): Chainable<Element>
        }
    }
}