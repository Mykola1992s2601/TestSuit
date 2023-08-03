/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check dynamic drop-down', function() 
{
 
it('Select country',function() {
 //Check dynamic drop-down
 const Practice = new practicePage()
Practice.navigate()
Practice.selectCountries().type('Uk')
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    if($e1.text() === "Ukraine")
    {
    $e1.click()
    } 
      
    })
}  )

}  )