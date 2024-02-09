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

import './logincomand';
import './logincomands/loginguille'

Cypress.Commands.add("comandguille",(jsonel)=>{
    cy.fixture(jsonel).then((login)=>{
        cy.get('#firstname').should('be.visible').type(login.First_name)            
        cy.get('#surname').should('be.visible').type(login.Last_name)
        cy.get('#age').should('be.visible').type(login.Age)
        cy.get('#country').should('be.visible').select(login.Country)
        cy.get('#notes').should('be.visible').type(login.Notes)
        
    })
})