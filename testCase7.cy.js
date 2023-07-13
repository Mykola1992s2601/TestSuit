/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Test Case 7', function() 
{
 
it('Show field',function() {
 //Show field
 const Practice = new practicePage()
Practice.navigate()
Practice.hideField().click()
Practice.showFiled().click()
Practice.hideShowField().should('be.visible')

}  )
}  )