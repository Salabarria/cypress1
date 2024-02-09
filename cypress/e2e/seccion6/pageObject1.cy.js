import Proyecto1_PO from "../../support/pageObjects/proyecto1PO/proyecto1_PO.cy";
///<reference types="Cypress" />
import "cypress-file-upload"
import "cypress-xpath"


Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve `false` para evitar que Cypress falle la prueba
    return false;
  });
  
describe('PAge object model', ()=>{
    const master = new Proyecto1_PO()

    master.visitHome()  

    
    
     
/*
    before(function(){
        //opcion uno con promesas
        cy.fixture("mock_data_sigle_element").then(function(dataoo){
            globalThis.data = dataoo
        })
        


    })
    */
    // opcion con alias
   /* before(function(){
        cy.fixture("mock_data_sigle_element").as('datos_jason') //el alias
        })*/
    //opcion normal con primesas
    it("Test uno",()=>{
              
        
        cy.get('#firstname').should('be.visible').type(data.First_name)
        cy.get('#surname').should('be.visible').type(data.Last_name)
        cy.get('#age').should('be.visible').type(data.Age)
        cy.get('#country').should('be.visible').select(data.Country)
        cy.get('#notes').should('be.visible').type(data.Notes)
        cy.get('[type="submit"]').should('be.visible').click({force:true})
        

    })

    it("Test dos",()=>{
            cy.get('@datos_jason').then((data1)=>{
                cy.get('#firstname').should('be.visible').type(data1.First_name)            
                cy.get('#surname').should('be.visible').type(data1.Last_name)
                cy.get('#age').should('be.visible').type(data1.Age)
                cy.get('#country').should('be.visible').select(data1.Country)
                cy.get('#notes').should('be.visible').type(data1.Notes)
                cy.get('[type="submit"]').should('be.visible').click({force:true})



            })

            
          })
        
it("Test tres",()=>{

    cy.fixture("MOCK_DATA_arrayelements").then(testdatasarray=>{
        testdatasarray.forEach(element => {
            cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html'),
            cy.title().should('eq','Input Validation')
            cy.wait(1000)

            cy.get('#firstname').should('be.visible').type(element.First_name)            
            cy.get('#surname').should('be.visible').type(element.Last_name)
            cy.get('#age').should('be.visible').type(data1.Age)
            cy.get('#country').should('be.visible').select(data1.Country)
            cy.get('#notes').should('be.visible').type(data1.Notes)
            cy.get('[type="submit"]').should('be.visible').click({force:true})

            
        });




    })
            

            
          })


it.only("test probando comando en ficheo de comamands",()=>{
            cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html'),
            cy.title().should('eq','Input Validation')
            cy.wait(1000)   
            //cy.comandguille("mock_data_sigle_element")
            //cy.log("empieza el comando definido en fichero diferente")
           // cy.loginguille("mock_data_sigle_element")

            ////////////////////////
            cy.log("empieza el comando definido directorio diferente")
            cy.loginguillecomando("mock_data_sigle_element")
            cy.get('[type="submit"]').should('be.visible').click({force:true})
            
         })
    
          


        
              
        
        
        

    

})