(function () {
  "use strict";

  var popUpMaker = require("popUpMaker");

  var popUp = popUpMaker();

  $(window).on("load", function () {
    if (Date.now() < window.localStorage.getItem("popUpNoOpenUntil")) return;
    popUp.open("/pages/popUp", 400, 500);
  });
})();
