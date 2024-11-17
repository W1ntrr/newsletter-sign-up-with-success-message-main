'use strict';

const emailIn = document.getElementById('email');
const subscribeBtn = document.querySelector('.subscribe');
const successModal = document.querySelector('.card-success');
const errorMsg = document.querySelector('.error');
const card = document.querySelector('.sign-up');
const submittedEmail = document.querySelector('.submitted-email');

subscribeBtn.addEventListener('click', subscribe);

function subscribe(e) {
  e.preventDefault();
  if (ValidateEmail(emailIn.value)) {
    card.classList.add('hidden');
    successModal.classList.remove('hidden');
    submittedEmail.textContent = emailIn.value;
    emailIn.value = '';
  } else {
    emailIn.classList.add('error-input');
    errorMsg.classList.remove('hidden');
  }
}

function ValidateEmail(email) {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
function dismiss() {
  card.classList.remove('hidden');
  successModal.classList.add('hidden');
  emailIn.classList.remove('error-input');
  errorMsg.classList.add('hidden');
}
