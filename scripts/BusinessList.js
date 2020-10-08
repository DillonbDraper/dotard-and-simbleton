import { Business } from "./Business.js"
import { NewYorkBusinesses, useBusiness } from "./BusinessProvider.js"

const contentTarget = document.querySelector("#container")

export const BusinessList = () => {
    const businessArray = NewYorkBusinesses
    contentTarget.innerHTML = `<h1>Active Businesses</h1>`

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}