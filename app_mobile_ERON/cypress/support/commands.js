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

Cypress.Commands.add("swipeLeft", () => {
  cy.get("ion-slides")
    .trigger("mousedown", { force: true, which: 1, pageX: 300, pageY: 400 })
    .trigger("mousemove", { force: true, which: 1, pageX: 1, pageY: 400 })
    .trigger("mouseup", { force: true });
});

Cypress.Commands.add("goToEspaceApprenant", () => {
  cy.get("ion-menu-button").click();
  cy.get(":nth-child(6) > ion-menu-toggle.md > .item")
    .should("contain", "Connexion")
    .click();
  cy.get(".menu-type-overlay").click(310, 100);
  var email = "dup.dup@gmail.com";
  cy.get("#email").type(`${email}{enter}`);
  var password = "myPassWord";
  cy.get("#password").type(`${password}{enter}`);
  cy.get('form').contains('Connexion').click()
  cy.url().should('include', '/tabs/tab-suivi')
  cy.wait(2000)
});
