$(function() {
    $('.slider_inner').slick({
      infinite:true,
      slidesToShow:10,
      slidesToScroll: 1,
      nextArrow: '<button type="button" class=" slick-btn slick-next"><i class="fas fa-arrow-right"></i></button>',
      prevArrow: '<button type="button" class=" slick-btn slick-prev"><i class="fas fa-arrow-left"></i></button>',
      arrows:true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
            // {
            //     breakpoint: 1000,
            //     settings: {
            //         arrows: false,
            //         centerMode: true,
            //         centerPadding: '150px',
            //         slidesToShow: 1
            //     }
            // }
            ]
     });
    $('.menu-btn').on('click', function () {
        $('.menu').slideToggle();
    });
});