describe('openingpage', function(){
    
    it('preprod', function (){
        cy.visit("https://preprod.projector.app/")
        cy.url().should("eq","https://preprod.projector.app/") // to verify
        cy.get('.MuiGrid-container > :nth-child(1) > .blue').click();
        cy.url().should("eq","https://preprod.projector.app/newSign-up");
   })
})