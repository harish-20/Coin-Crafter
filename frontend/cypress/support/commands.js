// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const email = Cypress.env("email");
const password = Cypress.env("password");

const apiUrl = Cypress.env("apiUrl");

Cypress.Commands.add(
  "apiIntercept",
  (method, endpoint, alias, options = {}) => {
    cy.intercept(method, `${apiUrl}${endpoint}`, options).as(alias);
  }
);

Cypress.Commands.add("login", () => {
  cy.apiIntercept("POST", "/user/signin", "signin");

  cy.visit("/signin");

  cy.get(`[data-test="email-input"]`).type(email);
  cy.get(`[data-test="password-input"]`).type(password);

  cy.get(`[data-test="submit"]`).click();

  cy.wait("@signin");
});
