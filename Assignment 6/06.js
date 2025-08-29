document.getElementById("username").addEventListener("blur", function() {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    if(regex.test(this.value)) {
      document.getElementById("userMsg").innerHTML = "<span style='color:green'>Valid Username</span>";
    }
    else {
      document.getElementById("userMsg").innerHTML = "<span style='color:red'>Invalid Username</span>";
    }
  });  