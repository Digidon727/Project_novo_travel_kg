$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
    ],
  });
});
