import "cypress-file-upload"
import "cypress-xpath"
Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve `false` para evitar que Cypress falle la prueba
    return false;
  });

describe("upload image",()=>{

    it("test1 upload file",()=>{

        //cy.visit("https://demoqa.com/automation-practice-form")
        //cy.title().should("eq","DEMOQA")
       // cy.wait(1000)
        const ruta = "ima1.jpg"
        
        cy.visit("https://demoqa.com")
        cy.title().should("eq","DEMOQA")
        cy.get('body').should("be.visible").click()
        
        cy.get(':nth-child(1) > :nth-child(1) > .card-body').click({ force: true })
        
        cy.get(':nth-child(2) > .group-header > .header-wrapper').click({ force: true })
        
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click({ force: true })
        cy.wait(1000)

        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)

        
    })
})
