var emailInput = document.getElementById("email");
var NameInput = document.getElementById("Name");
var passwordInput = document.getElementById("password");
var signIn = document.getElementById("SignIn");

// ======================Start Validation =========================
var regexEmail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/; // Email regex
var regexName = /^[a-zA-Z_\s]+$/; // Name regex
var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;  // Password regex

signIn.addEventListener('click', function () {
  // Check if any input is empty
  if (emailInput.value === "" || NameInput.value === "" || passwordInput.value === "" ) {
    alert("Please complete the inputs.");
    return;
  }

  // Validate email and name inputs
  var isEmailValid = regexEmail.test(emailInput.value);
  var isNameValid = regexName.test(NameInput.value);
  var isPasswordValid = regexPassword.test(passwordInput.value);

  if (isEmailValid && isNameValid && isPasswordValid) {
    // ======================Local Storage =========================
    localStorage.setItem('userName', NameInput.value);
    window.location.href = 'main.html';
  } else {
    if (!isEmailValid){
      alert("Invalid email format. It should be like example@domain.com.");
    } 
    if (!isNameValid) {
      alert("Name should only contain letters (no numbers or symbols).");
    }
    if (!isPasswordValid) {
      alert("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.");
    }
  }
});
// ======================End Validation =========================



