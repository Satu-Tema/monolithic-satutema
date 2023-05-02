describe("Sidebar Gallery Website", () => {
    it("should upload image to gallery", () => {
        // Login
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("[data-testid=login-auth-button]").click();

        cy.url().should("equal", "http://localhost:3000/user");
        cy.contains("Anda berhasil masuk akun").should("be.visible");

        cy.contains("Galeri").click();
        cy.url().should("include", "/user/gallery");

        cy.get("[data-testid=button-open-modal]").click();
        cy.contains('Tambah Foto Galeri Baru').should("be.visible")


        const fileName = 'dummy.png';
        cy.fixture(fileName).then(fileContent => {
            cy.get('[data-testid=file-input]').selectFile({
                contents: Cypress.Buffer.from(fileContent),
                fileName,
                lastModified: Date.now(),
            });
        });

        cy.get('[data-testid=add-gallery-button]').click()

        cy.wait(2000)

        cy.get("[data-testid=gallery]").its("length").then(prevLength => {
            cy.get("[data-testid=gallery]").should("have.length", prevLength);
        });
    });
});
