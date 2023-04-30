$(document).ready(function () {
  $("#my-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,

    speed: 1000,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"></i></button>',
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
