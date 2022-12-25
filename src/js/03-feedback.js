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

  console.log(formData);

  evt.target.reset();
  localStorage.removeItem(KEY);
}

function res() {
  try {
    const data = localStorage.getItem(KEY);

    if (data) {
      formData = JSON.parse(data);
    } else {
      return
    }

    if (formData.email && formData.message) {
      Object.entries(formData).forEach(([key, value]) => {
        form.elements[key].value = value;
      });
    }
  } catch (error) {
    console.log(error);
  }
}
