/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Test Case 4', function() 
{
 
it('Select check box',function() {
 //Check radio buttons
 const Practice = new practicePage()
Practice.navigate()
Practice.checkBox1().check().should('be.checked').and('have.value', 'option1')

}  )

}  )