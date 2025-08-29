function validateDate() {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    let date = document.getElementById("date").value;
    if (!regex.test(date)) {
      alert("Invalid date format. Use DD/MM/YYYY");
      return false;
    }
    return true;
  }  