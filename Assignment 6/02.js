const emailInput = document.getElementById("email2");
emailInput.onblur = function() {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (regex.test(emailInput.value)) {
    document.getElementById("emailMsg").innerHTML = "<span style='color:green'>Valid Email</span>";
  }
  else {
    document.getElementById("emailMsg").innerHTML = "<span style='color:red'>Invalid Email</span>";
  }
};