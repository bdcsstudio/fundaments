document.addEventListener("DOMContentLoaded", function () {
    // Controleer of de schermbreedte groter is dan 992 pixels
    if (window.innerWidth > 992) {
      const navSpotlightItems = document.querySelectorAll(
        '[hover-spotlight="list"] [hover-spotlight="item"]'
      );
  
      navSpotlightItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          const siblings = item.parentNode.querySelectorAll(
            '[hover-spotlight="item"]'
          );
          siblings.forEach((sibling) => {
            if (sibling !== item) {
              gsap.to(sibling, {
                opacity: 0.5,
                duration: 0.3, // Update duur naar 0.3 seconden
                ease: "cubic-bezier(.509, .188, .041, .989)" // Toevoegen van cubic-bezier easing
              });
            }
          });
        });
  
        item.addEventListener("mouseleave", function () {
          const siblings = item.parentNode.querySelectorAll(
            '[hover-spotlight="item"]'
          );
          siblings.forEach((sibling) => {
            gsap.to(sibling, {
              opacity: 1,
              duration: 0.3, // Update duur naar 0.3 seconden
              ease: "cubic-bezier(.509, .188, .041, .989)" // Toevoegen van cubic-bezier easing
            });
          });
        });
      });
    }
  });