describe("Login and create project", () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split("T")[0];

  beforeEach(() => {
    cy.visit(`https://kira-organizer.netlify.app`);
  });

  it("should visit the login page and login with the test user and from the home page create a project", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.login(Cypress.env("test_username"), Cypress.env("test_password"));
    cy.get("span").contains("Create").click();
    cy.get('input[name="name"]').type(
      `TestProject${tomorrow.getMilliseconds()}`
    );
    cy.get('input[name="description"]').type("This is a test from cypress");
    cy.get('input[name="endDate"]').type(formattedTomorrow);
    cy.get("button").contains("Create project").click();
  });

  it("should visit the login page and login with the test user and create a task for the existing project", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.login(Cypress.env("test_username"), Cypress.env("test_password"));
    cy.get("span").contains("Create issue").click();
    cy.wait(300);
    cy.get('input[name="name"]').type("Task test");
    cy.get('input[name="description"]').type("This is a test from cypress");
    cy.get("select[name=owner]").select(1);
    cy.get("button[name=createIssue]").contains("Create").click();
  });

  after(() => {
    cy.wait(300);
    cy.request({
      method: "POST",
      url: `${Cypress.env("api_server")}refreshProject`,
      body: { name: `TestProject${tomorrow.getMilliseconds()}` },
    });
  });
});
