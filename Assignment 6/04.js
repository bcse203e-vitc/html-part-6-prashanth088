function addHobby() {
    let div = document.getElementById("hobbies");
    let input = document.createElement("input");
    input.type = "text";
    input.className = "hobby";
    input.placeholder = "Enter hobby";
    input.onblur = () => {
      let regex = /^[A-Za-z\s]+$/;
      if (!regex.test(input.value)) {
        alert("Invalid hobby, only letters allowed!");
      }
    };
    div.appendChild(document.createElement("br"));
    div.appendChild(input);
  }  