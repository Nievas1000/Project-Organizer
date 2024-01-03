describe("Signup Page", () => {
  beforeEach(() => {
    cy.request("POST", `http://localhost:3001/refreshTest`);
    cy.visit("http://localhost:5173/signup");
  });
  it("should visit the signup page and create a user", () => {
    cy.get('[placeholder="Enter email"]').type("test@gmail.com");
    cy.contains("Continue").click();
    cy.get('[placeholder="Enter your name"]').type("Test");
    cy.get('[placeholder="Enter password"]').type("123456");
    cy.contains("Sign up").click();
    cy.contains("Backlog");
  });
});

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });
  it("should visit the login page and login with the test user", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.login("test@gmail.com", "123456");
  });
});
