(function () {
    "use strict";

    function navMobileGroup() {
        $('.nav--mobile').removeAttr('style');
    }

    function navDesktopGroup() {
        $('.nav--mobile').css('display', 'none');
    }

    var breakpoints = require('breakpoints');

    if (matchMedia("screen and (max-width:" + breakpoints.tablet + "px)").matches) {
        navMobileGroup()
    } else {
        navDesktopGroup()
    }

    $(window).resize(function () {
        if ($(window).width() < breakpoints.tablet) {
            navMobileGroup();
        } else {
            navDesktopGroup();
        };
    });
})();