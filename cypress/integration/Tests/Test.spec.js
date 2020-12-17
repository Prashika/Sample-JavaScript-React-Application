describe('Testing in PT App', () => {
    beforeEach(() => {

        //   sessionStorage.setItem('loggedInUser', '{"googleId":"113892972840753445772","imageUrl":"https://lh5.googleusercontent.com/-xphsAaaJ0cg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucn6zIDOsRNUTKCWzProl3lK_J0yQg/s96-c/photo.jpg","email":"jane.doe@pt.equinox.com","name":"Jane Doe","givenName":"Jane","familyName":"Doe"}');
        cy.visit('http://localhost:3000');
        //   cy.wait(35000);
    });

    it('Home Page Testing', () => {

        // cy.visit('http://localhost:3000')
        cy.get('.App-link').should('be.visible')
            .and('have.text', 'Learn React')
    });
});
