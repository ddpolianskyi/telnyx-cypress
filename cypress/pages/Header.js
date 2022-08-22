class Header {
    getLogin(){
        return cy.get('header a').contains('Log In').first()
    }
    getAllProducts(){
        return cy.get('header ul > li:nth-child(1) a[href="/products"]')
    }
    getAllSolutions(){
        return cy.get('header ul > li:nth-child(3) a[href="/solutions"]')
    }
    getAllUseCases(){
        return cy.get('header ul > li:nth-child(3) a[href="/use-cases"]')
    }
    getNetwork(){
        return cy.get('header ul > li:nth-child(5) a[href*="/global-ip-network"]')
    }
    getResourcesLink(num){
        return cy.get(`header ul>li:nth-child(6) div:nth-child(${num}) > a`)
    }
    getCompany(){
        return cy.get('header div>div>div>ul>li:nth-child(8)')
    }
    getPricingLink(num){
        return cy.get(`header ul>li:nth-child(10) div:nth-child(${num}) > a`)
    }
    getContactUs(){
        return cy.get('header a[href="/contact-us"]').first()
    }
}
export default Header