'use strict';

let slideIndex = 0;
showSlides();

/*for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    //console.log(this);
    this.classList.add('current');
  });
}*/

function showSlides() {
  let slides = Array.from(document.querySelectorAll('.slide'));
  let controls = Array.from(document.querySelector('.slider-controls').getElementsByTagName('button'));
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;


  if (slideIndex > slides.length) {
    slideIndex = 1};

  for (let i = 0; i < controls.length; i++) {
    controls[i].classList.remove('current');
  };

  slides[slideIndex - 1].style.display = "flex";
  controls[slideIndex - 1].classList.add('current');
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
