describe("Sidebar Dashboard", () => {
    it('displays total users, total websites, and total website themes', () => {
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("satutema@gmail.com");
        cy.get('input[name="password"]').type("adminsatutema");
        cy.get("[data-testid=login-auth-button]").click();
        cy.url().should("equal", "http://localhost:3000/admin");
        cy.contains("Anda berhasil masuk akun").should("be.visible");
        cy.contains('Total Pengguna').should('exist');
        cy.contains('Total Website').should('exist');
        cy.contains('Total Tema Website').should('exist');
    });
});
