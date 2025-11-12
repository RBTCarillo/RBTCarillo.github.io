function checkConversion() {
  let conversion = document.getElementById("conversionSelect").value;
  let input = parseFloat(document.getElementById("input").value);
  let output = document.getElementById("output");

  if (isNaN(input)) {
    alert("Please enter a valid number.");
    output.value = "";
    return;
  }

  let outputValue;

  if (conversion === "ctoF") {
    outputValue = (input * 9/5) + 32;
  } else if (conversion === "ftoC") {
    outputValue = (input - 32) * 5/9;
  } else if (conversion === "mtoF") {
    outputValue = input * 3.28084;
  } else if (conversion === "ftoM") {
    outputValue = input / 3.28084;
  }

  output.value = outputValue.toFixed(2);
}

function clearValues() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}