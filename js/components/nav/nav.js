(function () {
    "use strict";

    if (matchMedia("screen and (max-width: 1024px)").matches) {
        $('.nav--mobile').removeAtt('style')
    } else {
        $('.nav--mobile').css('display', 'none');
    }

    $(window).resize(function () {
        if ($(window).width() < 1024) {
            $('.nav--mobile').removeAtt('style')
        } else {
            $('.nav--mobile').css('display', 'none');
        }
    });

})();
