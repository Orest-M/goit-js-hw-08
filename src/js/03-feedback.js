import throttle from 'lodash.throttle';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

const KEY = 'feedback-form-state';
let formData = {};

res();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();

  const savedForm = localStorage.getItem(KEY);
  const parseForm = JSON.parse(savedForm);
  console.log(parseForm);

  evt.target.reset();
  localStorage.removeItem(KEY);
}

function res() {
  formData = JSON.parse(localStorage.getItem(KEY)) || {};

  if (formData.email && formData.message) {
    email.value = formData.email;
    message.value = formData.message;
  }
}
