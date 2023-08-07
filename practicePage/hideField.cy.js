/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check hide field functionality', function() 
{
 
it('Hide field',function() {
 //Check Mousehover top button
 const Practice = new practicePage()
Practice.navigate()
Practice.mouseHover().scrollIntoView().invoke('show')
cy.contains('Top').click()
cy.url().should('include', 'top')
}  )
}  )