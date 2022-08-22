class LoginPage {
    getForgotPassword(){
        return cy.get('form[aria-label="loginForm"] a[href*="password-reset"]')
    }
}
export default LoginPage