const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  // parseInt() function convert string ito a number
  currentResult = currentResult + enteredNumber;
  // or currentResult = currentResult + +userInput.value; /without decimal places
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
