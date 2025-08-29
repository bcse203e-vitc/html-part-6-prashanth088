const phone = document.getElementById("phone");
phone.addEventListener("input", function() {
  const regex = /^(\(\d{3}\)\s?\d{3}-\d{4}|\d{3}-\d{3}-\d{4})$/;
  if(regex.test(phone.value)) {
    document.getElementById("phoneMsg").innerHTML = "<span style='color:green'>Valid Phone</span>";
  }
  else {
    document.getElementById("phoneMsg").innerHTML = "<span style='color:red'>Invalid Phone</span>";
  }
});