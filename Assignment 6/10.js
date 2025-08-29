function addField() {
    let type = document.getElementById("inputType").value;
    let input = document.createElement("input");
    input.type = type;
    input.placeholder = "Enter " + type;
    input.onblur = function() {
      let regex;
      if (type === "text") regex = /^[A-Za-z\s]+$/;
      else if (type === "email") regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      else if (type === "password") regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!regex.test(input.value)) {
        alert("Invalid " + type + " input!");
      }
    };
    document.getElementById("formArea").appendChild(document.createElement("br"));
    document.getElementById("formArea").appendChild(input);
  }