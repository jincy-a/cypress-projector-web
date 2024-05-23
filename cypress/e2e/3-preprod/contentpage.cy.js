describe('contentdashboard', function(){
    
    it('login-contentpage', function (){

        cy.visit("https://preprod.projector.app/");
        cy.get(".transparent").click(); 
        cy.url().should("eq","https://preprod.projector.app/newSign-in");
        cy.get(".input-field_inputField__3cdaW").type("robmarks@me.com").should("have.value","robmarks@me.com");
        cy.wait(2000);
        cy.get(".button_blockText__3MB5s").click();
        cy.get("#password-input").type("JuliaMarks1732!");
        cy.get("#sasdasddd").click();

        cy.wait(20000);
        cy.get(".header_options__2SF7N > .header_profileButton__2D8lI.header_regularView__1DUae > .header_profileMenuCurrentProfileDetailsIcon__2Iwlh").click();
        cy.get(".header_profileMenuLinksContainer__3821f > [href='/dashboard']").click();
        cy.get("[href='/your-videos']").click();
        cy.url().should("eq","https://preprod.projector.app/your-videos");
   })
})