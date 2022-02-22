(function () {
  "use strict";
  var vh = require("vh");

  var IMGS = [
    "/pages/popUp/assets/20220221_배송안내.png",
    "/pages/popUp/assets/20220221_배송안내.png",
    "/pages/popUp/assets/20220221_배송안내.png",
  ];

  var currentIndex = 0;

  var setCurrentIndex = function (nextIndex) {
    if (nextIndex < 0 || nextIndex > IMGS.length - 1) return;
    currentIndex = nextIndex;
    popupImageRender();
  };

  var $slideWrapper = $(".popup-slide__wrapper");

  function popupImageRender() {
    $slideWrapper.find("ul").animate({
      right: $slideWrapper.find("img").width() * currentIndex,
    });
  }

  $(window).on("load", function () {
    $slideWrapper.find("img").css({
      height: 100 * vh - $(".popup__footer").height() - 5,
    });

    $("[class*=popup-slide__btn]").on("click", function () {
      if (this.getAttribute("class").indexOf("next") !== -1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    });
  });
})();
