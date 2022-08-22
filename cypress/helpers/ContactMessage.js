class ContactMessage {
    doMessage(){
        cy.get('form select[id*="Reason_for_Contact"]').select('Support')
        cy.get('form input[id="FirstName"]').type('John')
        cy.get('form input[id="LastName"]').type('Doe')
        cy.get('form input[id="Email"]').type('example@email.com')
        cy.get('form select[id*="Phone_Number_Extension"]').select('+1')
        cy.get('form input[id*="Phone_Number_Base"]').type('1234567890')
        cy.get('form input[id="Website"]').type('https://example.com')
        cy.get('form textarea[id*="Form_Additional_Information"]').type('Example example example')
        cy.get('form input[name*="Subscription_Opt_In"]').check()
    }
}
export default ContactMessage