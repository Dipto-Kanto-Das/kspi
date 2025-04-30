// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Custom JS loaded!");
   
  });

  function toggleReadMore() {
    const shortText = document.getElementById("short-text");
    const fullText = document.getElementById("full-text");
    const button = event.target;

    if (fullText.classList.contains("d-none")) {
      shortText.classList.add("d-none");
      fullText.classList.remove("d-none");
      button.textContent = "Read Less";
    } else {
      shortText.classList.remove("d-none");
      fullText.classList.add("d-none");
      button.textContent = "Read More";
    }
 
  }
// log
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Here, you can replace the below with actual authentication logic
  if (username === 'admin' && password === 'password123') {
      alert('Login successful');
      // Redirect or further actions
  } else {
      document.getElementById('error-message').style.display = 'block';
  }
});
// sigup
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Simple validation for matching passwords
  if (password !== confirmPassword) {
      document.getElementById('error-message').innerText = 'Passwords do not match!';
      document.getElementById('error-message').style.display = 'block';
      return;
  }

  // Here, you can replace the below with actual signup logic
  if (username && email && password) {
      alert('Signup successful');
      // Redirect or further actions
  } else {
      document.getElementById('error-message').innerText = 'Please fill out all fields.';
      document.getElementById('error-message').style.display = 'block';
  }
});

