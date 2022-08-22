class SignUp {
    doSignUp(){
        cy.get('form[aria-label="signup-form"] input[id="full_name"]').type('John Doe')
        cy.get('form[aria-label="signup-form"] input[id="password"]').type('examplePass_123')
        cy.get('form[aria-label="signup-form"] input[id="terms_and_conditions"]').check({force: true})
        cy.get('form[aria-label="signup-form"] input[id="subscription_opt_in"]').check({force: true})
        cy.get('form[aria-label="signup-form"] button[type="submit"]').click()
    }
}
export default SignUp