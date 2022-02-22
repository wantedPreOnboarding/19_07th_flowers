(function () {
  "use strict";

  var popUpMaker = function () {
    var popupWindow = null;

    function open(href, width, height) {
      var windowWidth = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;

      var windowHeight = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

      var left = windowWidth / 2 - width / 2;

      // var top = windowHeight / 2 - height / 2;

      var popUpWidth = "width=" + width;
      var popUpheight = "height=" + height;
      var popUpLeft = "left=" + -left;

      popupWindow = window.open(
        href,
        "",
        [popUpWidth, popUpheight, popUpLeft].join(",")
      );
    }

    function close() {
      popupWindow.close();
    }

    return {
      open: open,
      close: close,
    };
  };

  exports({
    popUpMaker: popUpMaker,
  });
})();
