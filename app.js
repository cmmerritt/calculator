//  grab DOM elements

// set event listeners on each button, do math, and update DOM

import { add, subtract, multiply, divide } from '../utilities.js';


function initOperator(firstInputId, secondInputId, buttonId, resultsId, calc) {
    const input1 = document.getElementById(firstInputId);
    const input2 = document.getElementById(secondInputId);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(resultsId);

    button.addEventListener('click', () => {
        display.textContent = calc(Number(input1.value), Number(input2.value));
    });
}

initOperator('first-add-number', 'second-add-number', 'add-button', 'addition-display', add);
initOperator('first-sub-number', 'second-sub-number', 'sub-button', 'sub-display', subtract);
initOperator('first-mult-number', 'second-mult-number', 'mult-button', 'mult-display', multiply);
initOperator('first-div-number', 'second-div-number', 'div-button', 'div-display', divide);

/* const firstAddNumberInput = document.getElementById('first-add-number');
const secondAddNumberInput = document.getElementById('second-add-number');
const additionDisplay = document.getElementById('addition-display');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    additionDisplay.textContent = add(Number(firstAddNumberInput.value), Number(secondAddNumberInput.value));
});

const firstSubNumberInput = document.getElementById('first-sub-number');
const secondSubNumberInput = document.getElementById('second-sub-number');
const subDisplay = document.getElementById('sub-display');
const subButton = document.getElementById('sub-button');

subButton.addEventListener('click', () => {
    subDisplay.textContent = subtract(Number(firstSubNumberInput.value), Number(secondSubNumberInput.value));
});

const firstMultNumberInput = document.getElementById('first-mult-number');
const secondMultNumberInput = document.getElementById('second-mult-number');
const multDisplay = document.getElementById('mult-display');
const multButton = document.getElementById('mult-button');

multButton.addEventListener('click', () => {
    multDisplay.textContent = multiply(Number(firstMultNumberInput.value), Number(secondMultNumberInput.value));
});

const firstDivNumberInput = document.getElementById('first-div-number');
const secondDivNumberInput = document.getElementById('second-div-number');
const divDisplay = document.getElementById('div-display');
const divButton = document.getElementById('div-button');

divButton.addEventListener('click', () => {
    divDisplay.textContent = divide(Number(firstDivNumberInput.value), Number(secondDivNumberInput.value));
}); */