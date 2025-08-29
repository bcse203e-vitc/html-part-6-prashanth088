const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passField = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
function validate() {
  let valid = true;
  if (nameField.value.trim() === "") {
    document.getElementById("nameErr").innerText = "Name required";
    valid = false;
  }
  else{
    document.getElementById("nameErr").innerText = "";
  }
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if(!emailRegex.test(emailField.value)) {
    document.getElementById("emailErr").innerText = "Invalid email";
    valid = false;
  } 
  else {
    document.getElementById("emailErr").innerText = "";
  }
  const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passRegex.test(passField.value)) {
    document.getElementById("passErr").innerText = "Weak password";
    valid = false;
  }
  else {
    document.getElementById("passErr").innerText = "";
  }
  submitBtn.disabled = !valid;
}
nameField.onblur = validate;
emailField.onblur = validate;
passField.onblur = validate;