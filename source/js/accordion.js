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
