/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check alert functionality', function() 
{
 
it('Check alert',function() {
 //Check alert
 const Practice = new practicePage()
Practice.navigate()
Practice.alertName().type('Mykola')
Practice.alertButton().click()
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello Mykola, share this practice page and share your knowledge')
})

}  )

}  )