describe("contact us form", () => {
  it("Check that user can't submit with all empty fields", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="Contact-Us/contactus.html"]').invoke("removeAttr", "target");
    cy.get('[href="Contact-Us/contactus.html"]').click();
    cy.get('[class="contact_button"]').eq(1).click();
    cy.url().should(
      "eq",
      "https://www.webdriveruniversity.com/Contact-Us/contact_us.php"
    );
    cy.title().should("eq", "Contact form handler");
    cy.get("body").should("contain", " Error: all fields are required");
  });

  it("Check that user can't submit with empty first name field", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="Contact-Us/contactus.html"]').invoke("removeAttr", "target");
    cy.get('[href="Contact-Us/contactus.html"]').click();
    cy.get('[name="last_name"]').type("Ahmed");
    cy.get('[name="email"]').type("moaz@gmail.com");
    cy.get('[name="message"]').type("Hello");
    cy.get('[class="contact_button"]').eq(1).click();
    cy.url().should(
      "eq",
      "https://www.webdriveruniversity.com/Contact-Us/contact_us.php"
    );
    cy.title().should("eq", "Contact form handler");
    cy.get("body").should("contain", " Error: all fields are required");
  });

  it("Check that user can't submit with empty last name field", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="Contact-Us/contactus.html"]').invoke("removeAttr", "target");
    cy.get('[href="Contact-Us/contactus.html"]').click();
    cy.get('[name="first_name"]').type("Moaz");
    cy.get('[name="email"]').type("moaz@gmail.com");
    cy.get('[name="message"]').type("Hello");
    cy.get('[class="contact_button"]').eq(1).click();
    cy.url().should(
      "eq",
      "https://www.webdriveruniversity.com/Contact-Us/contact_us.php"
    );
    cy.title().should("eq", "Contact form handler");
    cy.get("body").should("contain", " Error: all fields are required");
  });

  it("Check that user can't submit with empty email field", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="Contact-Us/contactus.html"]').invoke("removeAttr", "target");
    cy.get('[href="Contact-Us/contactus.html"]').click();
    cy.get('[name="first_name"]').type("Moaz");
    cy.get('[name="last_name"]').type("Ahmed");
    cy.get('[name="message"]').type("Hello");
    cy.get('[class="contact_button"]').eq(1).click();
    cy.url().should(
      "eq",
      "https://www.webdriveruniversity.com/Contact-Us/contact_us.php"
    );
    cy.title().should("eq", "Contact form handler");
    cy.get("body").should("contain", " Error: all fields are required");
  });

  it("Check that user can't submit with empty comments field", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="Contact-Us/contactus.html"]').invoke("removeAttr", "target");
    cy.get('[href="Contact-Us/contactus.html"]').click();
    cy.get('[name="first_name"]').type("Moaz");
    cy.get('[name="last_name"]').type("Ahmed");
    cy.get('[name="email"]').type("moaz@gmail.com");
    cy.get('[class="contact_button"]').eq(1).click();
    cy.url().should(
      "eq",
      "https://www.webdriveruniversity.com/Contact-Us/contact_us.php"
    );
    cy.title().should("eq", "Contact form handler");
    cy.get("body").should("contain", " Error: all fields are required");
  });

  it("Check that user can't submit with invalid email address", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="Contact-Us/contactus.html"]').invoke("removeAttr", "target");
    cy.get('[href="Contact-Us/contactus.html"]').click();
    cy.get('[name="first_name"]').type("Moaz");
    cy.get('[name="last_name"]').type("Ahmed");
    cy.get('[name="email"]').type("moaz#gmail.com");
    cy.get('[name="message"]').type("Hello");
    cy.get('[class="contact_button"]').eq(1).click();
    cy.url().should(
      "eq",
      "https://www.webdriveruniversity.com/Contact-Us/contact_us.php"
    );
    cy.title().should("eq", "Contact form handler");
    cy.get("body").should("contain", " Error: Invalid email address");
  });

  it("Check that reset button works properly", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="Contact-Us/contactus.html"]').invoke("removeAttr", "target");
    cy.get('[href="Contact-Us/contactus.html"]').click();
    cy.get('[name="first_name"]').type("Moaz");
    cy.get('[name="last_name"]').type("Ahmed");
    cy.get('[name="email"]').type("moaz@gmail.com");
    cy.get('[name="message"]').type("Hello");
    cy.get('[class="contact_button"]').eq(0).click();
    cy.get('[name="first_name"]').should("be.empty");
    cy.get('[name="last_name"]').should("be.empty");
    cy.get('[name="email"]').should("be.empty");
    cy.get('[name="message"]').should("be.empty");
    cy.url().should(
      "eq",
      "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
    );
    cy.title().should("eq", "WebDriver | Contact Us");
  });
});
