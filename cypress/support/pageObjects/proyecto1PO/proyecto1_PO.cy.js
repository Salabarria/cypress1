class Proyecto1_PO{
    visitHome(){
        let tiempo = 1000
        before(()=>{
            cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html'),
            cy.title().should('eq','Input Validation')
            cy.wait(tiempo)


        })


    }




}// final
export default Proyecto1_PO;
