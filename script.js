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

clear.addEventListener("click", function(){
    handleClear();
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

function handleClear() {
    location.reload();
}

document.addEventListener('keydown', (event) => {
	if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') {
        operators.forEach(operator => {
            if (operator.textContent === event.key) {
                operator.textContent = event.key;
                operator.click();
            }
        });
	}
    if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0') {
        numbers.forEach(number => {
            if (number.textContent === event.key) {
                number.textContent = event.key;
                number.click();
            }
        });
	}
	if (event.key === 'Backspace' || event.key ==='c' || event.key === 'C') {
		erase.click();	
	}
	if (event.key === '=' || event.key === 'Enter') {
		equals.click();	
	}
	if (event.key === '.') {
		dot.click();	
	}
    if (event.key === 'Escape') {
		clear.click();	
	}
});