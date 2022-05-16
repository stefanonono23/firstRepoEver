import './commands'
import 'cypress-mochawesome-reporter/register'

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            typeInElement(InputString: string, 
                          selector: string): Chainable<Element>
        }
    }
}