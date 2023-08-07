/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check radio button', function() 
// check "Hide field functionality"
{   
it('Radio button',function() {
 //Hide field
 const Practice = new practicePage()
Practice.navigate()
Practice.hideField().click()
Practice.hideShowField().should('not.be.visible')
}  )
}  )

