gsap.registerPlugin(ScrollTrigger);

gsap.to(".cloud-bg", {
  scrollTrigger: {
    trigger: ".main-wrapper",
    start: "top top", // start van de animatie als de top van .main-wrapper de top van de viewport raakt
    end: "bottom bottom", // einde van de animatie als de bottom van .main-wrapper de bottom van de viewport raakt
    scrub: true // maakt de animatie soepel en gekoppeld aan de scrollpositie
  },
  yPercent: -20, // eindpositie van .cloud-bg in percentage van zijn hoogte
  ease: "none" // maakt de animatie lineair
});