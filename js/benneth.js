// Benneth Affordable House and Lot - Custom JS

// Override counter target values for Benneth
document.addEventListener('DOMContentLoaded', function () {

    // Inject floating CTA buttons (Facebook, Viber, Phone)
    const floatingCTA = document.createElement('div');
    floatingCTA.className = 'floating-cta';
    floatingCTA.innerHTML = `
        <a href="https://www.facebook.com/BennethAffordableHouseandLot" target="_blank" class="floating-fb" title="Message us on Facebook">
            <i class="fa-brands fa-facebook-messenger"></i>
        </a>
        <a href="viber://chat?number=09760907814" class="floating-viber" title="Message us on Viber">
            <i class="fa-brands fa-viber"></i>
        </a>
        <a href="tel:09760907814" class="floating-phone" title="Call us now">
            <i class="fa-solid fa-phone"></i>
        </a>
    `;
    document.body.appendChild(floatingCTA);

    // Override countUp targets - wait for counters to be observed then patch them
    const countersEl = document.getElementById('counters');
    if (!countersEl) return;

    // Mutation-based override: watch for when countUp starts updating
    // and replace the final values
    const agentEl = document.getElementById('activeAgent');
    const satisfactionEl = document.getElementById('clientSatisfaction');
    const listingsEl = document.getElementById('propertyListings');

    // Set Benneth-specific counter targets via data overrides
    // The original countUp.js reads from the element text; we patch after load
    const patchCounters = () => {
        if (agentEl) agentEl.setAttribute('data-target', '500');
        if (satisfactionEl) satisfactionEl.setAttribute('data-target', '98');
        if (listingsEl) listingsEl.setAttribute('data-target', '150');
    };

    patchCounters();

    // Gallery modal fix (ensure it works with benneth overrides)
    document.querySelectorAll('.gallery-img').forEach(function (img) {
        img.addEventListener('click', function () {
            const src = this.getAttribute('data-img-src');
            const modalImg = document.getElementById('modalImage');
            if (modalImg && src) modalImg.src = src;
        });
    });

});
