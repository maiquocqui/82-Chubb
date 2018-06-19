// COLOR CHANGE
$(function() {
    var themeClassName = "theme-" + Math.floor((Math.random() * 7) + 1);
    $('body').addClass(themeClassName);
});

;

function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        alert(1);
    } else {
        alert(2);
    }
    return false;
}

$(document).ready(function() {

    // HEADER SCRIPT
    // msieversion();

    if ($(window).width() < 1200) {
        $('header .login').insertAfter('.login-toggle');
    }

    $('.login-toggle').click(function() {
        $(this).siblings('.login').toggle(300);
        $('.menu').removeClass('open');
        $('.btn-showmenu').removeClass('active');
    });

    $('.btn-showmenu').click(function() {
        $(this).toggleClass('active');
        $('.overlay').fadeToggle(500);
        $('.menu').toggleClass('open');
        $('.login').hide(300);
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('.btn-showmenu').removeClass('active');
    });

    // GET HEADER PAGENAME
    // $('header .pagename').append($('.pagename.d-none').html());

    // FLY TOOL SCRIPT
    $('.font span').click(function() {
        $('.font span').removeClass('active');
        $(this).addClass('active');
    });
    $('.font .small').click(function() {
        $('html').css('font-size', '100%');
    });
    $('.font .medium').click(function() {
        $('html').css('font-size', '110%');
    });
    $('.font .big').click(function() {
        $('html').css('font-size', '120%');
    });

    // BANNER PAGE
    $('.banner-page').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // DATETIME PICKER
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
    });

    // POST REQUIREMENT
    $('.working-place .place-group .place-name').click(function() {
        var _parent = $(this).parent();
        if (_parent.hasClass('active')) {
            _parent.removeClass('active');
            _parent.find('.place-form').slideUp(300);
        } else {
            $('.working-place .place-group').removeClass('active');
            $('.working-place .place-group .place-form').slideUp();
            _parent.addClass('active');
            _parent.find('.place-form').slideDown(300);
        }
    });
});

$(function() {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});