describe('openingpage', function(){
    
    it('prod', function (){
        cy.visit("https://projector.app/")
        cy.url().should("eq","https://projector.app/") // to verify
        cy.get('.MuiGrid-container > :nth-child(1) > .blue').click();
        cy.url().should("eq","https://projector.app/newSign-up"); //hub
   })
})