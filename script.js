//Specific operator functions
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const equal = document.querySelector('#equal');

//Display values
let displayPrevValue = document.querySelector('#prev-values');
let displayCurrValue = document.querySelector('#curr-values');

//Grab all buttons
let numbers = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operators');

//Store values
let currNum = '';
let prevNum = '';
let answer = '';
let selectedOperator = '';

function handleNumber(number){
    if(currNum.length <= 10){
        currNum += number;
        displayCurrValue.textContent = currNum;
    }
}

function handleOperator(op){
    selectedOperator = op;
    prevNum = currNum;
    displayPrevValue.textContent = prevNum + ' ' + selectedOperator;
    currNum = '';
    displayCurrValue.textContent = '';
}

function reset(){
    currNum = '';
    prevNum = '';
    selectedOperator = '';
    displayPrevValue.textContent = '';
    displayCurrValue.textContent = '';
}

function operate(){
    displayPrevValue.textContent = `${prevNum} ${selectedOperator} ${currNum} =`

    prevNum = +prevNum;
    currNum = +currNum;

    switch(selectedOperator){
        case '+':
            answer = prevNum + currNum;
            break;
        case '-':
            answer = prevNum - currNum;
            break;
        case 'x':
            answer = prevNum * currNum;
            break;
        case '/':
            answer = prevNum / currNum;
            break;
    }
       
    answer = Math.round((answer + Number.EPSILON) * 100) / 100;

    displayCurrValue.textContent = answer;
    currNum = answer;
}

//Event Listeners
numbers.forEach(btn => btn.addEventListener('click', e => {
    handleNumber(e.target.textContent);
}));

operator.forEach(btn => btn.addEventListener('click', e =>{
    if(selectedOperator != ''){
        operate();
        handleOperator(e.target.textContent);
    } else{
        handleOperator(e.target.textContent);
    }
}));

equal.addEventListener('click', () => {
    if(currNum != '' && prevNum != ''){
        operate();
    }
});

clear.addEventListener('click', reset);
