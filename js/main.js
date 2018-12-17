// Set up initial state

let displayNumber = 0;
let incrementBy = 1;

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('DOM fully loaded and parsed');

  numberDisplay = document.getElementById('number-to-display');
  plusButton = document.getElementById('plus');
  minusButton = document.getElementById('minus');
  incrementByField = document.getElementById('increment-by');

  plusButton.addEventListener('click', function(e) {
    e.preventDefault();
    displayNumber += Number(incrementByField.value);
    console.log('plus!', displayNumber);
    numberDisplay.innerText = displayNumber;
    setColor();
  });

  minusButton.addEventListener('click', function(e) {
    e.preventDefault();
    displayNumber -= Number(incrementByField.value);
    console.log('minus!', displayNumber);
    numberDisplay.innerText = displayNumber;
    setColor();
  });
});

function setColor() {
  if (displayNumber >= 0) {
    numberDisplay.classList.remove('red');
  } else {
    numberDisplay.classList.add('red');
  }
}
