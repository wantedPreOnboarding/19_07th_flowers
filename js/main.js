(function () {
  "use strict";

  var popUpMaker = require("popUpMaker");

  var popUp = popUpMaker();

  $(window).on("load", function () {
    console.log(Date.now() < window.localStorage.getItem("popUpNoOpenUntil"));
    console.log(Date.now(), window.localStorage.getItem("popUpNoOpenUntil"));
    if (Date.now() < window.localStorage.getItem("popUpNoOpenUntil")) return;
    popUp.open("http://localhost:5500/pages/popUp/popup.html", 400, 500);
  });
})();
