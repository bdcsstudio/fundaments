document.addEventListener('DOMContentLoaded', function() {
    // Selecteer de navmenu elementen op basis van één attribuut
    var navMenus = document.querySelectorAll('[data-navmenu]');

    // Voeg een event listener toe aan elk navmenu element
    navMenus.forEach(function(navMenu) {
        navMenu.addEventListener('click', function() {
            // Zoek naar het huidige actieve element
            var currentActive = document.querySelector('.is-active');

            // Als er een huidig actief element is en het is niet het geklikte element
            if (currentActive && currentActive !== navMenu) {
                // Simuleer een klik op het huidige actieve element om eventuele andere acties te triggeren
                currentActive.click();
                // Verwijder de .is-active class van het huidige actieve element
                currentActive.classList.remove('is-active');
            }

            // Toggle de .is-active class op het geklikte element
            navMenu.classList.toggle('is-active');
        });
    });
});