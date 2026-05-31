
// v1

// const emailUser = document.querySelector('input[type=email]');
// const passwordUser = document.querySelector('input[type=password]');
// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const email = emailUser.value.trim();
//   const password = passwordUser.value.trim();
//   if (email === '' || password === '') {
//     alert('All form fields must be filled in');
//   }else{ console.log({ email, password });

//   loginForm.reset();
// }
//
// });

// v2
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim(),
  };
  if (formData.email === '' || formData.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
    loginForm.reset();
  }
});