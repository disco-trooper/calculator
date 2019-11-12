// Display content
let displayValue = document.querySelector("#display-text");

// Store operator
let currentOperator = "";
let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operator) => {
    operator.addEventListener("click", () => {
        operatorButtons.forEach((operator) => operator.style.boxShadow = "");
        operator.style.boxShadow = "inset 0 0 0 2px #000";
        if (displayValue.textContent) currentOperator = `${operator.id}`;
    });
})

// Plus-minus button
let plusMinusButton = document.querySelector(".plus-minus");
plusMinusButton.addEventListener("click", () => displayValue.textContent = -displayValue.textContent);

// Clickable number buttons
let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (displayValue.textContent == "" && number.textContent == 0) {
            return;
        }
        displayValue.textContent = `${displayValue.textContent + number.textContent}`;
    });
});

// Clear display
let clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", () => {
    operatorButtons.forEach((operator) => operator.style.boxShadow = "");
    displayValue.textContent = "";
});

// Percent function
let percentButton = document.querySelector(".percent");
percentButton.addEventListener("click", () => displayValue.textContent = `${parseInt(displayValue.textContent) * 0.01}`)



// Basic math operators
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === "add") return add(a, b);
    if (operator === "subtract") return subtract(a, b);
    if (operator === "multiply") return multiply(a, b);
    if (operator === "divide") return divide(a, b);
}