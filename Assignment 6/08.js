const colorInput = document.getElementById("colorCode");
colorInput.addEventListener("input", function() {
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (regex.test(this.value)) {
    document.getElementById("preview").style.backgroundColor = this.value;
  }
});