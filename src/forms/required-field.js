document.addEventListener("DOMContentLoaded", function() {
    // Selecteer alle divs met het attribuut [form-field-required]
    var requiredIndicators = document.querySelectorAll('[form-field-required]');

    requiredIndicators.forEach(function(indicator) {
        var previousField = indicator.previousElementSibling;

        // Controleer of het voorgaande element een input is en of het het attribuut 'required' heeft
        if(previousField && previousField.tagName === 'INPUT' && !previousField.hasAttribute('required')) {
            // Verberg de indicator als het voorgaande veld niet 'required' is
            indicator.style.display = 'none';
        }
    });
});