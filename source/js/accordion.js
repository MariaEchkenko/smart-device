'use strict';

(function () {
  var accrodionElements = document.querySelectorAll('.page-footer__accordion');
  var accordionButtons = document.querySelectorAll('.page-footer__accordion h3');
  var mobileScreen = window.matchMedia('(max-width: 767px)');

  if (accrodionElements) {
    for (var i = 0; i < accrodionElements.length; i++) {
      accrodionElements[i].classList.remove('page-footer__accordion--nojs');
    }
  }

  if (accordionButtons) {
    for (var k = 0; k < accordionButtons.length; k++) {
      accordionButtons[k].addEventListener('click', function (evt) {
        evt.preventDefault();
        if (mobileScreen.matches) {
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
        }
      });
    }
  }
})();
