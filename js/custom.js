$(document).ready(function () {
    $('.hero-text-box').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky-nav')
        } else {
            $('nav').removeClass('sticky-nav')
        }
    });
    $(function () {
        $('.roky').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return !1
                }
            }
        })
    });
    $('.js-mobile-res').click(function () {
        var icon = $('.js-mobile-res i');
        var nav = $('.main-nav');
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu')
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close')
        }
        nav.toggleClass('active')
    });
    $('.js-main-nav li a').on('click touch', function () {
        if (checkWidth()) {
            $('.js-mobile-res').click()
        }
    });

    function checkWidth() {
        return $(window).width() < 760
    }
});
$(function () {
    new WOW().init()
})