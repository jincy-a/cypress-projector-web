describe('admin-panel', function(){
    
    it('prod', function (){
        cy.visit("https://backend.projectorstream.com/index.php/login/");
        cy.url().should("eq","https://backend.projectorstream.com/index.php/login/"); // to verify
        cy.get('#email').type("admin@projectorapp.com");
        cy.get('#password').type("Skq02&1}N63k}2");
        cy.get('.btn').click();
        cy.get('.swal-button').click();
        cy.url().should("eq","https://backend.projectorstream.com/index.php/dashboard");
    })
})
