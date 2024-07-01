$(document).ready(function () {
    let backgroundVidPlay = $('[video-hover="play"]');
    let backgroundVidPause = $('[video-hover="pause"]');
  
    backgroundVidPlay.each(function () {
      $("video", this).get(0).pause();
    });
  
    backgroundVidPlay.on("mouseenter mouseleave", function () {
      let myVideo = $(this).find("video");
      $(this).toggleClass("playing");
      if ($(this).hasClass("playing")) {
        myVideo.get(0).play();
        myVideo.prop("muted", true);
      } else {
        myVideo.get(0).pause();
        if ($(this).attr("video-reset") === "hover") {
          myVideo.get(0).currentTime = 0;
        }
      }
    });
  
    backgroundVidPause.each(function () {
      $("video", this).get(0).play();
    });
  
    backgroundVidPause.on("mouseenter mouseleave", function () {
      let myVideo = $(this).find("video");
      $(this).toggleClass("paused");
      if ($(this).hasClass("paused")) {
        myVideo.get(0).pause();
      } else {
        myVideo.get(0).play();
        myVideo.prop("muted", true);
      }
    });
  });