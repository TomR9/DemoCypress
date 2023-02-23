import SearchPage from "./SearchPage"

class GoogleHomePage{

    txtSearch(){
        return cy.xpath("//input[@title='Tìm kiếm']")
    }

    btnGoogleSearch(){
        return cy.xpath("(//input[@name='btnK'])[2]")
    }

    inputSearch(text){
        this.txtSearch().clear().type(text)
    }

    clickButtonSearch(){
        this.btnGoogleSearch().click({force : true})
        return new SearchPage()
    }
}
export default GoogleHomePage