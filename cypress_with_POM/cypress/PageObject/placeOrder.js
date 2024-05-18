/// <reference types="cypress" />


var search_input = "#q";
var search_button = ".search-box__button--1oH7";
class placeOrder
{
    constructor()
    {
        this.electricCatagoryLocator = ".item-box:nth-child(1) > .category-item:nth-of-type(1)"
        this.cellPhoneSubCategoryLocator = ".item-box:nth-child(2)"
        this.mobileDevice = ".item-box:nth-child(3)>.product-item:nth-child(1)"
        this.productPageTitle = "h1"
        this.productQuantityInputLocator = "#product_enteredQuantity_20"
        this.addCartLocator = "#add-to-cart-button-20"
        this.shoppingCartTitle = "h1"
        this.cartLinkLocator = "#topcartlink"
        this.termServiceLocator = "#termsofservice"
        this.checkOutBtnLocator = "#checkout"
        this.checkOutGuestBtn = ".checkout-as-guest-button"
        this.billingAddressFname = "#BillingNewAddress_FirstName"
        this.billingAddressLname = "#BillingNewAddress_LastName"
        this.billingAddressEmail = "#BillingNewAddress_Email"
        this.billingAddressCompany = "#BillingNewAddress_Company"
        this.billingAddressCountry = "#BillingNewAddress_CountryId"
        this.billingAdressState = "#BillingNewAddress_StateProvinceId"
        this.billingAdressCity = "#BillingNewAddress_City"
        this.billingAdress1 = "#BillingNewAddress_Address1"
        this.billingAdressZipCode = "#BillingNewAddress_ZipPostalCode"
        this.billingAdressPhoneNumber = "#BillingNewAddress_PhoneNumber"
        this.billingAdressFaxNumber = "#BillingNewAddress_FaxNumber"
        this.continueButtonLocator = "#billing-buttons-container > button[class='button-1 new-address-next-step-button']"
        this.shippingMethod = "#shippingoption_1"
        this.shippingMethodContinueBtn = "#shipping-method-buttons-container > button"
        this.paymentMethod = "#paymentmethod_1"
        this.paymentMethodContinue = "#payment-method-buttons-container > button"
        this.creditCardType = "#CreditCardType"
        this.cardHolderName = "#CardholderName"
        this.cardNumber = "#CardNumber"
        this.expirationYear = "#ExpireYear"
        this.cardCode = "#CardCode"
        this.paymentContinue = "#payment-info-buttons-container > button"
        this.confirmOrderBtn = "#confirm-order-buttons-container > .button-1"
        this.orderConfirmationText = ".section > .title"
    }
    goToElectricCategory()
    {
        cy.get(this.electricCatagoryLocator).click()
    }
    goToCellPhoneCategory()
    {
        cy.get(this.cellPhoneSubCategoryLocator).click()
    }
    clickOnNokiaLumia()
    {
        cy.get(this.mobileDevice).click()
    }
    verifyProductTitle(productTitle)
    {
        cy.get(this.productPageTitle).should("have.text",productTitle)
    }
    inputProductQuantity(quantity)
    {
        cy.get(this.productQuantityInputLocator).clear().type(quantity)
    }
    addToCart()
    {
        cy.get(this.addCartLocator).click()
    }
    goToShoppingCart()
    {
        cy.get(this.cartLinkLocator).click()
    }
    verifyShoppingCartData(shoppingCartTitle)
    {
        cy.get(this.shoppingCartTitle).should("have.text", shoppingCartTitle)
    }
    checkTermandService()
    {
        cy.get(this.termServiceLocator).check()
    }
    clickCheckoutButton()
    {
        cy.get(this.checkOutBtnLocator).click()
    }
    clickCheckOutAsGuest()
    {
        cy.get(this.checkOutGuestBtn).click()
    }
    inputFirstName(billingfname)
    {
        cy.get(this.billingAddressFname).type(billingfname)
    }
    inputLastName(billinglname)
    {
        cy.get(this.billingAddressLname).type(billinglname)
    }
    inputEmail(email)
    {
        cy.get(this.billingAddressEmail).type(email)
    }
    inputCompanyName(companyName)
    {
        cy.get(this.billingAddressCompany).type(companyName)
    }
    inputCountryName(countryName)
    {
        cy.get(this.billingAddressCountry).select(countryName)
    }
    inputAddressState(state)
    {
        cy.get(this.billingAdressState).select(state)
    }
    inputAddressCity(city)
    {
        cy.get(this.billingAdressCity).type(city)
    }
    inputAddress1(address)
    {
        cy.get(this.billingAdress1).type(address)
    }
    inputZipCode(zipCode)
    {
        cy.get(this.billingAdressZipCode).type(zipCode)
    }
    inputPhoneNumber(phoneNumber)
    {
        cy.get(this.billingAdressPhoneNumber).type(phoneNumber)
    }
    inputFaxNumber(faxNumber)
    {
        cy.get(this.billingAdressFaxNumber).type(faxNumber)
    }
    clickOnContinueBillingAddress()
    {
        cy.get(this.continueButtonLocator).click()
    }
    clickNextDayAir()
    {
        cy.get(this.shippingMethod).check()
    }
    clickShippingMethodContinueBtn()
    {
        cy.get(this.shippingMethodContinueBtn).click()
    }
    clickCreditCardPaymentMethod()
    {
        cy.get(this.paymentMethod).check()
    }
    clickPaymentMethodContinueBtn()
    {
        cy.get(this.paymentMethodContinue).click()
    }
    inputCreditCardInformation(creditCard,cardholderName,cardNumber,expirationYear,cardCode)
    {
        cy.get(this.creditCardType).select(creditCard)
        cy.get(this.cardHolderName).type(cardholderName)
        cy.get(this.cardNumber).type(cardNumber)
        cy.get(this.expirationYear).select(expirationYear)
        cy.get(this.cardCode).type(cardCode)
    }
    clickPaymentContinueBtn()
    {
        cy.get(this.paymentContinue).click()
    }
    clickOrderConfirmationBtn()
    {
        cy.get(this.confirmOrderBtn).click()
    }
    verifyOrderConfirmed(orderConfirmationText)
    {
        cy.get(this.orderConfirmationText).should("have.text", orderConfirmationText)
    }
}

export default placeOrder