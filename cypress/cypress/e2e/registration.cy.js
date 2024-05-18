/// <reference types="cypress" />
describe('Nopcommerce registration feature Test-> ', () => {
  const registerLinkLocator = ".ico-register"
  const registerPageHeaderLocator = "h1"
  const genderMale = "#gender-male"
  const genderFemale = "#gender-female"
  const firstName = "#FirstName"
  const lastName = "#LastName"
  const dobDayLocator = "select[name='DateOfBirthDay']"
  const dobMonthLocator = "select[name='DateOfBirthMonth']"
  const dobYearLocator = "select[name='DateOfBirthYear']"
  const emailLocator = "#Email"
  const companyLocator = "#Company"
  const newsLetterLocator = "#Newsletter"
  const passwordLocator = "#Password"
  const confirmPasswordLocator = "#ConfirmPassword"
  const registerButtonLocator = "#register-button"
  const confirmationMessage = ".result"
  const logoutLocator = ".ico-logout"
  it("User go to the NopCommerce Home page",()=>
  {
    //verify we are in the registration page
    cy.fixture("register").then((testData) =>{
      testData.forEach(registerData =>{
          cy.visit("/")
          cy.get(registerLinkLocator).click()
          cy.get(registerPageHeaderLocator).contains(registerData.header_text)
          if (registerData.type == "Male")
          {
            cy.get(genderMale).check()
          }
          else if (registerData.type == "Female")
          {
            cy.get(genderFemale).check()
          }

          cy.get(firstName).type(registerData.firstName)
          cy.get(lastName).type(registerData.lastName)
          //selecting the data from the dropdown
          //assertion that we selected the right data
          let dateOfBirth = registerData.dob
          let dobDay = dateOfBirth.split("/")[0]
          let dobMonth = parseInt(dateOfBirth.split("/")[1])
          let dobYear = dateOfBirth.split("/")[2]
          cy.get(dobDayLocator).select(dobDay).invoke("val")
            .should("eq", dobDay)
          cy.get(dobMonthLocator).select(dobMonth)
          cy.get(dobYearLocator).select(dobYear).invoke("val")
            .should("eq", dobYear)
          cy.get(emailLocator).type(`${Date.now()}`+registerData.Email)
          cy.get(companyLocator).type(registerData.companyName).invoke("val")
            .should("eq", registerData.companyName)
          if (registerData.status == "checked")
          {
            cy.get(newsLetterLocator).check()
          }
          else if (registerData.status == "unchecked")
          {
            cy.get(newsLetterLocator).uncheck()
          }
          cy.get(passwordLocator).type(registerData.password).invoke("val")
            .should("eq", registerData.password)
          cy.get(confirmPasswordLocator).type(registerData.confirmPassword).invoke("val")
            .should("eq", registerData.confirmPassword)
          cy.get(registerButtonLocator).click()
          //asserting we have created a user
          cy.get(confirmationMessage).should("have.text", registerData.msg)
          cy.get(logoutLocator).click()
      })
    })
  })
})