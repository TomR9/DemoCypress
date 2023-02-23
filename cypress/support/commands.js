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

Cypress.Commands.add('checkNum', (numberCheck, number) => {
    if(numberCheck%number == 0){
        for(let i = 0; i < number; i++){
            cy.log(numberCheck)
        }
    }
    else{
        for(let i = 0; i < 5; i++){
            cy.log(numberCheck)
        }
    }   
})

Cypress.Commands.add('checkText', (textCheck, text) => {
    assert(textCheck == text, "Correct text: " + textCheck)
})