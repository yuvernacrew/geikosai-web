$(function() {
  $(".main-slider").slick({
    pauseOnHover: true,
    lazyLoad: "progressive", // バックグラウンドでスライド画像をロード
    arrows: false,
    dots: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          asNavFor: '.sub-slider'
        }
      },
      {
        breakpoint: 780,
        settings: {
          dots: true
        }
      }
    ]
  });

  $(".sub-slider").slick({
    centerMode: true,
    slidesToShow: 3,
    asNavFor: '.main-slider',
    focusOnSelect: true
  });

  $('.graphic-slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '28%',
    infinite: true,
    responsive: [{
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '28%'
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0'
        }
      }
    ]
  });


  var slideWrapper = $(".main-slider"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;

  // POST commands to YouTube or Vimeo API
  function postMessageToPlayer(player, command) {
    if (player == null || command == null) return;
    player.contentWindow.postMessage(JSON.stringify(command), "*");
  }

  // When the slide is changing
  function changeSlide(slick, control) {
    var currentSlide, slideType, startTime, player, video;

    currentSlide = slick.find(".slick-current");
    slideType = currentSlide.attr("class").split(" ")[1];
    player = currentSlide.find("iframe").get(0);
    startTime = currentSlide.data("video-start");

    if (slideType === "youtube") {
      switch (control) {
        case "play":
          postMessageToPlayer(player, {
            "event": "command",
            // "func": "mute"
          });
          postMessageToPlayer(player, {
            "event": "command",
            "func": "playVideo"
          });
          break;
        case "pause":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "pauseVideo"
          });
          break;
      }
    }
  }

  // Resize player
  function resizePlayer(iframes, ratio) {
    if (!iframes[0]) return;

    var win = $(".full-wide-slider"),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16 / 9;

    iframes.each(function() {
      var current = $(this);
      if (width / ratio < height) {
        playerWidth = Math.ceil(height * ratio);
        current.width(playerWidth).height(height).css({
          left: (width - playerWidth) / 2,
          top: 0
        });
      } else {
        playerHeight = Math.ceil(width / ratio);
        current.width(width).height(playerHeight).css({
          left: 0,
          top: (height - playerHeight) / 2
        });
      }
    });
  }

  // DOM Ready
  $(function() {
    // Initialize
    slideWrapper.on("init", function(slick) {
      slick = $(slick.currentTarget);
      setTimeout(function() {
        changeSlide(slick, "play");
      }, 1000);
      resizePlayer(iframes, 16 / 9);
    });
    slideWrapper.on("beforeChange", function(event, slick) {
      slick = $(slick.$slider);
      changeSlide(slick, "pause");
    });
    slideWrapper.on("afterChange", function(event, slick) {
      slick = $(slick.$slider);
      changeSlide(slick, "play");
    });
    slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
      lazyCounter++;
      if (lazyCounter === lazyImages.length) {
        lazyImages.addClass('show');
        slideWrapper.slick("slickPlay");
      }
    });
  });

  // Resize event
  $(window).on("resize.slickVideoPlayer", function() {
    resizePlayer(iframes, 16 / 9);
  });
});
