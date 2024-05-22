describe('admin-panel', function(){
    
    it('preprod', function (){
        cy.visit("https://preprod.backend.projector.app/index.php/login");
        cy.url().should("eq","https://preprod.backend.projector.app/index.php/login"); // to verify
        cy.get('#email').type("admin@projectorapp.com");
        cy.get('#password').type("qwerty123!");
        cy.get('.btn').click();
        cy.get('.swal-button').click();
        cy.url().should("eq","https://preprod.backend.projector.app/index.php/dashboard");
    })
})