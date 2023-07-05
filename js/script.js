(function ($) {
    "use strict";
    /*---------------- SCROLL TO MENU LINK -------------------*/
    var navHeight = $('.sticky-header').height();
    var menuLink = $('.nav-menu li a');
    menuLink.on('click', function () {
        var targetLink = $($.attr(this, 'href')).offset().top;
        var targetPosition = (targetLink + 7) - navHeight;
        $('html, body').animate({
            scrollTop: targetPosition
        }, 800);
        return false;
    });
    /*---------------- STICKY MENU -------------------*/
    $(window).on("scroll", function () {
        var sticky_top = $(window).scrollTop();
        if (sticky_top > 1) {
            $('.sticky-header').addClass('sticky');
        } else {
            $('.sticky-header').removeClass('sticky');
        }
    });
})(jQuery);

/*---------------- HIGHLIGHT NAV MENU ON SCROLL -------------------*/
var sections = document.querySelectorAll('section');
var navLink = document.querySelectorAll('.nav-menu li a');
window.addEventListener('scroll', function () {
    var current = '';
    var currentL = '';
    sections.forEach(section => {
        var scrollPosition = section.offsetTop;
        var scrollheight = section.clientHeight;
        if (pageYOffset >= (scrollPosition - scrollheight / 3)) {
            current = section.getAttribute('id');
            currentL = "#" + current;
        }
    });
    navLink.forEach(el => {
        el.classList.remove('active');
        var min = el.getAttribute('href');
        if (min == currentL) {
            el.classList.add('active');
        }
    });
});
