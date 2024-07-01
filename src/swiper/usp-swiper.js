document.addEventListener("DOMContentLoaded", function () {
    const swiperGroups = document.querySelectorAll("[swiper-group]");

    // Function to add leading zero to single-digit numbers
    function numberWithZero(num) {
      return num < 10 ? "0" + num : num;
    }

    const calculateSpaceBetween = (swiperEl) => {
      const screenWidth = window.innerWidth;
      let spaceBetween;

      if (screenWidth >= 992) {
        spaceBetween =
          parseFloat(swiperEl.getAttribute("swiper-gap-desktop")) || 0;
      } else if (screenWidth >= 480) {
        spaceBetween =
          parseFloat(swiperEl.getAttribute("swiper-gap-tablet")) || 0;
      } else {
        spaceBetween =
          parseFloat(swiperEl.getAttribute("swiper-gap-mobile")) || 0;
      }

      return (screenWidth * spaceBetween) / 100;
    };

    const updateActiveElements = (swiperInstance) => {
      // Remove active class from previous active pagination bullet
      const prevActiveBullet = swiperInstance.el.querySelector(".swiper-pagination-bullet-active");
      if (prevActiveBullet) {
        prevActiveBullet.classList.remove("is-active");
      }

      // Add active class to new active pagination bullet
      const activeBullet = swiperInstance.pagination.bullets[swiperInstance.activeIndex];
      if (activeBullet) {
        activeBullet.classList.add("is-active");
      }
    };

    const initSwiper = (swiperEl, group) => {
      const effect = swiperEl.getAttribute("swiper-effect") || "slide";
      const swiperOptions = {
        init: false,
        loop: swiperEl.getAttribute("swiper-loop") === "true",
        rewind: swiperEl.getAttribute("swiper-rewind") === "true",
        parallax: swiperEl.getAttribute("swiper-parallax") === "true",
        pagination: {
          el: group.querySelector(".swiper-pagination"),
          clickable: "true"
        },
        slideToClickedSlide:
          swiperEl.getAttribute("swiper-slidetoclickedslide") === "true",
        mousewheel: {
          enabled: swiperEl.getAttribute("swiper-mousewheel") === "true"
        },
        keyboard: {
          enabled: swiperEl.getAttribute("swiper-keyboard") === "true"
        },
        speed: parseInt(swiperEl.getAttribute("swiper-speed")) || 300,
        navigation: {
          nextEl: group.querySelector('[swiper-btn="next"]'),
          prevEl: group.querySelector('[swiper-btn="prev"]')
        },
        slidesPerView:
          parseFloat(swiperEl.getAttribute("swiper-slides-mobile")) || 1, // Accepts decimals
        spaceBetween: calculateSpaceBetween(swiperEl),
        centeredSlides:
          swiperEl.getAttribute("swiper-centeredslide-mobile") === "true",
        effect: effect,
        slideEffect: {

        },
        fadeEffect: {
          crossFade: swiperEl.getAttribute("swiper-crossfade") === "true"
        },
        cubeEffect: {
          slideShadows: swiperEl.getAttribute("swiper-slideshadows") === "true",
          shadow: swiperEl.getAttribute("swiper-shadow") === "true",
          shadowOffset: parseInt(swiperEl.getAttribute("swiper-shadowoffset")) || 20,
          shadowScale: parseFloat(swiperEl.getAttribute("swiper-shadowscale")) || 0.94
        },
        coverflowEffect: {
          rotate: parseInt(swiperEl.getAttribute("swiper-rotate")) || 50,
          stretch: parseInt(swiperEl.getAttribute("swiper-stretch")) || 0,
          depth: parseInt(swiperEl.getAttribute("swiper-depth")) || 100,
          modifier: parseInt(swiperEl.getAttribute("swiper-modifier")) || 1,
          slideShadows: swiperEl.getAttribute("swiper-slideshadows") === "true",
        },
        flipEffect: {
          slideShadows: swiperEl.getAttribute("swiper-slideshadows") === "true",
          limitRotation: swiperEl.getAttribute("swiper-limitrotation") === "true"
        },
        breakpoints: {
          480: {
            slidesPerView:
              parseFloat(swiperEl.getAttribute("swiper-slides-tablet")) || 1, // Accepts decimals
            spaceBetween: calculateSpaceBetween(swiperEl),
            centeredSlides:
              swiperEl.getAttribute("swiper-centeredslide-tablet") === "true"
          },
          992: {
            slidesPerView:
              parseFloat(swiperEl.getAttribute("swiper-slides-desktop")) || 1, // Accepts decimals
            spaceBetween: calculateSpaceBetween(swiperEl),
            centeredSlides:
              swiperEl.getAttribute("swiper-centeredslide-desktop") === "true"
          }
        },
        on: {
          init: function () {
            updateActiveElements(this);
            // Update swiper-indicator with total slides count
            let totalSlides = numberWithZero(
              this.slides.length - (this.loop ? this.loopedSlides * 2 : 0)
            );
            group.querySelector(
              '[swiper-indicator="total"]'
            ).textContent = totalSlides;

            // Update swiper-indicator text on init
            let slideNumber = numberWithZero(this.realIndex + 1);
            group.querySelector(
              '[swiper-indicator="current"]'
            ).textContent = slideNumber;
          },
          slideChange: function () {
            updateActiveElements(this);

            // Update swiper-indicator text on slide change
            let slideNumber = numberWithZero(this.realIndex + 1);
            group.querySelector(
              '[swiper-indicator="current"]'
            ).textContent = slideNumber;
          },
          resize: function () {
            this.params.spaceBetween = calculateSpaceBetween(swiperEl);
            this.update();
          }
        }
      };

      const swiperInstance = new Swiper(swiperEl, swiperOptions);
      swiperInstance.init();
    };

    swiperGroups.forEach((group) => {
      const swiperEls = group.querySelectorAll("[swiper-comp]");
      swiperEls.forEach((swiperEl) => initSwiper(swiperEl, group));
    });
  });