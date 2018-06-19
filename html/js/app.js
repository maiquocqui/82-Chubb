"use strict";

var DOMAIN_URL = 'http://domain.com';
var VIENSOI_APP = {
    "ACTIVE_FIXED_HEADER": false,
    "HEADER_TRANPARENT": false,
    "NAV_CHANGE_ON": "sm",
    "ACTIVE_HEADER_POSITION": 1,
    "ACTIVE_PADDING_MAIN": false,
    "ACTIVE_FIXED_FOOTER": false,
    "DISPLAY_FOOTER": 600,
    "ACTIVE_RESPONSIVE": true,
    "ACTIVE_OFFCANVAS": true,
    "ACTIVE_BACKTOTOP": true,
    "DISPLAY_BACKTOTOP": 100,
    "CHANGE_GRID": 991,
    "DEV_MODE": true,
    "DEV_MODE_GIRD_FULL": false,
    "MEGA_MENU": false,
    "MEGA_MENU_COL": 5
};$(function () {
    var themeClassName = "theme-" + Math.floor(Math.random() * 7 + 1);
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

$(document).ready(function () {


    if ($(window).width() < 1200) {
        $('header .login').insertAfter('.login-toggle');
    }

    $('.login-toggle').click(function () {
        $(this).siblings('.login').toggle(300);
        $('.menu').removeClass('open');
        $('.btn-showmenu').removeClass('active');
    });

    $('.btn-showmenu').click(function () {
        $(this).toggleClass('active');
        $('.overlay').fadeToggle(500);
        $('.menu').toggleClass('open');
        $('.login').hide(300);
    });
    $('.overlay').click(function () {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('.btn-showmenu').removeClass('active');
    });


    $('.font span').click(function () {
        $('.font span').removeClass('active');
        $(this).addClass('active');
    });
    $('.font .small').click(function () {
        $('html').css('font-size', '100%');
    });
    $('.font .medium').click(function () {
        $('html').css('font-size', '110%');
    });
    $('.font .big').click(function () {
        $('html').css('font-size', '120%');
    });

    $('.banner-page').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy'
    });

    $('.working-place .place-group .place-name').click(function () {
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

$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', 
        topDistance: '300', 
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: 'Scroll to top', 
        activeOverlay: false 
    });
});
