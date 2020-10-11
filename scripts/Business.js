export const Business = (business) => {
    return `
    <section class="businesses">
        <h2 class="agent-name">${business.agent}</2>
        <h5 class="business-name">${business.companyName}</h5>
        <h5 class="business-phone">${business.phoneWork},
        <div class="line"></div>
    </section>
    `
}