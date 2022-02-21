(function () {
  "use strict";
  const namespace = "flowersConsts";

  // IE8에서 media query를 지원하지 않기 때문에 js의 상수로 지정
  window[namespace] = {
    breakPoints: {
      tablet: 1024,
      desktop: 1141,
    },
  };
})();
