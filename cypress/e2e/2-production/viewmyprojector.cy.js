describe('view-my-projector', function(){
    
    it('login-viewmyprojector', function (){

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
        cy.get("[data-index='0'] > .access_profileLink__1ef8i > .access_profileContainer__3sb9L > .access_profileImage__1DopC > a > img").click();//view my projector
        cy.wait(20000);
        cy.url().should("eq","https://projector.app/profile");
        cy.get(".profile-page_mainContent__1zAzX").should("be.visible");
    }) 
}) 