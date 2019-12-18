"use strict";

$('.main-menu__btn').on('click', function () {
  $('.main-menu__list').slideToggle('slow');
  $('.main-menu__btn').toggleClass('active');
});
$('.filter__show').on('click', function () {
  $('.filter__form').slideToggle('slow');
});
$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });
});
$('.about-projects__list').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  accessibility: false,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.similar__list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});