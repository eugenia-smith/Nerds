'use strict';

let sliders = Array.from(document.querySelectorAll('.slider'));
let controls = Array.from(document.querySelector('.slider-controls').getElementsByTagName('button'));

let n = 0;

for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    //console.log(this);
    this.classList.add('current');
  });
}
