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

let firstNumber;
let secondNumber;

// listen & return numbers
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', function(e){       
        firstNumber = parseInt(e.target.innerHTML);
        document.getElementById('result').innerHTML = firstNumber
        });
})

// clear and reset numbers
const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    document.getElementById('result').innerHTML = 0;
})