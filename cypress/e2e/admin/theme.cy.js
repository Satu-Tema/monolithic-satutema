describe('Theme Page', () => {
    const newTheme = 'Tema Pendidikan';
    beforeEach(() => {
        cy.visit("/");
        cy.get("[data-testid=login-button]").click();
        cy.get('input[name="email"]').type("satutema@gmail.com");
        cy.get('input[name="password"]').type("adminsatutema");
        cy.get("[data-testid=login-auth-button]").click();
        cy.url().should("equal", "http://localhost:3000/admin");
        cy.visit('/admin/theme');
    });

    it('Should create new theme', () => {
        cy.get('[data-testid=open-modal-theme]').click();
        cy.get('input[name="title"]').type(newTheme);
        cy.get('select[name="category"]').select('UMKM')
        cy.get('[data-testid=button-add-theme]').click();
        cy.get('div').contains(newTheme).should('exist');
    });

    it('Should display content when content button is clicked and also delete it from content', () => {
        cy.get("[data-testid=row-0] [data-testid^=open-modal]").click();
        cy.get("[data-testid=button-edit-0]").click();
        cy.contains('Tambah Section').should('be.visible');

        // add fitur
        cy.contains('Navbar 1 - UMKM').click();
        cy.contains('Logo').should('be.visible');

        cy.get('[data-testid=row-0]').trigger('mouseover');
        cy.get('[data-testid=button-close-0]').click()
        cy.contains('Logo').should('not.exist')
    });

    it('Should edit theme', () => {
        cy.get("[data-testid=row-0] [data-testid^=open-modal]").click();
        cy.get("[data-testid=button-edit-0]").click();
        cy.contains('Tambah Section').should('be.visible');

        // add navbar
        cy.contains('Navbar 1 - UMKM').click();
        cy.contains('Logo').should('be.visible');

        // add hero
        cy.contains('Hero 1 - UMKM').click();
        cy.contains('Freelance').should('be.visible');

        // add fitur
        cy.contains('Feature 1 - UMKM').click();
        cy.contains('Tentang Kami').should('be.visible');

        // add menu
        cy.contains('Menu 1 - UMKM').click();
        cy.contains('Menu Kami').should('be.visible');

        // add testimoni
        cy.contains('Testimoni 1 - UMKM').click();
        cy.contains('Youre in good company').should('be.visible');

        // add gallery
        cy.contains('Galeri 1 - UMKM').click();
        cy.contains('Gallery').should('be.visible');

        // add footer
        cy.contains('Footer 1 - UMKM').click();
        cy.contains('2023 Satu Tema. All rights reserved').should('be.visible');

        cy.get('[data-testid=button-simpan]').click();
        cy.contains('Tema Berhasil diperbaruhi').should('be.visible')
        cy.reload();
        cy.wait(1000);
        cy.contains('Logo').should('be.visible');
    });

    it('Should delete theme', () => {
        cy.get("[data-testid=row-0] [data-testid^=open-modal]").click();
        cy.get("[data-testid=button-delete-0]").click();
        cy.contains("Hapus Tema").click()
        cy.contains('Tema berhasil dihapus').should('be.visible');
    });
});
