describe("Sidebar Pengaturan Website", () => {
    it("should be able to fill out website settings", () => {
        // Login
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("[data-testid=login-auth-button]").click();

        cy.url().should("equal", "http://localhost:3000/user");
        cy.contains("Anda berhasil masuk akun").should("be.visible");

        // Navigate to Pengaturan Website
        cy.contains("Pengaturan Website").click();
        cy.url().should("include", "/user/setting");

        // Fill out settings
        cy.get('input[name="title"]').clear().type("My Website");
        // cy.get('textarea[name="websiteDescription"]').type(
        //     "This is my website description"
        // );
        cy.get('input[name="description"]').clear().type("This is my website description");
        cy.get('input[name="address"]').clear().type("Malang, jl Brantas");
        cy.get('input[name="youtube"]').clear().type("yukafi");
        cy.get('input[name="instagram"]').clear().type("yukafi");
        cy.get('input[name="twitter"]').clear().type("yukafi12");
        cy.get('input[name="meta"]').clear().type("website meta");
        cy.get('input[name="titleHero"]').clear().type("Judul Hero");
        cy.get('input[name="descriptionHero"]').clear().type("This is my website description hero");
        cy.get('input[name="twitter"]').clear().type("yukafi12");

        const fileName = 'dummy.png';
        cy.fixture(fileName).then(fileContent => {
            cy.get('[data-testid=file-input]').selectFile({
                contents: Cypress.Buffer.from(fileContent),
                fileName,
                lastModified: Date.now(),
            });
        });
        // Save settings
        cy.contains("Simpan").click();

        cy.reload();
        cy.get('input[name="title"]').should('have.value', 'My Website');
    });
});
