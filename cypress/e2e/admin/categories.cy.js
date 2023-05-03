describe('Categories Page', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("satutema@gmail.com");
        cy.get('input[name="password"]').type("adminsatutema");
        cy.get("[data-testid=login-auth-button]").click();
        cy.url().should("equal", "http://localhost:3000/admin");
        cy.visit('/admin/categories');
    });

    it('Should create new category', () => {
        const categoryTitle = 'PENDIDIKAN';

        cy.get('[data-testid=open-modal-category]').click();
        cy.get('input[name="title"]').type(categoryTitle);
        cy.get('[data-testid=button-add-category]').click();

        cy.get('div').contains(categoryTitle).should('exist');
    });

    it('Should edit category', () => {
        const newCategoryTitle = 'Updated Category';

        cy.get('div > div > div > div > div > div > button').contains('Edit').first().click();
        cy.get('input[name="title"]').clear().type(newCategoryTitle);
        cy.get('button[type="submit"]').click();

        cy.get('div').contains(newCategoryTitle).should('exist');
    });

    it('Should delete category', () => {
        cy.get('div > div > div > div > div > div > button').contains('Delete').first().click();
        cy.get('button').contains('Hapus').click();
        cy.wait(1000);
        cy.contains('Kategori berhasil dihapus').should('be.visible');
    });
});
