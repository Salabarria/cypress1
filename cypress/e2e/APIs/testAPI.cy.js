///<reference types="Cypress" />
import "cypress-file-upload"
import "cypress-xpath"


Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve `false` para evitar que Cypress falle la prueba
    return false;
  });
  
describe('test de apis json-server', ()=>{

    
    
     
///////////////////////////////////////////////////////////////
    it("Test uno",()=>{  
      let resp = "";
        cy.log('hello test uno')
        cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')
        
        cy.get('@comments').then((response) => {
              cy.log(response.headers.vary)
              expect(response.body).to.have.length(500)
              expect(response).to.have.property('headers')
               expect(response).to.have.property('duration')
              
               
})
       

    })
/////////////////////////////////////////////////
    it("Test dos  metodo GET",()=>{
        let resp = "";
        cy.log('hello test dos')
        //resp = cy.request('http://localhost:3000/posts')
        //resp.its('status').should('equal',200)
        cy.request('http://localhost:3000/posts').then((response)=>{

        //cy.get('@posts').then((response)=>{
         

          cy.log(response.body[1].title)
          cy.log(response.headers.date)
          cy.log(response.headers.connection)
          cy.log(response.status)
          




        })


            
            
    })
    //////////////////////////////////////////////    
    it("Test tress metodo GET",()=>{
      cy.request({
        method:'GET',
        url:'http://localhost:3000/posts',
        headers: { accept:'application/json'}
      }).then((response)=>{
        cy.log(response.headers)
        cy.log(response.headers.date)
        cy.log(response.headers.connection)
        cy.log(response.status)
        let datos;
        //datos = JSON.parse(JSON.stringify(response.body))
        datos = response.body
        cy.log(datos)
        expect(datos[0]).has.property('title','a title')



      })


     


          
          
  })
///////////////////////////////////////////////////////////


//////////////////////////////////////////////    
it("Test metodo POST",()=>{
  cy.request({
    method:'POST',
    url:'http://localhost:3000/posts',
    body: { "id": "23", "title": "cypress23", "author": "guille23" }
  }).then((response)=>{
    cy.log(response.status)  ///  el status de la resonse
    cy.log(response.body)   // el body de la response
    cy.log(response.headers)  // el header de la response
    
    
    //expect(datos[0]).has.property('title','a title')



  })


 


      
      
})

////////////////////////////////
it("Test adicionando varios elemntos",()=>{


  for(let x =1;x<=10;x++)
  {
    let tx = Math.random().toString();


    cy.request({
      method:'POST',
      url:'http://localhost:3000/posts',
      body: { "id": x, "title": "cypress"+tx, "author": "guille"+tx }
    }).then((response)=>{

      cy.log(response.status)  ///  el status de la resonse
      cy.log(response.body)   // el body de la response
      cy.log(response.headers)  // el header de la response
      
        })
      }
    })
  
////////////////////////////////////////
it.only("Test adicionando varios elemntos",()=>{


  
  
    let tx = Math.floor(Math.random()*10)
    cy.request({
      method:'DELETE',
      url:'http://localhost:3000/posts/'+ 1,
      
    }).then((response)=>{

      cy.log(response.status)  ///  el status de la resonse
      cy.log(response.body)   // el body de la response
      cy.log(response.headers)  // el header de la response
      
        })
      
    })
  


 


      
      


  }) // final del describe()