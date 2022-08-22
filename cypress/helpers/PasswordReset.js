class PasswordReset {
    doResetPassword(){
        cy.get('form input').type('example@email.com')
        cy.get('form button').click()
    }
}
export default PasswordReset