/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check reload buton', function() 
{
 
it('Reload button',function() {
 //Check Mousehover reload button
 const Practice = new practicePage()
Practice.navigate()
Practice.mouseHover().scrollIntoView().invoke('show')
cy.contains('Top').click()
cy.url().should('include', 'top')
cy.contains('Reload').scrollIntoView().click({force: true})
cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/')
}  )
}  )