const submitBtn = document.querySelector('.js-contact-form-submit');

submitBtn.addEventListener('click', e => {
  //   e.preventDefault();
  const fields = document.querySelectorAll('.js-required-field');

  console.log(fields);

  fields.forEach(field => {
    console.log(field);
    field.classList.add('required');
  });
});
