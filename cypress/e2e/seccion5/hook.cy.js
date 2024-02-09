import "cypress-file-upload"
import "cypress-xpath"
Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve `false` para evitar que Cypress falle la prueba
    return false;
  });
  describe("hooksb ",()=>{
    

    it("invoke1",()=>{
        let tiempo = 1000
        
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")
        cy.wait(1000)
        //*[@id="firstname"]

        cy.xpath('/html/body/div/div[3]/form/label[1]').invoke("text").as("titulo")
        cy.get("@titulo").should("contain","First name").then(()=>{
            cy.xpath('//*[@id="firstname"]').type("guillermo")

            



        })

       // cy.get('[for="firstname"]')
        cy.get('[argumentos]').should('be.visible').type('texto')
        cy.wait(tiempo)
    })
})