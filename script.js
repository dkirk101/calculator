//Project source: https://www.theodinproject.com/lessons/foundations-calculator
// Requirements from source
// Calculator needs to add, subtract, multiply, divide
// Calculator can continually calculate without having to be cleared
// Example: user can do 2 + 2 + 2, but 2 + 2 will be evaluated and then 4 + 2


// Receive and store 2 different numbers and an operator from the keypad input.

// const firstNum;
let num1;
let secondNum = 0;
let selectedOperator = null;

const screen = document.querySelector('.screen');
const firstChoice = document.querySelectorAll('.numBtn');
const operator = document.querySelectorAll('.fnBtn');

operator.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(btn.innerText);
        
        switch (btn.innerText) {
            case 'C': 
                clear();
            case '+':
                
        }
    })
});

firstChoice.forEach(btn => {
    btn.addEventListener('click', (event) => {
       screen.textContent += btn.innerText;
    })
})



// First number will be entered, but stored only when user selects an operator.
// Both numbers will be displayed on the screen as they are inputted.
// The second number will be stored once the user executes the calculation by
// using the = button.
// The = will determine what function to call based on the selected operator

function clear() {
    screen.textContent = '';
}