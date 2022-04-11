'use strict';

let feedbackButton = document.querySelector('.write-us');
let pagePopup = document.querySelector('.page-popup');
let closeButton = pagePopup.querySelector('.modal-close');
let author = pagePopup.querySelector('.author');
let feedbackForm = pagePopup.querySelector('.popup-form');
let email = pagePopup.querySelector('.email');
let essay = pagePopup.querySelector('.form-text');

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";


try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};


feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  pagePopup.classList.add('page-popup-show');

  if (storageName && storageEmail) {
    author.value = storageName;
    email.value = storageEmail;
    essay.focus();
  } else {
    author.focus();

  };
});

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  pagePopup.classList.remove('page-popup-show');
});

feedbackForm.addEventListener('submit', function (evt) {

  if (!author.value || !email.value || !essay.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', author.value);
      localStorage.setItem('email', email.value);
    }
  }

});

window.addEventListener("keydown", function (event) {
  if (event.code === 27) {
    if (pagePopup.classList.contains('page-popup-show')) {
      evt.preventDefault();
      pagePopup.classList.remove('page-popup-show');
    }
  }
});

