'use strict';

(function () {
  var popupButton = document.querySelector('.page-header__button');
  var popup = document.querySelector('.popup');
  var popupWrapper = document.querySelector('.popup__wrapper');
  var popupSendButton = document.querySelector('.popup__button');
  var popupCloseButton = document.querySelector('.popup__button-close');
  var userName = document.querySelector('#popup-name');
  var userTel = document.querySelector('#popup-tel');
  var popupText = document.querySelector('#popup-text');

  var im = new Inputmask('+7 (999) 999-99-99');
  im.mask(userTel);

  if (popupSendButton) {
    popupSendButton.addEventListener('click', function (evt) {
      if (userName) {
        if (userName.value.length === 0) {
          evt.preventDefault();
          userName.setCustomValidity('Введите ваше имя');
        } else {
          userName.setCustomValidity('');
        }
        userName.reportValidity();
        localStorage.setItem('name', userName.value);
      }

      if (userTel) {
        if (userTel.value.length === 0) {
          evt.preventDefault();
          userTel.setCustomValidity('Введите номер телефона');
        } else if (userTel.value.length > 0) {
          var phoneNumber = userTel.value.split('');
          if (phoneNumber.includes('_')) {
            userTel.setCustomValidity('Введите номер телефона полностью');
          } else {
            userTel.setCustomValidity('');
          }
        } else {
          userTel.setCustomValidity('');
        }
        userTel.reportValidity();
        localStorage.setItem('phone', userTel.value);
      }

      if (popupText) {
        localStorage.setItem('text', popupText.value);
      }
    });
  }

  userTel.addEventListener('input', function () {
    userTel.setCustomValidity('');
  });

  userName.addEventListener('input', function () {
    userName.setCustomValidity('');
  });

  popupButton.addEventListener('click', function () {
    popup.classList.add('popup--opened');
    document.body.classList.add('no-scroll');

    userName.focus();

    localStorage.setItem('name', userName.value);
    localStorage.setItem('tel', userTel.value);
    localStorage.setItem('text', popupText.value);

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

  /* Ловушка фокуса */

  function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }

  if (popup) {
    trapFocus(popup);
  }

})();
