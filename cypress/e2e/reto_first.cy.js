///<reference types="Cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve `false` para evitar que Cypress falle la prueba
    return false;
  });

  
require("cypress-xpath")
describe('reto1 varias test', () => {
     
    it('test1 del reto', () => {
        cy.visit("https://demoqa.com")
        cy.title().should("eq","DEMOQA")
        cy.get('body').should("be.visible").click()
        //cy.get('.card-body')
        cy.get(':nth-child(1) > :nth-child(1) > .card-body').click({ force: true })
        //cy.wait(1500)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click({ force: true })
        cy.wait(1500)
        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.wait(1500)
        cy.get('#searchBox').should("be.visible").clear()
   
   
    })
    it.only('Test2 del reto1', () => {
        cy.visit("https://demoqa.com")
        cy.title().should("eq","DEMOQA")
        cy.get('body').should("be.visible").click()
        //cy.get('.card-body')
        cy.get(':nth-child(1) > :nth-child(1) > .card-body').click({ force: true })
        //cy.wait(1500)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click({ force: true })
        cy.wait(1500)
 
        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.wait(1500)
        cy.xpath("//*[@id='searchBox']").should("be.visible").type("guille")
        cy.get('#searchBox').should("be.visible").clear()


    
      
   
    })

  })