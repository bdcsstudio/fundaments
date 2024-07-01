document.addEventListener('DOMContentLoaded', function() {
    // Selecteer het input veld met het attribute tr-search-element=input
    var searchInput = document.querySelector('[tr-search-element="input"]');
    // Selecteer het element met de class .nav-search_bg
    var navSearchBg = document.querySelector('.nav-search_bg');
    // Selecteer het element met het attribute tr-search-element=clear
    var clearButton = document.querySelector('[tr-search-element="clear"]');

    if (searchInput && navSearchBg) {
      // Voeg event listener toe voor input event
      searchInput.addEventListener('input', function() {
        // Controleer of er iets in het input veld staat
        if (searchInput.value.trim() !== '') {
          // Voeg de combo class .is-input toe aan .nav-search_bg
          navSearchBg.classList.add('is-input');
        } else {
          // Verwijder de combo class .is-input als het input veld leeg is
          navSearchBg.classList.remove('is-input');
        }
      });

      // Voeg event listener toe aan de clear button
      if (clearButton) {
        clearButton.addEventListener('click', function() {
          // Maak het input veld leeg
          searchInput.value = '';
          // Verwijder de combo class .is-input van .nav-search_bg
          navSearchBg.classList.remove('is-input');
        });
      }
    }
  });