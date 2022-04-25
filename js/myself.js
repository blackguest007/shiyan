$(function() {
    var myself_box_top = $('.myself').offset().top
    var myself_box = $('.myself')
    myself_fun();

    function myself_fun() {

        if ($(document).scrollTop() >= myself_box_top) {
            $('.myself').fadeIn();
        } else {
            $('.myself').fadeOut();
        }
    }
    $(window).scroll(function() {
        myself_fun();
    })
})