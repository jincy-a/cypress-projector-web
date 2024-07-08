describe('upload', function(){
    
    it('login-upload', function (){

        cy.visit("https://projector.app/");
        cy.wait(2000);
        cy.get(".transparent").click();
        cy.url().should("eq","https://projector.app/newSign-in");
        cy.get(".input-field_inputField__3cdaW").type("layne@projector.app").should("have.value","layne@projector.app");//LOGIN
        cy.get(".button_blockText__3MB5s").click();
        cy.get("#password-input").type("Projectorapp@202");
        cy.get("#sasdasddd").click();

        //cy.get(".input-field_errrMessage__BO92z").should("have.text","( Case Sensitive )Incorrect password");
        
        cy.wait(2000);//FOR LOADING
        cy.get(".header_uploadButtonHover__3sVV1").click();//UPLOAD
        cy.wait(2000);
        cy.get(".upload-modal_addFilesSectionButton__5UEPl").click();//video
        cy.wait(4000);
        cy.get("#video-file").click();
    })  
}) 
