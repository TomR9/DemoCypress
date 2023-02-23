class SearchPage {

    lblTotalResults(){
        return cy.xpath("//div[@id='result-stats']")
    }

    lblShowResultsFor(){
        return cy.xpath("(//div[@id='taw']//a)[1]")
    }

    lblSearchInsteadFor(){
        return cy.xpath("(//div[@id='taw']//a)[2]")
    }

    totalResults(){
        this.lblTotalResults().then(($el) => {
            const result = $el.text().split(" ")
            cy.log("Total results: " + result[1])
            cy.log("Time results: " + result[4] + result[5])
        })
    }

    verifyResults(rightWord, insteadWord){
        this.lblShowResultsFor().then(($el) => {
            expect($el).to.be.visible
            const result = $el.text().trim()
            cy.checkText(rightWord, result)
        })
        this.lblSearchInsteadFor().then(($el2) => {
            expect($el2).to.be.visible
            const instead = $el2.text().trim()
            cy.checkText(insteadWord, instead)
        })
    }
}
export default SearchPage