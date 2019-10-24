//= ../../../node_modules/slick-carousel/slick/slick.js

$(function(){

    $('.client__slider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        asNavFor: '.dots__slider'
    });
    $('.dots__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        arrows: false,
        asNavFor: '.client__slider',
        focusOnSelect: true
    });

});
