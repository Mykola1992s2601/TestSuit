/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('homepage', function() 
{
 
it('Check URL address',function() {
 //Check alert
 const Practice = new practicePage()
Practice.navigate()
Practice.homePage().click()
cy.url().should('eq', 'https://www.rahulshettyacademy.com/')

}  )

}  )