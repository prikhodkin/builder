"use strict";

$('.main-menu__btn').on('click', function () {
  $('.main-menu__list').slideToggle('slow');
  $('.main-menu__btn').toggleClass('active');
});