(function () {
  "use strict";

  var popUpMaker = function () {
    var popupWindow = null;

    function open(href, width, height) {
      var size = "width=" + width + "," + "height=" + height;
      popupWindow = window.open(href, "", size);
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
