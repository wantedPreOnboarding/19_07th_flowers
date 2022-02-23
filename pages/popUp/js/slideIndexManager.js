(function () {
  var slideIndexManager = (function () {
    var currentIndex = 0;

    var $slideWrapper = $(".popup-slide__wrapper");

    var getCurrentIndex = function () {
      return currentIndex;
    };

    var setCurrentIndex = function (nextIndex) {
      if (nextIndex < 0 || nextIndex > $slideWrapper.find("li").length - 1)
        return;
      currentIndex = nextIndex;
      popupImageRender();
      indexViewerRender();
    };

    return {
      get: getCurrentIndex,
      set: setCurrentIndex,
    };

    function popupImageRender() {
      $slideWrapper.find("ul").animate({
        right: $slideWrapper.find("img").width() * slideIndexManager.get(),
      });
    }

    function indexViewerRender() {
      var $circles = $(".popup-slide__index-viewer > button");
      $circles.removeClass("bgc-red");
      $circles.addClass("bgc-grey");

      $circles.eq(slideIndexManager.get()).addClass("bgc-red");
    }
  })();

  exports({
    slideIndexManager: slideIndexManager,
  });
})();
