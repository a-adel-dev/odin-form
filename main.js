const form = document.querySelector('form');

form.addEventListener('submit', e => {
  const pass1 = document.querySelector('#pass');
  const pass2 = document.querySelector('#pass-repeat');
  const errorMsg = document.querySelector('.invalid-pass');
  if (pass1 !== pass2) {
    e.preventDefault();
    pass1.classList.add('incorrect');
    pass2.classList.add('incorrect');
    errorMsg.style.opacity = 1;
  }
});
