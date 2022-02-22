(function () {
  "use strict";

  var popUp = require("popUp");
  $(window).on("beforeunload", function () {
    popUp.open("http://localhost:5500/pages/popUp/popup.html", 680, 933);
  });
})();
