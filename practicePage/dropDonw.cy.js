/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check drop-down functionality', function() 
{
 
it('Chose drop-down option',function() {
 //Check drop-down
 const Practice = new practicePage()
Practice.navigate()
Practice.dropDown().select('option3').should('have.value', 'option3')

}  )

}  )