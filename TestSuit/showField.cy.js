/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Show filed', function() 
{
 
it('Check show field functionality',function() {
 //Show field
 const Practice = new practicePage()
Practice.navigate()
Practice.hideField().click()
Practice.showFiled().click()
Practice.hideShowField().should('be.visible')

}  )
}  )