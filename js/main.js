$(function() {
    $('.slider_inner').slick({
      infinite:true,
      slidesToShow:10,
      slidesToScroll: 1,
      nextArrow: '<button type="button" class=" slick-btn slick-next"><i class="fas fa-arrow-right"></i></button>',
      prevArrow: '<button type="button" class=" slick-btn slick-prev"><i class="fas fa-arrow-left"></i></button>',
      arrows:true
     });
    $('.menu-btn').on('click', function () {
        $('.menu').slideToggle();
    });
});