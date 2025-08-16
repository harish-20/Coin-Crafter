// cypress/support/commands.d.ts
declare namespace Cypress {
  interface Chainable {
    /**
     * Logs in via API
     * @example cy.login()
     */
    login(): Chainable<void>;

    /**
     * API intercept wrapper
     * @example cy.apiIntercept("GET", "/users", "getUsers")
     */
    apiIntercept(
      method: string,
      url: string,
      alias: string,
      options?: Partial<Cypress.Interception>
    ): Chainable<void>;
  }
}
