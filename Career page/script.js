jQuery(document).ready(function ($) {
  jQuery(".slider-revies").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow:
      '<span class="prev-Arrow"><img src="Images/ic_twotone-chevron-right (2).png" alt="Previous"></span>',
    nextArrow:
      '<span class="next-Arrow"><img src="Images/ic_twotone-chevron-right (3).png" alt="Next"></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#open-btnn").click(function () {
    $(".mobile-header").css("right", "0");
  });

  $(".close-btnn").click(function () {
    $(".mobile-header").css("right", "-250px");
  });

  $(document).mouseup(function (e) {
    var cart = $(".mobile-header");
    if (!cart.is(e.target) && cart.has(e.target).length === 0) {
      cart.css("right", "-250px");
    }
  });
});
