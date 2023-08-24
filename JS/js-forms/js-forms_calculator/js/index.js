console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numberA = document.getElementById("number-a");
const numberB = document.getElementById("number-b");
const operator = document.getElementById("operator");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const numberA = number(document.getElementById("number-a").value);
  const numberB = number(document.getElementById("number-b").value);

  const oper = document.getElementById("operator");

  if (oper === "+") {
    document.getElementById("result").value = numberA + numberB;
  }

  if (oper === "-") {
    document.getElementById("result").value = numberA - numberB;
  }

  if (oper === "/") {
    document.getElementById("result").value = numberA / numberB;
  }

  if (oper === "X") {
    document.getElementById("result").value = numberA * numberB;
  }
  resultOutput.textContent = result;
  // --^-- write your code here --^--
});

// let numberA = document.getElementById("number-a");
// let numberB = document.getElementById("number-b");
