export const Business = (business) => {
    return `
    <section class="businesses">
        <h2 class="business-name">${business.companyName}</2>
        <h5 class="business-address">${business.addressFullStreet}</h5>
        <h5 class="business-add-line-two">${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
        <div class="line"></div>
    </section>
    `
}