window.addEventListener("DOMContentLoaded", () => {
  initGUI();

  document.getElementById("addProfile").addEventListener("click", addProfile);
  document.getElementById("clearBtn").addEventListener("click", clearInputs);
  document.getElementById("deleteButton").addEventListener("click", deleteProfile);
});

let gui = [];

function initGUI() {
  gui = [];
  showGUI();
}

function addProfile() {
  const employeedescinput = {
    name: document.getElementById("nameInput").value,
    daysWorked: parseFloat(document.getElementById("daysWorkedInput").value),
    rate: parseFloat(document.getElementById("rateInput").value),
    deduc: parseFloat(document.getElementById("deducInput").value),
  };

  if (!employeedescinput.name) {
    alert("Please enter a name.");
    return;
  }

  employeedescinput.gross = employeedescinput.daysWorked * employeedescinput.rate;
  employeedescinput.net = employeedescinput.gross - employeedescinput.deduc;

  gui.push(employeedescinput);
  showGUI();
}

function showGUI() {
  const tbody = document.getElementById("payrollBody");
  tbody.innerHTML = "";

  gui.forEach((emp, i) => {
    const row = `
      <tr>
        <td>${i + 1}</td>
        <td>${emp.name}</td>
        <td style="text-align:right">${emp.daysWorked}</td>
        <td style="text-align:right">${emp.rate}</td>
        <td style="text-align:right">${emp.gross.toFixed(2)}</td>
        <td style="text-align:right">${emp.deduc.toFixed(2)}</td>
        <td style="text-align:right">${emp.net.toFixed(2)}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function clearInputs() {
  if (confirm("Clear all inputs?")) {
    document.getElementById("nameInput").value = "";
    document.getElementById("daysWorkedInput").value = "";
    document.getElementById("rateInput").value = "";
    document.getElementById("deducInput").value = "";
  }
}

function deleteProfile() {
  const num = parseInt(document.getElementById("number").value, 10);

  if (isNaN(num) || num < 1 || num > gui.length) {
    alert("Invalid employee number.");
    return;
  }

  if (confirm(`Delete employee no.${num}?`)) {
    gui.splice(num - 1, 1);
    showGUI();
  }
}