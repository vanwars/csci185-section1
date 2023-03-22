function addNumbers() {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    
    let firstNumber = document.querySelector('#num1').value;
    // we need to convert the string to a number so that we can do math on it
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector('#num2').value;
    
    // we need to convert the string to a number so that we can do math on it
    secondNumber = Number(secondNumber);  
    let sum = firstNumber + secondNumber;

    document.querySelector('#answer').innerHTML = sum;
}

function subtractNumbers() {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    
    let firstNumber = document.querySelector('#num1').value;
    // we need to convert the string to a number so that we can do math on it
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector('#num2').value;
    
    // we need to convert the string to a number so that we can do math on it
    secondNumber = Number(secondNumber);  
    let difference = firstNumber - secondNumber;

    document.querySelector('#answer').innerHTML = difference;
}

function multiplyNumbers() {
    // Same as above but multiply!
}

function divideNumbers() {
    // Same as above but divide!
}

