/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Drop Down', function() 
{
 
it('Check drop-down',function() {
 //Check drop-down
 const Practice = new practicePage()
Practice.navigate()
Practice.dropDown().select('option3').should('have.value', 'option3')

}  )

}  )