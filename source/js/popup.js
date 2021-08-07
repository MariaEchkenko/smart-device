'use strict';

var popupButton = document.querySelector('.user-nav__button');
var popup = document.querySelector('.popup');


/*if (navMain) {
  navMain.classList.remove('main-nav--nojs');
}*/

if (popupButton) {
  popupButton.addEventListener('click', function () {
    if (popup.classList.contains('popup--closed')) {
      popup.classList.remove('popup--closed');
      popup.classList.add('popup--opened');
      document.body.classList.add('no-scroll');
    } else {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      document.body.classList.remove('no-scroll');
    }
  });
}
