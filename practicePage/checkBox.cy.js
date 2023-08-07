/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check checkbox functionality', function() 
{
 
it('Select checkbox',function() {
 //Select checkbox
 const Practice = new practicePage()
Practice.navigate()
Practice.checkBox1().check().should('be.checked').and('have.value', 'option1')

}  )

}  )