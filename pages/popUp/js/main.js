(function () {
  "use strict";
  var vh = require("vh");
  $(window).on("load", function () {
    var footerHeight = $(".popup__footer").outerHeight(true) - 1;
    $(".popup-slide__wrapper").css("height", 100 * vh - footerHeight);
  });
})();
