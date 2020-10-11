import { Business } from "./Business.js"
import { NewYorkBusinesses, useBusiness, getAgents } from "./BusinessProvider.js"

const contentTarget = document.querySelector("#container")

export const BusinessList = () => {
    const agentArray = getAgents()
    contentTarget.innerHTML = `<h1>Purchasing Agents</h1>`

    agentArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}