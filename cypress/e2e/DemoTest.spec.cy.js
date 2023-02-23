import GoogleHomePage from "../pages/GoogleHomePage"

describe("Demo automation test", () => {

    var objGoogleHomePage, objSearchPage

    beforeEach(() => {
        cy.visit("google.com.vn")
        objGoogleHomePage = new GoogleHomePage()
    })

    it("Check If a user entered wrong or misspelled keywords", () => {
        const keyword = "fakeppok"
        objGoogleHomePage.inputSearch(keyword)
        objSearchPage = objGoogleHomePage.clickButtonSearch()
        objSearchPage.totalResults()
        objSearchPage.verifyResults("facebook", keyword)
    })
})