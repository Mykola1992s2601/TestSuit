/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Test Case 9', function() 
{
 
it('Check Mousehover top button',function() {
 //Check Mousehover top button
 const Practice = new practicePage()
Practice.navigate()
Practice.mouseHover().scrollIntoView().invoke('show')
cy.contains('Top').click()
cy.url().should('include', 'top')
}  )
}  )