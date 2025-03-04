describe('openingpageSignup', function () {

    it('signup', function () {
        cy.fixture('signupCredentials').then((data) => {
            data.users.forEach((newUser) => {
                cy.visit("https://projector.app/")
                cy.url().should("eq", "https://projector.app/") // to verify
                cy.wait(4000);
                cy.get('.MuiGrid-container > :nth-child(1) > .blue').click();//signup button
                cy.url().should("eq", "https://projector.app/newSign-up");
                cy.get(':nth-child(2) > .input-field_inputField__3cdaW').type(newUser.username);//username
                cy.get(':nth-child(1) > .input-field_inputField__3cdaW').type(newUser.firstName);//firstname
                cy.get(':nth-child(3) > .input-field_inputField__3cdaW').type(newUser.lastName);//lastname
                cy.wait(4000);
                cy.get('.button_blockText__3MB5s').click();
                cy.get('#password-input').type(newUser.password);//password
                cy.wait(4000);
                cy.get('.button_blockText__3MB5s').click();
                cy.wait(4000);
                cy.get('.PhoneInputInput').type(newUser.phoneNumber); //phonenumber
                cy.intercept('POST', '/api/sendOtpToMobile').as('otp');//otp
                cy.get('.button_blockText__3MB5s').click();
               
                // Declare the variable outside the callback
                let storedId;
                let otp;
                cy.wait('@otp').its('response').then((response) => {
                    // Check the status code
                    expect(response.statusCode).to.eq(200);
                    // Store the response.data.id in the variable
                    storedId = response.body.id;
                    // Log and use the sliced ID
                    const slicedId = storedId.slice(2, 7);
                    console.log('Sliced ID:', slicedId);
                    // Assign slicedId to otp if needed
                    otp = slicedId;
                    // Log the stored OTP
                    cy.log('Stored OTP:', otp);
                    // Use the otp variable
                    cy.get(':nth-child(1) > .verificationCode_codeInput__1CAYc').type(otp);
                 });
                
                cy.get('.button_blockText__3MB5s').click();
                cy.wait(2000);
                //cy.url().should("eq","https://projector.app/welcome?");//Welcome page
                cy.wait(6000);
                cy.get(':nth-child(1) > .button_blockText__3MB5s').click();//start viewing
                cy.wait(2000);
                cy.get('.header_options__2SF7N > .header_profileButton__2D8lI.header_regularView__1DUae > .header_profileMenuCurrentProfileDetailsIcon__2Iwlh').click();//profile button
                cy.wait(2000);
                cy.get('.header_profileMenuLinksContainer__3821f > [href="/newSign-in"]').click();//logout button
                cy.wait(4000);
                cy.url().should("eq", "https://projector.app/newSign-in");//verify logout
                cy.wait(2000);
                cy.get('.newSign-in_backLink__2ujWH').click();//back to main page
                //cy.url().should("eq", "https://projector.app/");//verify 
            })
        })
    })
})
