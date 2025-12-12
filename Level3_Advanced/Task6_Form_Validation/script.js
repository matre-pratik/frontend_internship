const form = document.getElementById("registrationForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

// Form validation on submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Name validation
  if (name.value.trim().length < 3) {
    message.style.color = "red";
    message.textContent = "Name must be at least 3 characters long.";
    return;
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email address.";
    return;
  }

  // Password validation
  if (password.value.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  // Confirm password check
  if (password.value !== confirmPassword.value) {
    message.style.color = "red";
    message.textContent = "Passwords do not match.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Registration Successful!";

  form.reset();
});
