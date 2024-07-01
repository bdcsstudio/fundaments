gsap.registerPlugin(ScrollTrigger);

function setTrackHeights() {
  $("[horizontal-scrub='comp']").each(function () {
    let trackWidth = $(this).find("[horizontal-scrub='track']").outerWidth();
    $(this).height(trackWidth);
  });
}

function initAnimations() {
  let viewportWidth = window.innerWidth;
  let ignoreValue = $("[horizontal-scrub='comp']").attr(
    "horizontal-scrub-ignore"
  );
  let disableAnimation = false;

  switch (ignoreValue) {
    case "mobile":
      // Uitschakelen op mobiel, dus viewport minder dan 480px
      disableAnimation = viewportWidth < 480;
      break;
    case "desktop":
      // Uitschakelen op desktop, dus viewport 992px en hoger
      disableAnimation = viewportWidth >= 992;
      break;
    case "desktop-tablet":
      // Uitschakelen op desktop en tablet, dus viewport 480px en hoger
      disableAnimation = viewportWidth >= 480;
      break;
    case "tablet-mobile":
      // Uitschakelen op tablet en mobile, dus viewport minder dan 992px
      disableAnimation = viewportWidth < 992;
      break;
  }

  if (!disableAnimation) {
    setTrackHeights();

    let scTrackWidth = document.querySelector("[horizontal-scrub='track']")
      .offsetWidth;
    let shiftAmount = viewportWidth - scTrackWidth;

    gsap.to("[horizontal-scrub='track']", {
      x: shiftAmount,
      scrollTrigger: {
        trigger: "[horizontal-scrub='comp']",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });
  }
}

// Voer initAnimations uit bij het eerste laden en bij het wijzigen van de grootte van het venster
initAnimations();
window.addEventListener("resize", initAnimations);