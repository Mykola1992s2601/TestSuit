/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Test Case 4', function() 
{
 
it('Select check box',function() {
 //Check radio buttons
 const Practice = new practicePage()
Practice.navigate()
Practice.dropDown().select('option3').should('have.value', 'option3')

}  )

}  )