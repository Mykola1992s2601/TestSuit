/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Radio button', function() 
{
 
it('Check radio button',function() {
 //Check radio button
 const Practice = new practicePage()
Practice.navigate()
Practice.radioButton2().click().should('be.checked').and('have.value', 'radio2')

}  )

}  )