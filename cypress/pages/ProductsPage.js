class ProductsPage{
    getVoiceProduct(num){
        return cy.get(`main div > ul:nth-child(2) li:nth-child(${num}) a`)
    }
}
export default ProductsPage