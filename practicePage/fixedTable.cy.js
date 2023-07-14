/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Test Case 8', function() 
{
 
it('Fixed table should be visible, calculate records',function() {
 //Fixed table should be visible, calculate records
 const Practice = new practicePage()
Practice.navigate()
Practice.tableFixedName().scrollIntoView().should('be.visible').contains('Name')
Practice.tableFixedPosition().should('be.visible').contains('Position')
Practice.tableFixedCity().should('be.visible').contains('City')
Practice.tableFixedAmount().should('be.visible').contains('Amount')
Practice.fullTable().find('td').should('have.length', 36)
}  )
}  )