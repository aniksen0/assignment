/// <reference types="cypress" />

import BasePage from  "../PageObject/BasePage";
const basePage = new BasePage;


import placeOrder from  "../PageObject/placeOrder";
const placeOrderFnc = new placeOrder ;

describe('Nopcommerce place order feature Test ', () => {
    it("placing a order through VISA", ()=>
    {
        basePage.goToWebsite()
        placeOrderFnc.goToElectricCategory()
        placeOrderFnc.goToCellPhoneCategory()
        placeOrderFnc.clickOnNokiaLumia()
        basePage.waitFor(1000)
        cy.fixture("placeOrderData").then((placeOrderData) =>{
            placeOrderFnc.verifyProductTitle(placeOrderData.productTitle)
            placeOrderFnc.inputProductQuantity(placeOrderData.itemQuantity)
            basePage.waitFor(2000)
            placeOrderFnc.addToCart()
            basePage.waitFor(2000)
            placeOrderFnc.goToShoppingCart()
            placeOrderFnc.verifyShoppingCartData(placeOrderData.shoppingCartTitle)
            placeOrderFnc.checkTermandService()
            placeOrderFnc.clickCheckoutButton()
            basePage.waitFor(2000)
            placeOrderFnc.clickCheckOutAsGuest()
            basePage.waitFor(2000)
            placeOrderFnc.inputFirstName(placeOrderData.firstName)
            placeOrderFnc.inputLastName(placeOrderData.lastName)
            placeOrderFnc.inputEmail(placeOrderData.Email)
            placeOrderFnc.inputCompanyName(placeOrderData.Company)
            placeOrderFnc.inputCountryName(placeOrderData.Country)
            placeOrderFnc.inputAddressState(placeOrderData.State)
            placeOrderFnc.inputAddressCity(placeOrderData.City)
            placeOrderFnc.inputAddress1(placeOrderData.Address1)
            placeOrderFnc.inputZipCode(placeOrderData.zipCode)
            placeOrderFnc.inputPhoneNumber(placeOrderData.phoneNumber )
            placeOrderFnc.inputFaxNumber(placeOrderData.faxNumber)
            placeOrderFnc.clickOnContinueBillingAddress()
            placeOrderFnc.clickNextDayAir()
            placeOrderFnc.clickShippingMethodContinueBtn()
            placeOrderFnc.clickCreditCardPaymentMethod()
            placeOrderFnc.clickPaymentMethodContinueBtn()
            placeOrderFnc.inputCreditCardInformation(placeOrderData.creditCard,placeOrderData.cardholderName,placeOrderData.cardNumber,placeOrderData.expirationYear,placeOrderData.cardCode)
            placeOrderFnc.clickPaymentContinueBtn()
            placeOrderFnc.clickOrderConfirmationBtn()
            placeOrderFnc.verifyOrderConfirmed(placeOrderData.orderConfirmationText)
        })

    })
})