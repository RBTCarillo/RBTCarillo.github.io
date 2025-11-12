function check() {
  let operation = document.getElementById("operationSelect").value;
  let input = parseFloat(document.getElementById("input").value);
  let output = document.getElementById("output");

  if (isNaN(input)) {
    alert("Please enter a valid number.");
    output.value = "";
    return;
  }

   let outputValue = 0;

  if (operation === "factorial") {
    let fact = 1;
    for (let i = 1; i <= input; i++) {
      fact *= i;
    }
    outputValue = fact;

  } else if (operation === "sum") {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    outputValue = sum;

  } else if (operation === "average") {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    outputValue = sum / input;
  }

  output.value = outputValue.toFixed(2);
}

function clearValues() {
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
}