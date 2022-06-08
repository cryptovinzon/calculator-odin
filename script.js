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

let tempNumber;
let firstNumber;
let secondNumber;

// listen & return temp number
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', function(e){       
        tempNumber = parseInt(e.target.innerHTML);
        document.getElementById('result').innerHTML += tempNumber;
        });
})

// clear and reset numbers
const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    document.getElementById('result').innerHTML = '';
})


// store this AFTER operand clicked
        // firstNumber = parseInt(e.target.innerHTML);
