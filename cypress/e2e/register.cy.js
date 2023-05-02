describe("Registration and website creation", () => {
    it("User successfully registers and creates a new website", () => {
        cy.visit('/')
        cy.get("[data-testid=register-button]").click();
        cy.get("[data-testid=register-auth-button]").contains('Daftar');
        cy.get('input[name=email]').type("nana@gmail.com")
        cy.get('input[name=password]').type("123456")
        cy.get("[data-testid=register-auth-button]").click()

        // Wait for the website creation form to load
        cy.url().should("include", "/auth/register/create")

        // Enter website information and submit the form
        cy.get('input[name=title]').type("Nana UMKM");
        cy.get('textarea[name=description]').type("Nana Website adalah website umkm kelas menengah di area Malang Raya");
        cy.get('input[name=address]').type("Malang, Jawa Timur");
        cy.get('input[name=meta]').type("Nana");
        cy.get("[data-testid=create-website-button]").click()

        // Wait for the website dashboard to load
        cy.url().should("include", "/user")
    });

});
