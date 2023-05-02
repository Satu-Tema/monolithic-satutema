describe("Sidebar Testimony Website", () => {
    it("should be able to fill out website testimony", () => {
        // Login
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("[data-testid=login-auth-button]").click();

        cy.url().should("equal", "http://localhost:3000/user");
        cy.contains("Anda berhasil masuk akun").should("be.visible");

        cy.contains("Testimoni").click();
        cy.url().should("include", "/user/testimony");

        // Fill out settings

        const fileName = 'dummy.png';
        cy.fixture(fileName).then(fileContent => {
            cy.get('[data-testid=file-input]').selectFile({
                contents: Cypress.Buffer.from(fileContent),
                fileName,
                lastModified: Date.now(),
            });
        });

        cy.get('input[name="name"]').clear().type("Va test");
        cy.get('input[name="jobs"]').clear().type("Bussiness");
        cy.get('textarea[name="description"]').clear().type("Example description");

        cy.get("[data-testid=add-testimony-button]").click();

        cy.wait(2000)

        cy.contains('Va test').should('be.visible')
    });
});
