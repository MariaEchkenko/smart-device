'use strict';

(function () {
  var accrodionElements = document.querySelectorAll('.page-footer__accordion');
  var accordionButtons = document.querySelectorAll('.page-footer__accordion h3');
 // var mobileScreen = window.matchMedia('(max-width: 767px)');

  if (accrodionElements) {
    for (var i = 0; i < accrodionElements.length; i++) {
      accrodionElements[i].classList.remove('page-footer__accordion--nojs');
    }
  }

  if (accordionButtons) {
    for (var k = 0; k < accordionButtons.length; k++) {
      accordionButtons[k].addEventListener('click', function (evt) {
        evt.preventDefault();
        var array = Array.from(accordionButtons);
        var target = evt.target;
        var index = array.indexOf(target);

        array.forEach(function (item, j) {
          if (j === index) {
            accrodionElements[j].classList.toggle('page-footer__accordion--active');
          } else {
            accrodionElements[j].classList.remove('page-footer__accordion--active');
          }
        });
        /*if (mobileScreen.matches) {
          var array = Array.from(accordionButtons);
          var target = evt.target;
          var index = array.indexOf(target);

          array.forEach(function (item, j) {
            if (j === index) {
              accrodionElements[j].classList.toggle('page-footer__accordion--active');
            } else {
              accrodionElements[j].classList.remove('page-footer__accordion--active');
            }
          });
        }*/
      });
    }
  }
})();

'use strict';

(function () {
  var userPhone = document.querySelector('#user-tel');
  var userName = document.querySelector('#user-name');
  var buttonForm = document.querySelector('.feedback__button');

  var im = new Inputmask('+7 (999) 999-99-99');
  if (userPhone) {
    im.mask(userPhone);
  }

  if (buttonForm) {
    buttonForm.addEventListener('click', function (evt) {
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

      if (userPhone) {
        if (userPhone.value.length === 0) {
          evt.preventDefault();
          userPhone.setCustomValidity('Введите номер телефона');
        } else if (userPhone.value.length > 0) {
          var phoneNumber = userPhone.value.split('');
          if (phoneNumber.includes('_')) {
            userPhone.setCustomValidity('Введите номер телефона полностью');
          } else {
            userPhone.setCustomValidity('');
          }
        } else {
          userPhone.setCustomValidity('');
        }
        userPhone.reportValidity();
        localStorage.setItem('phone', userPhone.value);
      }
    });
  }

  userPhone.addEventListener('input', function () {
    userPhone.setCustomValidity('');
  });

  userName.addEventListener('input', function () {
    userName.setCustomValidity('');
  });
})();



'use strict';

(function () {
  var popupButton = document.querySelector('.user-nav__button');
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

})();
