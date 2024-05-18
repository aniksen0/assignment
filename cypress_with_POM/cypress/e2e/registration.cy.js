/// <reference types="cypress" />

import BasePage from  "../PageObject/BasePage";
const base_page = new BasePage;

import registration from  "../PageObject/registration";
const createAccount = new registration;

describe('Nopcommerce registration feature Test', () => {

  it("Verify user registration feature",()=>
  {
    cy.fixture("userRegistrationData").then((testData) =>{
      testData.forEach(registerData =>{
        base_page.goToWebsite()
        createAccount.goToRegistrationPage()
        createAccount.verifyRegistrationPageTitle(registerData.header_text)
        createAccount.inputGender(registerData.type)
        createAccount.inputFirstName(registerData.firstName)
        createAccount.inputLastName(registerData.lastName)
        createAccount.inputDateOfBirth(registerData.dob)
        createAccount.inputEmailAddress(registerData.Email)
        createAccount.inputCompanyName(registerData.companyName)
        createAccount.checkUncheckNewsletter(registerData.status)
        createAccount.inputPassword(registerData.password,registerData.confirmPassword)
        createAccount.clickRegisterButton()
        createAccount.verifyRegistrationSuccess(registerData.msg)
        createAccount.logout()


      })
    })
    

  })

  
})
