$(document).ready(function(){
    $('.product__slider').slick({
        speed: 1000,

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/second/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/second/arrow_right.png"></button>',


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    speed: 500,
                }
            }
        ]
    });
  });