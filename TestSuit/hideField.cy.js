/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Hide field', function() 
{
 
it('Check hide field functionality',function() {
 //Hide field
 const Practice = new practicePage()
Practice.navigate()
Practice.hideField().click()
Practice.hideShowField().should('not.be.visible')
}  )
}  )