(function () {
    "use strict";

    const namespace = "header";

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

if (matchMedia("screen and (max-width: 1024px)").matches) {
    $('.header--logo').addClass('header--logo__mobile');
    $('.header--nav').addClass('none');
    $('.header--icons').addClass('header--t50');
    $('.header--icons__user').css('display', 'none');
    $('.header--wrap').addClass('header--wrap__mobile');
    $('.header--icons__cart').addClass('header--icons__cart__mobile');
    $('.header--shadow').addClass('header--shadow__mobile');
} else {
    $('.header--logo').removeClass('header--logo__mobile');
    $('.header--nav').removeClass('none');
    $('.header--icons').removeClass('header--t50');
    $('.header--icons__user').removeAttr('style');
    $('.header--wrap').removeClass('header--wrap__mobile');
    $('.header--icons__cart').removeClass('header--icons__cart__mobile');
    $('.header--shadow').removeClass('header--shadow__mobile');
}

$(window).resize(function () {
    if ($(window).width() < 1024) {
        $('.header--logo').addClass('header--logo__mobile');
        $('.header--nav').addClass('none');
        $('.header--icons').addClass('header--t50');
        $('.header--icons__user').css('display', 'none');
        $('.header--wrap').addClass('header--wrap__mobile');
        $('.header--icons__cart').addClass('header--icons__cart__mobile');
        $('.header--shadow').addClass('header--shadow__mobile');
    } else {
        $('.header--logo').removeClass('header--logo__mobile');
        $('.header--nav').removeClass('none');
        $('.header--icons').removeClass('header--t50');
        $('.header--icons__user').removeAttr('style');
        $('.header--wrap').removeClass('header--wrap__mobile');
        $('.header--icons__cart').removeClass('header--icons__cart__mobile');
        $('.header--shadow').removeClass('header--shadow__mobile');
    }
});

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});