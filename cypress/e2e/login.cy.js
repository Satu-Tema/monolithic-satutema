describe("Login", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
    });

    it("User login successfully", () => {
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("[data-testid=login-auth-button]").click();

        cy.url().should("equal", "http://localhost:3000/user");
        cy.contains("Anda berhasil masuk akun").should("be.visible");
        cy.contains("Lihat Website").should("be.visible");;
    });

    it("Admin login successfully", () => {
        cy.get('input[name="email"]').type("satutema@gmail.com");
        cy.get('input[name="password"]').type("adminsatutema");
        cy.get("[data-testid=login-auth-button]").click();


        cy.url().should("equal", "http://localhost:3000/admin");
        cy.contains("Anda berhasil masuk akun").should("be.visible");
        cy.contains("Total Pengguna").should("be.visible");;
    });

    it("User login failed - email not found", () => {
        cy.get('input[name="email"]').type("notfound@example.com");
        cy.get('input[name="password"]').type("password");
        cy.get("[data-testid=login-auth-button]").click();
        cy.contains("Email yang anda masukkan salah / tidak ditemukan.").should("be.visible");
    });

    it("User login failed - wrong password", () => {
        cy.get('input[name="email"]').type("va@gmail.com");
        cy.get('input[name="password"]').type("wrongpassword");
        cy.get("[data-testid=login-auth-button]").click();


        cy.contains("Password yang anda masukkan salah").should("be.visible");
    });
});
