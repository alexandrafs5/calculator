let numberOneChosen = 7;
let numberTwoChosen = 5;
let operatorChosen = "+";

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function operate(operator) {
    if (operator == "+") {
        console.log(add(numberOneChosen, numberTwoChosen));
    } else if (operator == "-") {
        console.log(subtract(numberOneChosen, numberTwoChosen));
    } else if (operator == "*") {
        console.log(multiply(numberOneChosen, numberTwoChosen));
    } else if (operator == "/") {
        console.log(divide(numberOneChosen, numberTwoChosen));
    }
}

operate(operatorChosen);