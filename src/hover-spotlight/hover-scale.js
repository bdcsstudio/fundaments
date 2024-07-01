document.addEventListener("DOMContentLoaded", function () {
    // Controleer of de schermbreedte groter is dan 992 pixels
    if (window.innerWidth > 992) {
      const navSpotlightItems = document.querySelectorAll(
        '[hover-spotlight-scale="list"] [hover-spotlight-scale="item"]'
      );
  
      navSpotlightItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          const siblings = item.parentNode.querySelectorAll(
            '[hover-spotlight-scale="item"]'
          );
          siblings.forEach((sibling) => {
            if (sibling !== item) {
              // Pas zowel opacity als scale aan met custom easing
              gsap.to(sibling, {
                opacity: 0.5, 
                scale: 0.975, 
                duration: 0.3,
                ease: "cubic-bezier(.509, .188, .041, .989)"
              });
            }
          });
        });
  
        item.addEventListener("mouseleave", function () {
          const siblings = item.parentNode.querySelectorAll(
            '[hover-spotlight-scale="item"]'
          );
          siblings.forEach((sibling) => {
            // Herstel opacity en scale naar de oorspronkelijke waarden met custom easing
            gsap.to(sibling, {
              opacity: 1, 
              scale: 1, 
              duration: 0.3,
              ease: "cubic-bezier(.509, .188, .041, .989)"
            });
          });
        });
      });
    }
  });