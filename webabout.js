$(document).ready(function () {
  $("#my-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,

    speed: 700,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });


});