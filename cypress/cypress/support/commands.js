// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('generateRandomEmail', () => {
    function email()
    {
        cy.fixture("register").then((registerData) =>{
            email_address =  registerData.Email.split("@")[0]
            email_domain = registerData.Email.split("@")[1]
            random_number = Math.floor(Math.random() * 999);
            new_email = email_address +random_number + email_domain
        })
        return new_email
    }
});