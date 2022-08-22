class BlogPage {
    getSearch(){
        return cy.get('input[id="search"]')
    }
    getSearchKey(){
        return cy.get('#articles > div:nth-child(1)')
    }
    getFilterByContent(){
        return cy.get('div[aria-labelledby="filter-by-content"] li>button')
    }
    getArticleCategory(){
        return cy.get('article header > span > span').first()
    }
}
export default BlogPage