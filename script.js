function operate(op, a, b){
    switch (op){
        case 'add':
            memory = a + b;
            break;
        case 'subtract':
            memory = a - b;
            break;
        case 'multiply':
            memory = a * b;
            break;
        case 'divide':
            memory = a / b;
            break;
    }    
    document.getElementById('result').innerHTML = Math.round(memory * 1000000 )/ 1000000;
}

let displayValue =''
let firstNumber = null;
let memory = null;
let currentOperator = ''

// listen for numbers and display
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', display)
})

function display(e) {
    displayValue += e.target.innerHTML;
    document.getElementById('result').innerHTML = displayValue;
}

// listen for operators, record display as first number, get current operator
const operators = document.querySelectorAll('.operator')

operators.forEach(operator => {
    operator.addEventListener('click', (e) =>{
        if(!firstNumber){
        firstNumber = parseFloat(displayValue);
        } else {
        operate(currentOperator, firstNumber, parseFloat(displayValue));
        firstNumber = memory;
        }
        currentOperator = e.target.id;
        displayValue = '';
        });
    })

// clear button
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    clearData();
    document.getElementById('result').innerHTML = ''; 
})

function clearData() {
    firstNumber = '';
    displayValue = '';
    memory = '';
    currentOperator = '';
}

// solve & clear data
const solve = document.getElementById('solve');
solve.addEventListener('click', () => {
    operate(currentOperator, firstNumber, parseFloat(displayValue));
    clearData();
})