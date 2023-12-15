// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

document.addEventListener("DOMContentLoaded", function () {
  let table = document.createElement("table");
  let headerRow = table.insertRow();

  for (let i = 1; i <= 10; i++) {
    let th = document.createElement("th");
    th.textContent = "Column " + i;
    headerRow.appendChild(th);
  }

  for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();

    for (let j = 1; j <= 10; j++) {
      let cell = row.insertCell();
      let number = (i - 1) * 10 + j;
      cell.textContent = number;
    }
  }

  document.body.appendChild(table);
});
