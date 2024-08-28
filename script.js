let previousValue = "";
let currentValue = "";
let operatorChosen = "";
let result = "";

const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const erase = document.querySelector(".erase");
const equals = document.querySelector(".result");
const numbers = document.querySelectorAll(".numbers");
const currentScreen = document.querySelector(".current");
const previousScreen = document.querySelector(".previous");
const operators = document.querySelectorAll(".operators");

numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
}))

operators.forEach((operator) => operator.addEventListener("click", function(e){
    handleOperator(e.target.textContent);
    currentScreen.textContent = "";
    previousScreen.textContent = previousValue + " " + operatorChosen;
}))

equals.addEventListener("click", function() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operatorChosen === "+") {
        result = previousValue + currentValue;
    } else if (operatorChosen === "-") {
        result = previousValue - currentValue;
    } else if (operatorChosen === "*") {
        result = previousValue * currentValue;
    } else if (operatorChosen === "/") {
        result = previousValue / currentValue;
    } else if (operatorChosen === "%") {
        result = previousValue % currentValue;
    }

    previousScreen.textContent = previousValue + operatorChosen + currentValue + "=";
    currentScreen.textContent = result;
    previousValue = result;

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
})

dot.addEventListener("click", function(e){
    handlePoint(e.target.textContent);
    currentScreen.textContent = currentValue;
})

erase.addEventListener("click", function(e){
    handleDelete(e.target.textContent);
    currentScreen.textContent = currentValue;
})

function handleNumber(number) {
    if (currentValue.length <= 16) {
        currentValue += number;
    }
}

function handleOperator(operator) {
    operatorChosen = operator;
    previousValue = currentValue;
    currentValue = "";
}

function handlePoint() {
    if (currentValue.length <= 16) {
        currentValue += ".";
    }
}

function handleDelete() {
    currentValue = currentValue.slice(0, currentValue.length - 1);
}