Cypress.Commands.add("login", (email, password) => {
  cy.get('[placeholder="Enter email"]').type(email);
  cy.contains("Continue").click();
  cy.get('[placeholder="Enter password"]').type(password);
  cy.get("button").contains("Login").click();
  cy.contains("Board");
});
