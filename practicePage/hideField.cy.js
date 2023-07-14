/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Test Case 6', function() 
{
 
it('Hide the field',function() {
 //Hide field
 const Practice = new practicePage()
Practice.navigate()
Practice.hideField().click()
Practice.hideShowField().should('not.be.visible')
}  )
}  )