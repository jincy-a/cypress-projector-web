describe('contentdashboard', function(){
    
    it('login-contentpage', function (){

        cy.visit("https://projector.app/");
        cy.wait(2000);
        cy.get(".transparent").click();
        cy.url().should("eq","https://projector.app/newSign-in");
        cy.get(".input-field_inputField__3cdaW").type("layne@projector.app").should("have.value","layne@projector.app");//LOGIN
        cy.get(".button_blockText__3MB5s").click();
        cy.get("#password-input").type("Projectorapp@2022");
        cy.get("#sasdasddd").click();

        //cy.get(".input-field_errrMessage__BO92z").should("have.text","( Case Sensitive )Incorrect password");

        cy.wait(20000);
        cy.get(".header_options__2SF7N > .header_profileButton__2D8lI.header_regularView__1DUae > .header_profileMenuCurrentProfileDetailsIcon__2Iwlh").click();
        cy.get(".header_profileMenuLinksContainer__3821f > [href='/dashboard']").click();
        cy.get("[href='/your-videos']").click();
        cy.url().should("eq","https://projector.app/your-videos");
   })
})