/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Test Case 1', function() 
{
 
it('Check radio button',function() {
 //Check radio buttons
 const Practice = new practicePage()
Practice.navigate()
Practice.radioButton2().click().should('be.checked').and('have.value', 'radio2')

}  )

}  )