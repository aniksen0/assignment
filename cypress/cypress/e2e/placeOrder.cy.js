/// <reference types="cypress" />
describe('Nopcommerce place order feature Test-> ', () => {
    const electricCatagoryLocator = ".item-box:nth-child(1) > .category-item:nth-of-type(1)"
    const cellPhoneSubCategoryLocator = ".item-box:nth-child(2)"
    const mobileDevice = ".item-box:nth-child(3)>.product-item:nth-child(1)"
    const productPageTitle = "h1"
    const productQuantityInputLocator = "#product_enteredQuantity_20"
    const addCartLocator = "#add-to-cart-button-20"
    const shoppingCartTitle = "h1"
    const cartLinkLocator = "#topcartlink"
    const termServiceLocator = "#termsofservice"
    const checkOutBtnLocator = "#checkout"
    const checkOutGuestBtn = ".checkout-as-guest-button"
    const billingAddressFname = "#BillingNewAddress_FirstName"
    const billingAddressLname = "#BillingNewAddress_LastName"
    const billingAddressEmail = "#BillingNewAddress_Email"
    const billingAddressCompany = "#BillingNewAddress_Company"
    const billingAddressCountry = "#BillingNewAddress_CountryId"
    const billingAdressState = "#BillingNewAddress_StateProvinceId"
    const billingAdressCity = "#BillingNewAddress_City"
    const billingAdress1 = "#BillingNewAddress_Address1"
    const billingAdressZipCode = "#BillingNewAddress_ZipPostalCode"
    const billingAdressPhoneNumber = "#BillingNewAddress_PhoneNumber"
    const billingAdressFaxNumber = "#BillingNewAddress_FaxNumber"
    const continueButtonLocator = "#billing-buttons-container > button[class='button-1 new-address-next-step-button']"
    const shippingMethod = "#shippingoption_1"
    const shippingMethodContinueBtn = "#shipping-method-buttons-container > button"
    const paymentMethod = "#paymentmethod_1"
    const paymentMethodContinue = "#payment-method-buttons-container > button"
    const creditCardType = "#CreditCardType"
    const cardHolderName = "#CardholderName"
    const cardNumber = "#CardNumber"
    const expirationYear = "#ExpireYear"
    const cardCode = "#CardCode"
    const paymentContinue = "#payment-info-buttons-container > button"
    const confirmOrderBtn = "#confirm-order-buttons-container > .button-1"
    const orderConfirmationText = ".section > .title"
    it("User go to the NopCommerce Home page",()=>
    {
        //User go to the NopCommerce Home page
        cy.visit("/")
        //User click "Cell phones" option from "Electronics" category

        cy.get(electricCatagoryLocator).click()
        cy.get(cellPhoneSubCategoryLocator).click()
        //User click on the "Nokia Lumia 1020" for product details
        cy.get(mobileDevice).click()
        
        cy.fixture("placeholder").then((testData) =>{
            //validating we are in the nokia lumia product page.
            cy.get(productPageTitle).should("have.text",testData.productTitle)
            //User set the quantity number 2 in the quantity field
            cy.get(productQuantityInputLocator).clear().type(testData.itemQuantity)
            cy.wait(1000)
            //User click on the "ADD TO CART" button
            cy.get(addCartLocator).click()
            cy.wait(2000)
            //User go to the shipping cart page
            cy.get(cartLinkLocator).click()
            
            //validating we are in the shopping cart
            cy.get(shoppingCartTitle).should("have.text", testData.shoppingCartTitle)
            //User accept terms conditions and click checkout button
            cy.get(termServiceLocator).check()
            cy.wait(2000)
            //User click checkout as guest button
            cy.get(checkOutBtnLocator).click()
            cy.wait(2000)
            cy.get(checkOutGuestBtn).click()
            // User input all the billing details and click continue
            cy.get(billingAddressFname).type(testData.firstName)
            cy.get(billingAddressLname).type(testData.lastName)
            cy.get(billingAddressEmail).type(testData.Email)
            cy.get(billingAddressCompany).type(testData.Company)
            cy.get(billingAddressCountry).select(testData.Country)
            cy.get(billingAdressState).select(testData.State)
            cy.get(billingAdressCity).type(testData.City)
            cy.get(billingAdress1).type(testData.Address1)
            cy.get(billingAdressZipCode).type(testData.zipCode)
            cy.get(billingAdressPhoneNumber).type(testData.phoneNumber)
            cy.get(billingAdressFaxNumber).type(testData.faxNumber)
            cy.get(continueButtonLocator).click()
        })
        // User select shipping method "Next Day Air" and click continue
        cy.get(shippingMethod).check()
        cy.get(shippingMethodContinueBtn).click()
        // User select payment method "Credit Card" and click continue
        cy.get(paymentMethod).check()
        cy.get(paymentMethodContinue).click()
        //User select "Visa" card and input card information
        cy.fixture("placeholder").then((testData) =>{
            cy.get(creditCardType).select(testData.creditCard)
            cy.get(cardHolderName).type(testData.cardholderName)
            cy.get(cardNumber).type(testData.cardNumber)
            cy.get(expirationYear).select(testData.expirationYear)
            cy.get(cardCode).type(testData.cardCode)
            cy.get(paymentContinue).click()
            // User click confirm button to place the order
            cy.get(confirmOrderBtn).click()
            cy.get(orderConfirmationText).should("have.text", testData.orderConfirmationText)
        })
        
    })
  })