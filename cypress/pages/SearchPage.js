class SearchPage {

    totalResults(){
        cy.getElement("SearchPage", "lblTotalResults").then(($el) => {
            const result = $el.text().split(" ")
            cy.log("Total results: " + result[1])
            cy.log("Time results: " + result[4] + result[5])
        })
    }

    verifyResults(rightWord, insteadWord){
        cy.getElement("SearchPage", "lblShowResultsFor").then(($el) => {
            expect($el).to.be.visible
            const result = $el.text().trim()
            cy.checkText(rightWord, result)
        })
        cy.getElement("SearchPage", "lblSearchInsteadFor").then(($el2) => {
            expect($el2).to.be.visible
            const instead = $el2.text().trim()
            cy.checkText(insteadWord, instead)
        })
    }
}
export default SearchPage