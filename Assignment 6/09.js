const data = {
    "Asia": ["India", "China", "Japan"],
    "Europe": ["France", "Germany", "Italy"]
  };  
  function updateCountries() {
    let continent = document.getElementById("continent").value;
    let countryDropdown = document.getElementById("country");
    countryDropdown.innerHTML = "<option value=''>Select Country</option>";
    if (continent && data[continent]) {
      data[continent].forEach(c => {
        let option = document.createElement("option");
        option.value = c;
        option.text = c;
        countryDropdown.add(option);
      });
    }
  }