  function computeTax() {
    let income = parseFloat(document.getElementById("income").value);
    let tax = 0;
    let rate = "";

    if (income <= 250000) {
      tax = 0;
      rate = "0% (No tax)";
    } else if (income <= 400000) {
      tax = (income - 250000) * 0.20;
      rate = "20% of excess over ₱250,000";
    } else if (income <= 800000) {
      tax = 30000 + (income - 400000) * 0.25;
      rate = "25% of excess over ₱400,000";
    } else if (income <= 2000000) {
      tax = 130000 + (income - 800000) * 0.30;
      rate = "30% of excess over ₱800,000";
    } else if (income <= 8000000) {
      tax = 490000 + (income - 2000000) * 0.32;
      rate = "32% of excess over ₱2,000,000";
    } else if (income > 8000000) {
      tax = 2410000 + (income - 8000000) * 0.35;
      rate = "35% of excess over ₱8,000,000";
    } else {
      tax = "Invalid";
      rate = "Invalid";
    }

    document.getElementById("rate").value = rate;
    document.getElementById("incomeTax").value = tax.toFixed(2);
  }