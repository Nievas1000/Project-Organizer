describe("Login and create project", () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split("T")[0];

  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should visit the login page and login with the test user and from the home page create a project", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.login("test@gmail.com", "123456");
    cy.get("span").contains("Create").click();
    cy.get('input[name="name"]').type(
      `Test Project ${tomorrow.getMilliseconds()}`
    );
    cy.get('input[name="description"]').type("This is a test from cypress");
    cy.get('input[name="endDate"]').type(formattedTomorrow);
    /* cy.get("button").contains("Create project").click(); */
  });

  /*   afterEach(() => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/refreshProject",
      body: { name: `Test Project ${tomorrow.getMilliseconds()}` },
    });
  }); */
});
