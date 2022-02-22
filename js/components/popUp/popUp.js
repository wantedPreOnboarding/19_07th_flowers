(function () {
  "use strict";

  exports({
    popUp: {
      open: function (href, width, height) {
        var size = "width=" + width + "," + "height=" + height;
        window.open(href, "", size);
      },
    },
  });
})();
