const button = document.getElementById('submit-button');
button.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the button from submitting normally
  const form = document.getElementById('signup-form');
  const firstName = form.elements['first_name'].value;
  const lastName = form.elements['last_name'].value;
  const email = form.elements['email'].value;
  const phoneNumber = form.elements['phone_number'].value;
  const password = form.elements['password'].value;
  const confirmPassword = form.elements['confirm_password'].value;
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Email: ${email}`);
  console.log(`Phone Number: ${phoneNumber}`);
  console.log(`Password: ${password}`);
  console.log(`Confirm Password: ${confirmPassword}`);
});

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const passwordError = document.getElementById('password-error');

function validatePassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.setCustomValidity('Passwords do not match');
    confirmPasswordInput.setCustomValidity('Passwords do not match');
    passwordError.textContent = '*Passwords do not match';
  } else {
    passwordInput.setCustomValidity('');
    confirmPasswordInput.setCustomValidity('');
    passwordError.textContent = '';
  }
}

passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);



