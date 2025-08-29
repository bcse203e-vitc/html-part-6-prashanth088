const p1 = document.getElementById("pass1");
const p2 = document.getElementById("pass2");
function checkMatch() {
  if (p1.value && p1.value === p2.value) {
    document.getElementById("matchMsg").innerHTML = "<span style='color:green'>Passwords match</span>";
  }
  else {
    document.getElementById("matchMsg").innerHTML = "<span style='color:red'>Passwords do not match</span>";
  }
}
p1.addEventListener("input", checkMatch);
p2.addEventListener("input", checkMatch);