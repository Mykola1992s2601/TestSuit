/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Check blinking text displayed on the page', function() 
{
 
it('Blinking text',function() {
 //Blinking text must be visible
 const Practice = new practicePage()
Practice.navigate()
Practice.blinkingText().should(be.visible)

}  )

}  )