describe("file upload", () => {
  it("attach pdf", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="File-Upload/index.html"]').invoke("removeAttr", "target");
    cy.get('[href="File-Upload/index.html"]').click();
    cy.get("#myFile").attachFile("Test.pdf");
    cy.get("#submit-button").click();
  });
  it("attach 2 files", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('[href="File-Upload/index.html"]').invoke("removeAttr", "target");
    cy.get('[href="File-Upload/index.html"]').click();
    cy.get("#myFile").attachFile(["Test.pdf", "test.docx"]);
    cy.get("#submit-button").click();
  });
});
