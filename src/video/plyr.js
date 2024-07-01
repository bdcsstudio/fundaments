$("[plyr-comp]").each(function (index) {
    let thisComponent = $(this);
  
    // create plyr settings
    let player = new Plyr(thisComponent.find(".plyr_video")[0], {
      controls: [/*'play-large',*/ 'play', 'progress', 'current-time', 'mute', /*'volume',*/ /*'captions',*/ 'settings', /*'pip',*/ 'airplay', 'fullscreen'],
      resetOnEnd: true
    });
    
    // custom video cover
    thisComponent.find(".video-cover").on("click", function () {
      player.play();
    });
    player.on("ended", (event) => {
      thisComponent.removeClass("is-active");
    });
  
    // pause other playing videos when this one starts playing
    player.on("play", (event) => {
          $("[plyr-comp]").removeClass("is-active");
      thisComponent.addClass("is-active");
      let prevPlayingComponent = $(".plyr--playing").closest("[plyr-comp]").not(thisComponent);
      if (prevPlayingComponent.length > 0) {
        prevPlayingComponent.find("[plyr-pause-trigger]")[0].click();
      }
    });
    thisComponent.find("[plyr-pause-trigger]").on("click", function () {
      player.pause();
    });
  
    // exit full screen when video ends
    player.on("ended", (event) => {
      if (player.fullscreen.active) {
        player.fullscreen.exit();
      }
    });
    // set video to contain instead of cover when in full screen mode
    player.on("enterfullscreen", (event) => {
      thisComponent.addClass("contain-video");
    });
    player.on("exitfullscreen", (event) => {
      thisComponent.removeClass("contain-video");
    });
  });