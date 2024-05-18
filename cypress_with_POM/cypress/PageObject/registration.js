/// <reference types="cypress" />


class registration
{
    constructor(){
        this.registerLinkLocator = ".ico-register"
        this.registerPageHeaderLocator = "h1"
        this.genderMale = "#gender-male"
        this.genderFemale = "#gender-female"
        this.firstName = "#FirstName"
        this.lastNameLocator = "#LastName"
        this.dobDayLocator = "select[name='DateOfBirthDay']"
        this.dobMonthLocator = "select[name='DateOfBirthMonth']"
        this.dobYearLocator = "select[name='DateOfBirthYear']"
        this.emailLocator = "#Email"
        this.companyLocator = "#Company"
        this.newsLetterLocator = "#Newsletter"
        this.passwordLocator = "#Password"
        this.confirmPasswordLocator = "#ConfirmPassword"
        this.registerButtonLocator = "#register-button"
        this.confirmationMessage = ".result"
        this.logoutLocator = ".ico-logout"
    }
    
    goToRegistrationPage()
    {
        cy.get(this.registerLinkLocator).click()
    }
    verifyRegistrationPageTitle(titleText)
    {
        cy.get(this.registerPageHeaderLocator).should("have.text", titleText)
    }
    inputGender(gender){
        if (gender == "Male")
            {
              cy.get(this.genderMale).check()
            }
            else if (gender == "Female")
            {
              cy.get(this.genderFemale).check()
            }
    }
    inputFirstName(fName)
    {
        cy.get(this.firstName).type(fName)
    }
    inputLastName(lastName)
    {
        cy.get(this.lastNameLocator).type(lastName)
    }
    inputDateOfBirth(dob)
    {
        let dateOfBirth = dob
        let dobDay = dateOfBirth.split("/")[0]
        let dobMonth = parseInt(dateOfBirth.split("/")[1])
        let dobYear = dateOfBirth.split("/")[2]
        cy.get(this.dobDayLocator).select(dobDay).invoke("val")
          .should("eq", dobDay)
        cy.get(this.dobMonthLocator).select(dobMonth)
        cy.get(this.dobYearLocator).select(dobYear).invoke("val")
          .should("eq", dobYear)
    }
    inputEmailAddress(email)
    {
        cy.get(this.emailLocator).type(`${Date.now()}`+email)
    }
    inputCompanyName(companyName)
    {
        cy.get(this.companyLocator).type(companyName).invoke("val")
            .should("eq", companyName)
    }
    checkUncheckNewsletter(state)
    {
        if (state == "checked")
            {
              cy.get(this.newsLetterLocator).check()
            }
            else if (state == "unchecked")
            {
              cy.get(this.newsLetterLocator).uncheck()
            }
    }
    inputPassword(password,confirmationPassword)
    {
        cy.get(this.passwordLocator).type(password).invoke("val")
          .should("eq", password)
          cy.get(this.confirmPasswordLocator).type(confirmationPassword).invoke("val")
          .should("eq", confirmationPassword)
    }
    clickRegisterButton()
    {
        cy.get(this.registerButtonLocator).click()
    }
    verifyRegistrationSuccess(message)
    {
        cy.get(this.confirmationMessage).should("have.text", message)
    }

    logout()
    {
        cy.get(this.logoutLocator).click()
    }

}

export default registration