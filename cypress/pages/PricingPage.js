class PricingPage {
    getCountry(){
        return cy.get('main div:nth-child(1) > button[aria-haspopup="listbox"]').first()
    }
    getCountryList(){
        return cy.get('main div:nth-child(1) > ul li[role="option"] > a')
    }
    getCurrency(){
        return cy.get('main div:nth-child(2) > button[aria-haspopup="listbox"]')
    }
    getCurrencyList(){
        return cy.get('main div:nth-child(2) > button[aria-haspopup="listbox"] ~ div li > div')
    }
}
export default PricingPage