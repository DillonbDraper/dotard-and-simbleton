import { BusinessList } from "./BusinessList.js"
import { getAgents } from "./BusinessProvider.js"

BusinessList()
const agents = getAgents()
console.log(agents)