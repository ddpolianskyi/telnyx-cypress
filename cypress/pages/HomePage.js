class HomePage {
    doSignUp(){
        cy.get('main input[type="email"]').type('example@email.com')
        cy.get('main button[type="submit"]').click()
    }
}
export default HomePage