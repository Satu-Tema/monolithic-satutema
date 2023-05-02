describe("Sidebar Product Website", () => {
    it("should be able to fill out website product", () => {
        // Login
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("[data-testid=login-auth-button]").click();

        cy.url().should("equal", "http://localhost:3000/user");
        cy.contains("Anda berhasil masuk akun").should("be.visible");

        // Navigate to Fitur Website
        cy.contains("Produk").click();
        cy.url().should("include", "/user/product");

        cy.get("[data-testid=new-product-button]").click();
        cy.contains('Foto Produk').should("be.visible")

        // Fill out settings

        const fileName = 'dummy.png';
        cy.fixture(fileName).then(fileContent => {
            cy.get('[data-testid=file-input]').selectFile({
                contents: Cypress.Buffer.from(fileContent),
                fileName,
                lastModified: Date.now(),
            });
        });

        cy.get('input[name="title"]').clear().type("Example Product");
        cy.get('input[name="description"]').clear().type("This is my Example Product description");


        cy.get("[data-testid=add-product-button]").click();

        cy.wait(1000)

        cy.contains('Example Product').should('be.visible')
    });
});
