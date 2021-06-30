const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  // parseInt() function convert string ito a number
  currentResult = currentResult + parseInt(userInput.value);
  // or currentResult = currentResult + +userInput.value; /without decimal places
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
