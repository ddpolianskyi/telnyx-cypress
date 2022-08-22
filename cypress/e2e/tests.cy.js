import Header from '../pages/Header'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import NetworkPage from '../pages/NetworkPage'
import BlogPage from '../pages/BlogPage'
import PricingPage from '../pages/PricingPage'

import SignUp from '../helpers/SignUp'
import Login from '../helpers/Login'
import PasswordReset from '../helpers/PasswordReset'
import ContactMessage from '../helpers/ContactMessage'

const header = new Header()
const homePage = new HomePage()
const loginPage = new LoginPage()
const productsPage = new ProductsPage()
const networkPage = new NetworkPage()
const blogPage = new BlogPage()
const pricingPage = new PricingPage()

const signUp = new SignUp()
const login = new Login()
const passwordReset = new PasswordReset()
const contactMessage = new ContactMessage()
beforeEach(() => {
	cy.viewport(1366, 768)
	cy.visit('https://telnyx.com/')
})
it('Cookies accept', () => {
	cy.get('body > div > div > div button').last().click()
})
it('Sign up', () => {
	homePage.doSignUp()
	cy.url().should('contain', '/sign-up')
	signUp.doSignUp()
})
it('Log in', () => {
	header.getLogin().click()
	login.doLogIn()
})
it('Password reset', () => {
	header.getLogin().click()
	loginPage.getForgotPassword().click()
	cy.url().should('contain', '/password-reset')
	passwordReset.doResetPassword()
})
it('Products page', () => {
	header.getAllProducts().click({force: true})
	cy.url().should('contain', '/products')
	productsPage.getVoiceProduct(1).click()
	cy.url().should('contain', '/sip-trunks')
})
it('Solutions page', () => {
	header.getAllSolutions().click({force: true})
	cy.url().should('contain', '/solutions')
	cy.visit('https://telnyx.com')
	header.getAllUseCases().click({force: true})
	cy.url().should('contain', '/use-cases')
})
it('Network page', () => {
	header.getNetwork().click({force: true})
	cy.url().should('contain', '/global-ip-network')
	networkPage.getCompetitorNetworks().click({multiple: true})
	networkPage.getCompetitorNetworks().should('have.attr', 'aria-selected', 'true')
})
it('Resources page', () => {
	header.getResourcesLink(3).click({force: true})
	cy.url().should('contain', '/resources')
	blogPage.getSearch().type('sms').type('{enter}')
	cy.wait(8000)
	blogPage.getSearchKey().should('contain', 'sms')
	cy.visit('https://telnyx.com/resources')
	blogPage.getFilterByContent().contains('New Products & Features').click()
	blogPage.getArticleCategory().should('contain', 'New Products & Features')
})
it('Pricing page', () => {
	header.getPricingLink(3).click({force: true})
	cy.url().should('contain', '/messaging')
	pricingPage.getCountry().click()
	pricingPage.getCountryList().contains('Turkey').click()
	cy.url().should('contain', '/tr')
	pricingPage.getCurrency().click()
	pricingPage.getCurrencyList().contains('EUR').click()
	pricingPage.getCurrency().should('contain', 'EUR')
})
it('Contact page', () => {
	header.getContactUs().click()
	cy.url().should('contain', '/contact-us')
	contactMessage.doMessage()
})