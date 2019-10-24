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
    $('.partners__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<img class="slider-arrow__left" src="assets/img/double-left.svg">',
        nextArrow: '<img class="slider-arrow__right"  src="assets/img/double-right.svg">'  
    });

});
