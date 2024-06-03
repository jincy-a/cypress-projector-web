describe('login', function () {

    it('login', function () {
        cy.fixture('credentials').then((credentials) => {
            console.log('credentials', credentials);
            let credentialspassed=[]
            for (const key in credentials) {
                if (credentials.hasOwnProperty(key)) {
                    const credential = credentials[key];
                    // cy.fixture('credentials').then((credentials) => {
                    //     console.log('credentials', credentials);
                    //     credentials.for((credential) => {

                    cy.visit("https://projector.app/");//visit url
                    cy.intercept('GET', '/compose/406dbcc3-7c47-4249-8c0c-79050fd2e989').as('loadurl');//intecept url
                    cy.url().should('eq', 'https://projector.app/');//verify
                    cy.wait('@loadurl').its('response.statusCode').should('eq', 200);//intecept url
                    cy.wait(1000);
                    cy.get(".transparent").click();//login button
                    cy.url().should("eq", "https://projector.app/newSign-in");//verify
                    cy.intercept('POST', '/api/v4/signin').as('loginRequest');//intercept login
                    cy.get(".input-field_inputField__3cdaW").type(credential.username);
                    cy.get(".button_blockText__3MB5s").click();
                    cy.get("#password-input").type(credential.password);
                    cy.get("#sasdasddd").click();
                    //cy.get(".input-field_errrMessage__BO92z").should("have.text","( Case Sensitive )Incorrect password"); 
                    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);//intercept login
                    cy.wait(2000);
                    cy.url().should("eq", "https://projector.app/");// verify login
                    credentialspassed.push[cy.url()=="https://projector.app/"]
                    cy.wait(10000);
                    cy.get('.header_options__2SF7N > .header_profileButton__2D8lI.header_regularView__1DUae').click();//profile button
                    cy.wait(2000);
                    cy.get('.header_profileMenuLinksContainer__3821f > [href="/newSign-in"]').click();//logout button
                    cy.wait(4000);
                    // cy.url().should("eq", "https://projector.app/newSign-in");//verify logout
                    // cy.wait(2000);
                    //cy.get('.newSign-in_backLink__2ujWH').click();//back to main page
                    // cy.url().should("eq", "https://projector.app/");//verify 

                }
            }
            const allTrue = credentialspassed.every(element => element === true);
    // Assertion in Cypress
    cy.expect(allTrue).to.be.true;
        })
    })
})  