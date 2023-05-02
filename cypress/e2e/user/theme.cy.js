describe("Sidebar Theme Website", () => {
    it("should select theme when button is clicked", () => {
        // Login
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("[data-testid=login-auth-button]").click();

        cy.url().should("equal", "http://localhost:3000/user");
        cy.contains("Anda berhasil masuk akun").should("be.visible");

        cy.contains("Tema").click();
        cy.url().should("include", "/user/theme");

        cy.get('[data-testid="chose-theme-button"]').first().click(); // Mengklik tombol "Pilih Tema" pada tema pertama pada daftar tema


        cy.contains('Apakah Anda yakin ingin merubah tema')
            .should('be.visible'); // Memastikan pesan konfirmasi ditampilkan dengan benar

        cy.get('[data-testid="button-primary"]').click(); // Menekan tombol "Rubah Tema" pada dialog konfirmasi

        cy.get('[data-testid="modal-warning"]').should('not.exist'); // Menunggu dialog konfirmasi hilang

        cy.get('[data-testid="chosed-button"]').should('be.visible'); // Memastikan tombol "Digunakan" pada tema yang baru dipilih tampil
    });
});
