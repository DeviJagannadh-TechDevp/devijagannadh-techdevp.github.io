// Stop annoying page refresh!
const submit = document.querySelector('#btn-submit'),
form = document.querySelector('#form');

submit.addEventListener('click', e => {
  e.preventDefault();
  form.reset();
}, false);