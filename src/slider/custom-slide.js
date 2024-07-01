document.addEventListener("DOMContentLoaded", function () {
    const swiperGroups = document.querySelectorAll("[swiper-group]");

    swiperGroups.forEach((group) => {
      const swiperEl = group.querySelector("[swiper-comp]");

      if (swiperEl) {
        const swiperInstance = swiperEl.swiper;

        if (swiperInstance) {
          const updateRandomSlideClass = () => {
            swiperInstance.slides.forEach((slide, index) => {
              if (index === swiperInstance.activeIndex + 2) {
                slide.classList.add("is-random-slide");
              } else {
                slide.classList.remove("is-random-slide");
              }
            });
          };

          // Initial update when swiper is initialized
          swiperInstance.on('init', updateRandomSlideClass);

          // Update on slide change
          swiperInstance.on('slideChange', updateRandomSlideClass);

          // Manually trigger the init event if the swiper is already initialized
          if (swiperInstance.initialized) {
            updateRandomSlideClass();
          }
        }
      }
    });
  });