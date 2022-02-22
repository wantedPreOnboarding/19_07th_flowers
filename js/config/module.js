(function () {
  const namespace = "flowers";

  window[namespace] = {};

  window.require = function (key) {
    return this[namespace][key];
  };

  window.exports = function (obj) {
    if (typeof obj !== "object") return;

    for (key in obj) {
      this[namespace][key] = obj[key];
    }
  };
})();
