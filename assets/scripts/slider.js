jQuery(document).ready(function ($) {
  if (
    typeof jQuery(".ult-carousel-160825103562d23bae46296").slick == "function"
  ) {
    $(".ult-carousel-160825103562d23bae46296").slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 300,
      infinite: true,
      arrows: true,
      nextArrow:
        '<button type="button" role="button" aria-label="Next" style="color:#333333; font-size:20px;" class="slick-next default"><i class="ultsl-arrow-right4"></i></button>',
      prevArrow:
        '<button type="button" role="button" aria-label="Previous" style="color:#333333; font-size:20px;" class="slick-prev default"><i class="ultsl-arrow-left4"></i></button>',
      slidesToScroll: 5,
      slidesToShow: 5,
      swipe: true,
      draggable: true,
      touchMove: true,
      pauseOnHover: true,
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
      pauseOnDotsHover: true,
      customPaging: function (slider, i) {
        return '<i type="button" style= "color:#333333;" class="ultsl-record" data-role="none"></i>';
      },
    });
  }
});
