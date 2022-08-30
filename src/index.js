(function validateForm() {
  let email = document.getElementById('email');
  let country = document.getElementById('country');
  let zipcode = document.getElementById('zipcode');
  let password = document.getElementById('password');
  let passwordConfirm = document.getElementById('passwordConfirm');
  let errorText = document.getElementsByClassName('errorText');
  let form = document.getElementById('form');

  form.addEventListener('submit', function (e) {
    if (
      !email.validity.valid ||
      !country.validity.valid ||
      !zipcode.validity.valid ||
      !password.validity.valid ||
      !passwordConfirm.validity.valid ||
      password.value !== passwordConfirm.value
    ) {
      e.preventDefault();
    } else {
      e.preventDefault();
      alert('yay form submitted!');
      window.location.reload();
    }
  });
  email.addEventListener('input', () => {
    if (email.validity.valueMissing) {
      errorText[0].innerText = 'You need to enter an email address.';
    } else if (email.validity.typeMismatch) {
      errorText[0].innerText = 'Please enter valid email';
    } else if (email.validity.valid) {
      errorText[0].innerText = '';
    }
  });

  country.addEventListener('input', () => {
    if (country.validity.valueMissing) {
      errorText[1].innerText = 'Country name required.';
    } else if (country.validity.patternMismatch) {
      errorText[1].innerText = 'No Numbers Allowed.';
    } else if (country.validity.valid) {
      errorText[1].innerText = '';
    }
  });

  zipcode.addEventListener('input', () => {
    if (zipcode.validity.valueMissing) {
      errorText[2].innerText = 'Zipcode required';
    } else if (zipcode.validity.patternMismatch) {
      errorText[2].innerText = 'Only numbers allowed and up to 5 digits';
    } else if (zipcode.validity.tooShort) {
      errorText[2].innerText = "Too short need 5 digits for example '4 7 6 5 0'";
    } else if (zipcode.validity.valid) {
      errorText[2].innerText = '';
    }
  });

  password.addEventListener('input', () => {
    if (password.validity.valueMissing) {
      errorText[3].innerText = 'Password required';
    } else if (password.validity.patternMismatch) {
      errorText[3].innerText = 'Need atleast 6 letters';
    } else if (password.validity.tooShort) {
      errorText[3].innerText = 'Need atleast 6 letters';
    } else if (password.validity.valid) {
      errorText[3].innerText = '';
    }
  });
  passwordConfirm.addEventListener('input', () => {
    if (passwordConfirm.validity.valueMissing) {
      errorText[4].innerText = 'Password required';
    } else if (passwordConfirm.validity.patternMismatch) {
      errorText[4].innerText = 'Need atleast 6 letters';
    } else if (passwordConfirm.validity.tooShort) {
      errorText[4].innerText = 'Need atleast 6 letters';
    } else if (passwordConfirm.value !== password.value) {
      errorText[4].innerText = "Password don't match";
      passwordConfirm.classList.add('activeerror');
    } else if (passwordConfirm.validity.valid) {
      errorText[4].innerText = '';
      passwordConfirm.classList.remove('activeerror');
    }
  });
  document.querySelectorAll('input').forEach(function (element) {
    element.addEventListener('focus', function () {
      if (this.checkValidity()) {
        this.classList.remove('error');
      } else {
        this.classList.add('error');
      }
    });
  });
})();
