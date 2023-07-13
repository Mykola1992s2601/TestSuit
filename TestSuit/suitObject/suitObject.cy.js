class practicePage
{
    navigate()
    {
        return cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    } 
  reflection()
  {
    return cy.viewport(1600, 1200)
  }
  radioButton2()
  {
    return cy.get('[for="radio2"] > .radioButton')
  }
  checkBox1()
  {
    return cy.get('#checkBoxOption1')
  }
  dropDown()
  {
    return cy.get('#dropdown-class-example')
  }
  selectCountries()
  {
    return cy.get('#autocomplete')
  }
  alertName()
  {
    return cy.get('#name')
  }
  alertButton()
  {
    return cy.get('#alertbtn')
  }
  hideField()
  {
    return cy.get('#hide-textbox')
  }
  showFiled()
  {
    return cy.get('#show-textbox')
  }
  hideShowField()
  {
    return cy.get('#displayed-text')
  }
  tableFixedName()
  {
    return cy.get('thead > tr > :nth-child(1)')
  }
  tableFixedPosition()
  {
    return cy.get('thead > tr > :nth-child(2)')
  }
  tableFixedCity()
  {
    return cy.get('thead > tr > :nth-child(3)')
  }
  tableFixedAmount()
  {
    return cy.get('thead > tr > :nth-child(4)')
  }
  fullTable()
  {
    return cy.get('.tableFixHead > #product')
  }
  mouseHover()
  {
    return cy.get('div.mouse-hover-content')
  }
}
export default practicePage;