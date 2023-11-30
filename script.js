document.addEventListener('DOMContentLoaded', function() {
    var BA = document.getElementById('billAmount');
    var TP = document.getElementById('tipPercentage');
    var CT = document.getElementById('calculateTip');
    var TA = document.getElementById('tipAmount');

    CT.addEventListener('click', function() {
      var billAmount = parseFloat(BA.value);
      var tipPercentage = parseFloat(TP.value);

      var tipAmount = (billAmount * tipPercentage) / 100;
      TA.textContent = 'Tip Amount: $' + tipAmount.toFixed(2);
    });
  });