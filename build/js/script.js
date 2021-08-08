'use strict';

var navButton = document.querySelector('.page-footer__nav h3');
var navList = document.querySelector('.page-footer__list');
var contactsButton = document.querySelector('.page-footer__contacts h3');
var contactsList = document.querySelector('.page-footer__contacts-list');

navButton.addEventListener('click', function () {
  navList.classList.toggle('page-footer__list--active');
  if (contactsList.classList.contains('page-footer__contacts-list--active')) {
    contactsList.classList.remove('page-footer__contacts-list--active');
  }
});

contactsButton.addEventListener('click', function () {
  contactsList.classList.toggle('page-footer__contacts-list--active');
  if (navList.classList.contains('page-footer__list--active')) {
    navList.classList.remove('page-footer__list--active');
  }
});

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
