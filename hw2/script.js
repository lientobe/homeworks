let firstNumber = Number(prompt('Enter the first number:'));
let secondNumber = Number(prompt('Enter the second number:'));
let operation = prompt('What operation do you need to perform on the numbers?');
let result;

if (isNaN(firstNumber) && isNaN(secondNumber)) {
    alert(`You didn't enter the numbers!`);
}
else {
    if (operation === '+') {
        result = firstNumber + secondNumber;
        alert(`The sum of the numbers is ${result}`);
    }
    else if (operation === '-') {
        result = firstNumber - secondNumber;
        alert(`The difference of the numbers is ${result}`);
    }
    else if (operation === '*') {
        result = firstNumber * secondNumber;
        alert(`The product of the numbers is ${result}`);
    }
    else if (operation === '/') {
        result = firstNumber / secondNumber;
        alert(`The fraction of numbers is ${result}`);
    }
    else {
        alert(`There is no such operation!`);
    }
}

