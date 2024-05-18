/// <reference types="cypress" />

class BasePage
{

    goToWebsite(url)
    {
        if(url == null)
        {
            cy.visit("https://demo.nopcommerce.com/")
        }
        else
        {
            cy.visit("https://demo.nopcommerce.com/"+url)
        }
    }
    
    waitFor(milisecond)
    {
        cy.wait(milisecond)
    }

    

}

export default BasePage