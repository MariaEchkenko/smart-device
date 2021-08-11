'use strict';

var popupButton = document.querySelector('.user-nav__button');
var popup = document.querySelector('.popup');
var popupWrapper = document.querySelector('.popup__wrapper');
var popupCloseButton = document.querySelector('.popup__button-close');
var userName = document.querySelector('#popup-name');
var userTel = document.querySelector('#popup-tel');
var popupText = document.querySelector('#popup-text');

let isStorageSupport = true;
let storageName = '';
let storageTel = '';
let storageText = '';

try {
  storageName = localStorage.getItem('user-name');
  storageTel = localStorage.getItem('user-tel');
  storageText = localStorage.getItem('text');
} catch (err) {
  isStorageSupport = false;
}


popupButton.addEventListener('click', function () {
  popup.classList.add('popup--opened');
  document.body.classList.add('no-scroll');
  userName.focus();

  if (storageName) {
    userName.value = storageName;
    userTel.value = storageTel;
    popupText.value = storageText;
  }

  popupCloseButton.addEventListener('click', closePopup);

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      closePopupHandler();
    }
  });

  popup.addEventListener('click', function (evt) {
    if (evt.target !== popupWrapper) {
      closePopupHandler();
    }
  });

});

popupWrapper.addEventListener('click', function (evt) {
  evt.stopPropagation();
});

function closePopup() {
  popup.classList.remove('popup--opened');
  document.body.classList.remove('no-scroll');
}

function closePopupHandler() {
  closePopup();
  window.removeEventListener('keydown', closePopupHandler);
  popupCloseButton.removeEventListener('click', closePopupHandler);
  popupButton.removeEventListener('click', closePopupHandler);
}
