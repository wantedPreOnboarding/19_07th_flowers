(function () {
  const namespace = "flowers";

  // IE8에서 media query를 지원하지 않기 때문에 js의 상수로 지정

  window[namespace] = {
    import: function (key) {
      return this[key];
    },
    export: function (obj) {
      if (typeof obj !== "object") return;

      for (key in obj) {
        this[key] = obj[key];
      }
    },
  };
})();
