class Login {
    doLogIn(){
        cy.get('form[aria-label="loginForm"] input[name="email"]').type('example@email.com')
        cy.get('form[aria-label="loginForm"] input[name="password"]').type('examplePass_123')
        cy.get('form[aria-label="loginForm"] input[name="remember_me"]').check({force: true})
        cy.get('form[aria-label="loginForm"] button').click()
    }
}
export default Login