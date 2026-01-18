let current = "";
let history = "";

const result = document.getElementById("result");
const historyEl = document.getElementById("history");

function appendNumber(num) {
  if (num === "." && current.includes(".")) return;
  current += num;
  updateDisplay();
}

function appendOperator(op) {
  if (current === "") return;
  history += current + " " + op + " ";
  current = "";
  updateDisplay();
}

function calculate() {
  if (current === "") return;
  try {
    let expression = history + current;
    current = eval(expression).toString();
    history = "";
    updateDisplay();
  } catch {
    current = "Error";
    history = "";
    updateDisplay();
  }
}

function clearAll() {
  current = "";
  history = "";
  updateDisplay();
}

function deleteLast() {
  current = current.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  result.textContent = current || "0";
  historyEl.textContent = history;
}
