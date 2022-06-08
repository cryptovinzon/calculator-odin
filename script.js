function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function operate(operator, a, b){
    return operator(a,b)
}

let displayValue =''
let currentOperator = ''
let firstNumber = '';
let secondNumber ='';

// listen for numbers and display
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', function(e){       
        displayValue += e.target.innerHTML;
        document.getElementById('result').innerHTML += e.target.innerHTML;
        });
})

// listen for operators, record display as first number, get current operator
const operators = document.querySelectorAll('.operator')

operators.forEach(operator => {
    operator.addEventListener('click', (e) =>{
        firstNumber = parseFloat(displayValue);
        currentOperator = e.target.id;
        console.log(firstNumber)
        console.log(currentOperator)
    })
})

// clear and reset numbers
const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    document.getElementById('result').innerHTML = '';
})
