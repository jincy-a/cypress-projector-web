describe('contentdashboard', function(){
    
    it('login-contentpage', function (){

        cy.visit("https://preprod.projector.app/");
        cy.get(".transparent").click(); 
        cy.url().should("eq","https://preprod.projector.app/newSign-in");
        cy.get(".input-field_inputField__3cdaW").type("layne256@yopmail.com").should("have.value","layne256@yopmail.com");
        cy.wait(2000);
        cy.get(".button_blockText__3MB5s").click();
        cy.get("#password-input").type("Projectorapp@2024");
        cy.get("#sasdasddd").click();

        cy.wait(10000);
        cy.get(".header_profileMenuLink__3S2_U").click();
        cy.wait(10000);
        cy.get('[href="/your-videos"]').click();
        cy.url().should("eq","https://preprod.projector.app/your-videos");
   })
})