/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check URL address of new page', function() 
{
 
it('URL address',function() {
 //Check alert
 const Practice = new practicePage()
Practice.navigate()
Practice.homePage().click()
cy.url().should('eq', 'https://www.rahulshettyacademy.com/')

}  )

}  )