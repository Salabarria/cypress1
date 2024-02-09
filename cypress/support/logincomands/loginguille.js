Cypress.Commands.add("loginguillecomando",(jsonel)=>{
    cy.fixture(jsonel).then((login)=>{
        cy.get('#firstname').should('be.visible').type(login.First_name)            
        cy.get('#surname').should('be.visible').type(login.Last_name)
        cy.get('#age').should('be.visible').type(login.Age)
        cy.get('#country').should('be.visible').select(login.Country)
        cy.get('#notes').should('be.visible').type(login.Notes)
        
    })
})