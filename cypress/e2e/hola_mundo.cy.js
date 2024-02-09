describe('MI primer test en cypress', () => {
     
    it.only('Esto es el test mediante esta funcion it', () => {
      cy.log("wellcome to cypress");
      cy.visit("https://rodrigovillanueva.com.mx/");
      cy.get('#menu-bar').click();
      cy.get('[data-link_id="link-2078272802"] > .icaret').click();
      cy.get(':nth-child(3) > .menu > :nth-child(1) > a > span').click();
      cy.get('#edit-name').type("guillermo");
      cy.get('#edit-email').type("guiille@example.com")
      cy.get('#edit-subject').type("filantropo")
      cy.get('#edit-message').type(" mi primer mensaje filantropico")
      cy.get('#edit-actions-submit').click()
      cy.title().should("eql","Home Page | RodrigoVillanueva.com.mx")
      cy.get('.alert').contains("Your message has been sent")
      
   
    })
    it('Test a google', () => {
      cy.visit("https://google.com");
      cy.get('#APjFqb').type("cypress io{enter}") 
      cy.wait(2000)
      cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()

      
      
      
      
   
    })

  })