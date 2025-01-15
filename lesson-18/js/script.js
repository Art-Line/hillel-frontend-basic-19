$('.js-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    arrows: false,
    prevArrow: "<button type='button' class='arrowmy arrowmyleft'></button>",
    dots: true,
    draggable: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false,
              arrows: true
            }
        },
    ]
});