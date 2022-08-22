class NetworkPage {
    getCompetitorNetworks(){
        return cy.get('main div[aria-label="Competitor Networks"]').first()
    }
}
export default NetworkPage