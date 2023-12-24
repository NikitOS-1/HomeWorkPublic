function submitForm() {
  var formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    dob: document.getElementById("dob").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    city: document.getElementById("city").value,
    address: document.getElementById("address").value,
    languages: Array.from(
      document.querySelectorAll('input[name="languages"]:checked')
    ).map((checkbox) => checkbox.value),
  };

  var table = document.getElementById("dataTable");
  table.innerHTML = "<tr><th>Поле</th><th>Значення</th></tr>";
  for (var key in formData) {
    table.innerHTML +=
      "<tr><td>" + key + "</td><td>" + formData[key] + "</td></tr>";
  }

  document.getElementById("registrationForm").style.display = "none";
  table.style.display = "table";
}
