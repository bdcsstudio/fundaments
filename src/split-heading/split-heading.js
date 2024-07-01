Splitting();

const type10 = [...document.querySelectorAll("[data-splitting][data-effect10]")];

const applyEffect = () => {
  type10.forEach((title) => {
    const words = [...title.querySelectorAll(".word")];

    gsap.set(title, { perspective: 1000 });

    for (let i = 0; i < words.length; i++) {
      gsap.fromTo(
        words[i],
        {
          "will-change": "opacity, transform, filter",
          z: () => gsap.utils.random(1600, 2160),
          opacity: 0,
          filter: "blur(100px)",
          xPercent: () => gsap.utils.random(-100, 100),
          yPercent: () => gsap.utils.random(-10, 10),
          rotationX: () => gsap.utils.random(-90, 90)
        },
        {
          ease: "expo",
          opacity: 1,
          filter: "blur(0px)",
          rotationX: 0,
          rotationY: 0,
          xPercent: 0,
          yPercent: 0,
          z: 0,
          duration: 3,
          delay: i * 0.1 // Vertraging toevoegen op basis van de index om sequentiële animatie te krijgen
        }
      );
    }
  });
};

window.addEventListener("load", () => {
  applyEffect();
});