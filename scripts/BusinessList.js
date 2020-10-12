import { Business } from "./Business.js"
import { NewYorkBusinesses, useBusiness } from "./BusinessProvider.js"
import { findBusiness } from "./BusinessProvider.js"

const contentTarget = document.querySelector("#container")

export const BusinessList = () => {
    const businessArray = useBusiness()
    contentTarget.innerHTML = `<h1>Active Businesses</h1>`

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )



    const companySearchResultArticle = document.querySelector(".foundCompanies")
    
    const searcher = document.getElementById("#companySearch")
    
    searcher.addEventListener("keypress", keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                const bizSearch = searcher.nodeValue
                /*
                    When user presses enter, find the matching business.
                    You can use the `.includes()` method strings to
                    see if a smaller string is part of a larger string.
    
                    Example:
                        business.companyName.includes(keyPressEvent.target.value)
                */
    
                const foundBusiness = findBusiness(bizSearch)
    
                companySearchResultArticle.innerHTML = `
                    <h2>
                    ${foundBusiness.companyName}
                    </h2>
                    <section>
                    ${foundBusiness.addressFullStreet}
    
                    </section>
                    <section>
                    ${foundBusiness.addressCity},
                    ${foundBusiness.addressStateCode}
                    ${foundBusiness.addressZipCode}
                    </section>
                `;
            }
        });

}