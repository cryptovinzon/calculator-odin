function add(a, b){
    console.log(a + b);
}

function subtract(a, b){
    console.log(a - b);
}

function multiply(a, b){
    console.log(a * b);
}

function divide(a, b){
    console.log(a / b);
}

function operate(op, a, b){
    switch (op){
        case 'add':
            add(a, b);
            break;
        case 'subtract':
            subtract(a, b);
            break;
        case 'multiply':
            multiply(a, b)
            break;
        case 'divide':
            divide(a, b);
            break;
    }
}

let displayValue =''
let currentOperator = ''
let firstNumber = '';
let secondNumber ='';

// listen for numbers and display
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', display)
});

function display(e) {
    displayValue += e.target.innerHTML;
    document.getElementById('result').innerHTML = displayValue;
}

// listen for operators, record display as first number, get current operator
const operators = document.querySelectorAll('.operator')

operators.forEach(operator => {
    operator.addEventListener('click', (e) =>{
        firstNumber = parseFloat(displayValue);
        currentOperator = e.target.id;
        getSecondNumber();
    })
})

function getSecondNumber(){
    displayValue = '';
    display;
}

// clear and reset numbers
const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    displayValue = '';
    document.getElementById('result').innerHTML = '';
})

const solve = document.getElementById('solve');
solve.addEventListener('click', () => operate(currentOperator, firstNumber, parseFloat(displayValue)))