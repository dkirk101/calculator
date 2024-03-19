//Project source: https://www.theodinproject.com/lessons/foundations-calculator
// Requirements from source
// Calculator needs to add, subtract, multiply, divide
// Calculator can continually calculate without having to be cleared
// Example: user can do 2 + 2 + 2, but 2 + 2 will be evaluated and then 4 + 2


let firstNum = '';
let operator = '';
let secondNum = '';

let topScreen = document.querySelector('.top-screen');
let bottomScreen = document.querySelector('.bottom-screen');
const numbers = document.querySelectorAll('.numBtn');
const operatorFns = document.querySelectorAll('.fnBtn');
const operate = document.querySelector('#equals');
const dot = document.querySelector('#dot');
const clearBtn = document.querySelector('#clear');


clearBtn.addEventListener('click', () => {
    console.clear();
    clear();
});


operatorFns.forEach(btn => btn.addEventListener('click', (event) => {
        handleOperators(btn.innerText)
        topScreen.textContent = secondNum + " " + operator;
        bottomScreen.textContent = '';
    })
);
    
numbers.forEach(btn => btn.addEventListener('click', (e) => {
        handleNums(btn.innerText)
        bottomScreen.textContent = firstNum;
})
);

equals.addEventListener('click', () => {
    calculate();
    topScreen.textContent = '';
    bottomScreen.textContent = secondNum;
});

function handleOperators(op){
    console.log(op);
    operator = op;
    secondNum = firstNum;
    firstNum = '';
}

function handleNums(nums) {
    console.log(nums);
    if (firstNum.length <= 14) {
        firstNum += nums;
    }
};

function clear() {
    firstNum = '';
    secondNum = '';
    operator = '';
    bottomScreen.textContent = '';
    topScreen.textContent = '';
}

function calculate() {
    secondNum = Number(secondNum)
    firstNum = Number(firstNum);

    if(operator === '+') {
        console.log(secondNum += firstNum);
        
    }

    secondNum = secondNum.toString();
    firstNum = firstNum.toString();

}