//Project source: https://www.theodinproject.com/lessons/foundations-calculator
// Requirements from source
// Calculator needs to add, subtract, multiply, divide
// Calculator can continually calculate without having to be cleared
// Example: user can do 2 + 2 + 2, but 2 + 2 will be evaluated and then 4 + 2


// Receive and store 2 different numbers and an operator from the keypad input.

const firstNum = [1, 0, 3];
let secondNum = 0;
let selectedOperator = null;

const screenValue = document.querySelector('.screen');
screenValue.textContent = firstNum;

const firstChoice = document.querySelector('.buttons');

firstChoice.addEventListener('click', (event) => {
    let target = event.target;
    currentValue = target.getAttribute(target.value);
    console.log(target);
});

// First number will be entered, but stored only when user selects an operator.
// Both numbers will be displayed on the screen as they are inputted.
// The second number will be stored once the user executes the calculation by
// using the = button.
// The = will determine what function to call based on the selected operator

