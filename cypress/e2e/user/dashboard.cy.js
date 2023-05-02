describe("Sidebar Dashboard", () => {
    it("should navigate to other sidebars when links are clicked", () => {
        // login
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("[data-testid=login-auth-button]").click();

        cy.url().should("equal", "http://localhost:3000/user");
        cy.contains("Anda berhasil masuk akun").should("be.visible");

        // setting
        cy.contains("Pengaturan Website").click();
        cy.url().should("include", "/user/setting");

        // Fitur
        cy.contains("Fitur").click();
        cy.url().should("include", "/user/feature");

        // Product
        cy.contains("Produk").click();
        cy.url().should("include", "/user/product");

        cy.contains("Galeri").click({ force: true });
        cy.url().should("include", "/user/gallery");

        cy.contains("Testimoni").click({ force: true });
        cy.url().should("include", "/user/testimony");

        cy.contains("Tema").click({ force: true });
        cy.url().should("include", "/user/theme");
    });
});
