import SearchPage from "./SearchPage"

class GoogleHomePage{

    inputSearch(text){
        cy.setText("GoogleHomePage", "txtSearch", text)
    }

    clickButtonSearch(){
        cy.getElement("GoogleHomePage", "btnGoogleSearch").click({multiple : true, force : true})
        return new SearchPage()
    }
}
export default GoogleHomePage