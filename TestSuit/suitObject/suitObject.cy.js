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
}
export default practicePage;