const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const equal = document.querySelector('#equal');

let numbers = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operators');

let prevValue = document.querySelector('#prev-values');
let currValue = document.querySelector('#curr-values');

function add(prevValue, currValue){
    return prevValue + currValue;
}

function subtraction(prevValue, currValue){
    return prevValue - currValue;
}

function multiplication(prevValue, currValue){
    return prevValue * currValue;
}

function division(prevValue, currValue){
    return prevValue/currValue;
}

function operate(prevValue, currValue, operator){
    switch(operator){
        case '+':
            return add(prevValue, currValue);
        case '-':
            return subtraction(prevValue, currValue);
        case 'x':
            return multiplication(prevValue, currValue);
        case '/':
            return division(prevValue, currValue);
        default:
            return 'Error in switch statement.';
    }
}

numbers.forEach(number => number.addEventListener('click', e => {
    let num = +(e.target.textContent);
    currValue.textContent += num;
}));

