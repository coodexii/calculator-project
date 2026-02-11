const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const calculator = document.getElementById("calculator");
const toggleTheme = document.getElementById("toggleTheme");

let current = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (action === "clear") {
      current = "";
      updateDisplay("0");
      return;
    }

    if (action === "backspace") {
      current = current.slice(0, -1);
      updateDisplay(current || "0");
      return;
    }

    if (action === "equals") {
      try {
        current = eval(current).toString();
        updateDisplay(current);
      } catch {
        errorShake();
      }
      return;
    }

    if (value) {
      current += value;
      updateDisplay(current);
    }
  });
});

function updateDisplay(value) {
  display.textContent = value;
}

function errorShake() {
  calculator.classList.add("shake");
  setTimeout(() => calculator.classList.remove("shake"), 300);
}

// Theme Toggle
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleTheme.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});
