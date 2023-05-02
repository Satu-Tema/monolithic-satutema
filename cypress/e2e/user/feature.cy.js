describe("Sidebar Feature Website", () => {
    it("should be able to fill out website feature", () => {
        // Login
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("[data-testid=login-auth-button]").click();

        cy.url().should("equal", "http://localhost:3000/user");
        cy.contains("Anda berhasil masuk akun").should("be.visible");

        // Navigate to Fitur Website
        cy.contains("Fitur").click();
        cy.url().should("include", "/user/feature");

        // Fill out settings
        cy.get('input[name="title"]').clear().type("My Feature Website");
        cy.get('input[name="description"]').clear().type("This is my Feature website description");

        const fileName = 'dummy.png';
        cy.fixture(fileName).then(fileContent => {
            cy.get('[data-testid=file-input]').selectFile({
                contents: Cypress.Buffer.from(fileContent),
                fileName,
                lastModified: Date.now(),
            });
        });

        cy.contains("Simpan").click();

        cy.reload();

        cy.get('input[name="title"]').should('have.value', 'My Feature Website');
    });
});
